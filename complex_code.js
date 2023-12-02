/* 
Filename: complex_code.js
Description: Complex JavaScript code example demonstrating advanced programming concepts and techniques.
*/

// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create an instance of the express application
const app = express();

// Set up JSON body parser middleware
app.use(bodyParser.json());

// Connect to MongoDB database using Mongoose
mongoose.connect('mongodb://localhost/my_database', { useNewUrlParser: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Define a user schema using Mongoose
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// Define a User model using the user schema
const User = mongoose.model('User', userSchema);

// Define routes for user registration and authentication
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists in the database
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'Username is already taken' });
    }

    // Encrypt the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object and save it to the database
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    return res.status(201).json({ message: 'User registration successful' });
  } catch (error) {
    console.error('Error registering user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Compare the provided password with the stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Generate a JSON Web Token (JWT) for authentication
    const token = jwt.sign({ userId: user._id }, 'secret_key');
    return res.json({ token });
  } catch (error) {
    console.error('Error authenticating user:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

// Define a protected route that requires authentication
app.get('/protected', verifyToken, (req, res) => {
  // Get the user ID from the JWT payload
  const userId = req.userId;

  // Retrieve the user data from the database
  User.findById(userId, (err, user) => {
    if (err) {
      console.error('Error retrieving user data:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }

    return res.json(user);
  });
});

// Verify the authenticity of the JWT
function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  jwt.verify(token, 'secret_key', (err, payload) => {
    if (err) {
      console.error('Error verifying JWT:', error);
      return res.status(403).json({ error: 'Invalid token' });
    }

    req.userId = payload.userId;
    next();
  });
}

// Start the server and listen on port 3000
app.listen(3000, () => {
  console.log('Server running on port 3000');
});