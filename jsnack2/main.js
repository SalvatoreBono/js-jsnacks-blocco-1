//                 Posizione elementi
//            0  1  2  3  4  5  6  7  8  9
const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//risultatoSomma: serve come contenitore per fare la somma con il numb[i]
let risultatoSomma = 0;
for (let i = 0; i < numb.length; i++) {
    console.log(numb[i])
    if (i % 2 !== 0) {
        (risultatoSomma += numb[i])
        //+=: risultatoSomma = risultatoSomma + numb[i] =
        //0 + 2,  2+4, 6+6,  12+8, 20+10 = 30
    }
}
console.log(risultatoSomma);