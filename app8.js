//1
function sumTekstLaengder(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i].length;
    }
    return sum;
}

let array = ["hej", "med", "dig"];
let resultat1 = sumAfTekstLængder(array);
console.log(resultat1);

//2
function kombinerArrays(array1, array2) {
    let kombineretArray = array1.concat(array2);
    return kombineretArray;
}

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let resultat2 = sammensætArrays(array1, array2);
console.log(resultat2);

//3
function summerArrays(array1, array2) {
    let sumArray = [];
    for (let i = 0; i < array1.length; i++) {
        sumArray.push(array1[i] + array2[i]);
    }
    return sumArray;
}
let resultat3 = summerArrays(array1, array2);
console.log(resultat3);

//4
function findLaengsteTekst(array) {
    let laengsteTekst = "";
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > laengsteTekst.length) {
            laengsteTekst = array[i];
        }
    }
    return laengsteTekst;
}
let tekstArray2 = ["hej", "med", "dig", "alle", "sammen"];
let resultat4 = længsteTekst(tekstArray2);
console.log(resultat4);


