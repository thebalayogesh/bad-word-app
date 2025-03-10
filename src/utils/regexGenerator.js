const replacements = {
    a: '[a@4]', b: '[b8]', c: '[c(¢<]', e: '[e3€]', g: '[g9]',
    i: '[i1!|]', l: '[l1!|]', o: '[o0]', s: '[s5$]', t: '[t7+]',
    u: '[uü]', z: '[z2]'
};

// Function to escape regex special characters
const escapeRegex = (str) => str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

export const generateRegex = (word) => {
    const regexStr = word
        .split('')
        .map(char => replacements[char.toLowerCase()] || escapeRegex(char)) // Escape special chars
        .join('[^a-zA-Z0-9]*'); // Allow special chars in between

    return new RegExp(`\\b${regexStr}(ing|ed|er|es|s)?\\b`, 'gi');
};





// const replacements = {
//     a: '[a@4]', b: '[b8]', c: '[c(¢<]', d: '[d]', e: '[e3€]', f: '[f]', g: '[g9]',
//     h: '[h#]', i: '[i1!|]', k: '[k]', l: '[l1!|]', m: '[m]', n: '[n]', o: '[o0]',
//     p: '[p]', q: '[q]', r: '[r]', s: '[s5$]', t: '[t7+]', u: '[uü]', v: '[v]',
//     w: '[w]', x: '[x]', y: '[y]', z: '[z2]'
// };

// export const generateRegex = (word) => {
//     const regexStr = word
//         .split('')
//         .map(char => replacements[char.toLowerCase()] || char) // Replace each character
//         .join('[^a-zA-Z0-9]*'); // Allow random characters in between

//     return new RegExp(`\\b${regexStr}(ing|ed|er|es|s)?\\b`, 'gi'); // Support word variations
// };



// const replacements = {
//     a: '[a@4]', b: '[b8]', c: '[c(¢<]', e: '[e3€]', g: '[g9]',
//     i: '[i1!|]', l: '[l1!|]', o: '[o0]', s: '[s5$]', t: '[t7+]',
//     u: '[uü]', z: '[z2]'
// };

// export const generateRegex = (word) => {
//     const regexStr = word
//         .split('')
//         .map(char => replacements[char.toLowerCase()] || char)
//         .join('[^a-zA-Z0-9]*');
//     return new RegExp(`\\b${regexStr}(ing|ed|er|es|s)?\\b`, 'gi');
// };


// export const generateRegex = (badWords) => {
//     return new RegExp(`\\b(${badWords.join("|")})\\b`, "gi");
// };


// utils/regexGenerator.js

// export const generateProfanityRegex = (words) => {
//     if (!Array.isArray(words) || words.length === 0) {
//         return null; // No words to match
//     }

//     // Escape special characters to safely use in RegExp
//     const escapeRegex = (word) => word.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

//     // Map words to regex-safe versions and join them in a pattern
//     const pattern = words.map(escapeRegex).join("|");

//     // Create a case-insensitive, word-boundary regex
//     return new RegExp(`\\b(${pattern})\\b`, "gi");
// };
