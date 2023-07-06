const listName = ["Salvatore", "Vito", "Vanessa", "Francesco", "Caterina"];
const listSurname = ["Bono", "Verdi", "Rossi", "Bianchi", "Marrone"];

for (let i = 0; i < listName.length; i++) {

    for (let i = 0; i < listSurname.length; i++) {
        const randomListName = Math.floor(Math.random() * 5) + 0;
        const randomListSurname = Math.floor(Math.random() * 5) + 0;
        console.log(listName[randomListName] + " " + listSurname[randomListSurname])

    }
}
