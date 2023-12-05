/*!
 * sophisticated-code.js
 *
 * This code demonstrates a sophisticated and elaborate JavaScript function
 * that performs complex string manipulation and data analysis.
 *
 * Author: OpenAI
 */

/**
 * This function extracts the unique words from a given text, removing any
 * duplicates and returning them as an array.
 *
 * @param {string} text - The text from which to extract unique words.
 * @returns {Array} An array of unique words.
 */
function extractUniqueWords(text) {
  // Step 1: Split the text into an array of words
  const words = text.split(/\s+/);

  // Step 2: Create a Set to store unique words
  const uniqueWords = new Set();

  // Step 3: Iterate over each word and add it to the uniqueWords set
  for (let i = 0; i < words.length; i++) {
    const word = words[i].toLowerCase().replace(/[^\w\s]/g, '');
    if (word !== '') {
      uniqueWords.add(word);
    }
  }

  // Step 4: Convert the Set to an array and return it
  return Array.from(uniqueWords);
}

/**
 * This function calculates the word frequency in a given text and returns
 * an object with each unique word and its frequency count.
 *
 * @param {string} text - The text for which to calculate word frequency.
 * @returns {object} An object with word frequency counts.
 */
function calculateWordFrequency(text) {
  // Step 1: Extract unique words from the text
  const uniqueWords = extractUniqueWords(text);

  // Step 2: Initialize an empty object to store word frequency counts
  const wordFrequency = {};

  // Step 3: Iterate over each unique word and count its occurrences in the text
  for (let i = 0; i < uniqueWords.length; i++) {
    const word = uniqueWords[i];
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const count = (text.match(regex) || []).length;
    wordFrequency[word] = count;
  }

  // Step 4: Return the word frequency object
  return wordFrequency;
}

/**
 * This is the main function that demonstrates the usage of the above functions.
 * It performs complex string manipulation and data analysis on a given text.
 *
 * @param {string} text - The text on which to perform string manipulation and analysis.
 */
function sophisticatedCode(text) {
  /*
   * Step 1: Convert the text to lowercase
   * The toLowerCase() method returns the calling string value converted to lowercase.
   * This step ensures case-insensitivity in further operations.
   */
  text = text.toLowerCase();

  /*
   * Step 2: Count the number of sentences in the text
   * Count the number of occurrences of periods ".", exclamation marks "!", and question marks "?".
   * This step assumes that sentences end with these punctuation marks.
   */
  const sentenceCount = (text.match(/[.!?\u2026]/g) || []).length;

  /*
   * Step 3: Remove all non-alphanumeric characters except whitespaces
   * The replace() method replaces all characters that are not alphanumeric or whitespaces with an empty string.
   * We use the regular expression [^\w\s] to match any character that is not a word character or whitespace.
   * This step ensures proper word extraction in later steps.
   */
  text = text.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');

  /*
   * Step 4: Extract unique words from the text
   * We call the extractUniqueWords() function defined earlier.
   * The function splits the text into an array of words and removes duplicates.
   */
  const uniqueWords = extractUniqueWords(text);

  /*
   * Step 5: Count the number of words in the text
   */
  const wordCount = uniqueWords.length;

  /*
   * Step 6: Calculate word frequency
   * We call the calculateWordFrequency() function defined earlier.
   * The function returns an object containing each unique word and its frequency count.
   */
  const wordFrequency = calculateWordFrequency(text);

  /*
   * Step 7: Output the results
   * We log the sentence count, word count, and word frequency object to the console.
   */
  console.log('Sentence Count:', sentenceCount);
  console.log('Word Count:', wordCount);
  console.log('Word Frequency:', wordFrequency);
}

// Example usage:
const text = `This is a sophisticated and elaborate JavaScript code that performs complex string manipulation and data analysis. It demonstrates the usage of multiple functions and techniques. The code extracts unique words from a given text, calculates their frequency count, and performs various string manipulation operations such as removing non-alphanumeric characters and converting the text to lowercase. It showcases the power and versatility of JavaScript as a programming language.`;
sophisticatedCode(text);