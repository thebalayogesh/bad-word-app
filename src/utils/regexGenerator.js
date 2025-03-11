const replacements = {
    a: '[a@4]', b: '[b8]', c: '[c(¢<]', e: '[e3€]', g: '[g9]',
    i: '[i1!|]', l: '[l1!|]', o: '[o0]', s: '[s5$]', t: '[t7+]',
    u: '[uü]', z: '[z2]'
};

const escapeRegex = (str) => str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

export const generateRegex = (word) => {
    const regexStr = word
        .split('')
        .map(char => replacements[char.toLowerCase()] || escapeRegex(char)) // Escape special chars
        .join('[^a-zA-Z0-9]*');

    return new RegExp(`\\b${regexStr}(ing|ed|er|es|s)?\\b`, 'gi');
};

