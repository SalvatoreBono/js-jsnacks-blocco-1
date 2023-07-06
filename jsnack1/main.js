const listName = ["Salvatore", "Vito", "Vanessa", "Francesco", "Caterina"];
const listSurname = ["Bono", "Verdi", "Rossi", "Bianchi", "Marrone"];
const randomListName = Math.floor(Math.random() * 5) + 0;
const randomListSurname = Math.floor(Math.random() * 5) + 0;
/* const nameMix = listName.length = randomListName; */
for (let i = 0; i < listName.length; i++) {
    for (let i = 0; i < listSurname.length; i++) {
        console.log(listName[i] + " " + listSurname[i])
    }
}
