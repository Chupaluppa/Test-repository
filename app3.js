/*
Du skal lave nogle flere funktioner. Test hver af dem med console.log for at se om du får det rigtige resultat. Test dem hver især med flere forskellige inputs.
Funktioner du skal lave:
1. En funktion der tager en tekst-parameter med navnet navn som input, og returnerer teksten “Hejsa, navn”.
2. En funktion der tager to stykker tekst, og returnerer deres to forbogstaver sat sammen. Fx hvis input er “kat” og “hund”, skal return value være “kh”.
En funktion der tager to input: et tal og en tekst. Funktionen skal afgøre om teksten er længere end tallet, og returnerer true eller false.
*/
//ÆNDRING jkkjkjk
//1
function hejsa(navn) {
    return "Hejsa, " + navn;
}
console.log(hejsa("med dig"))

//2
function forbogstaver(s1, s2, s3) {
    return s1.substring(0, 1) + s2.substring(0, 1) + s3.substring(0, 1);
}
console.log(forbogstaver("Thor", "Ida", "Søren"));

//3
function erTekstLængereEndTal(tal, tekst) {
    return tekst.length > tal;
}
console.log(erTekstLængereEndTal(5, "abcdefg")); // true
console.log(erTekstLængereEndTal(10, "abcdefghij")); // false