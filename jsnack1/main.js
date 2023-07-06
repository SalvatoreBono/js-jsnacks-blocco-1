const listName = ["Salvatore", "Vito", "Vanessa", "Francesco", "Caterina"];
const listSurname = ["Bono", "Verdi", "Rossi", "Bianchi", "Marrone"];
const randomListName = Math.floor(Math.random() * 5) + 0;
const randomListSurname = Math.floor(Math.random() * 5) + 0;
for (let i = 0; i < listName.length; i++) {
    const random = Math.floor(Math.random() * 5) + 0;
    for (let i = 0; i < listSurname.length; i++) {
        console.log(listName[random] + " " + listSurname[random])
    }
}
