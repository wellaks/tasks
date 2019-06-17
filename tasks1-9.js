// 1
function generateArray(n) {
    return [...Array(n).keys()];
}

// 2
function findElement(str, arr) {
    return arr.filter(element => element.hasOwnProperty(str));
}

// 3
function sumPositive(arr) {
    return arr.reduce((sum, element) => (element > 0 ? sum + element : sum), 0);
}

// 4
function stringToArray(arr) {
    return arr.join(' ');
}

//5
function removeDuplicates(arr) {
    return arr.reduce((array, el) => {
        if (array.indexOf(el) < 0) array.push(el);
        return array;
    }, []);
}

// 6
function annagramFinder(str) {
    const annagrams = [];
    const words = {};
    const filteredStr = str
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .replace(/\s{2,}/g, ' ')
        .trim();

    const array = filteredStr.split(' ');
    const sortedArr = array.map(el =>
        el
            .toLowerCase()
            .split('')
            .sort()
            .join(''),
    );

    sortedArr.forEach((el, i) => {
        if (words[el]) words[el].push(array[i]);
        else words[el] = [array[i]];
    });

    for (const key in words)
        if (words.hasOwnProperty(key) && words[key].length > 1)
            annagrams.push(words[key]);

    return annagrams;
}

// 7
function transponseMatrix(arr) {
    return arr[0].map((col, i) => arr.map(row => row[i]));
}

// 8
function keyValueSwap(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            obj[obj[key]] = key;
            delete obj[key];
        }
    }
}

// 9
function sumTo(n) {
    if (n > 1) return n + sumTo(n - 1);

    return n;
}
