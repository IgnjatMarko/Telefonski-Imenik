//Directory za localStorage

let directory = JSON.parse(localStorage.getItem("directory")) || [];

const imePatern = /^[A-Z][a-z]{2,}(\s[A-Z][a-z]{2,}){1,}$/;
const telBroj = /^0(1|2|3|6)[0-9]\-[0-9]{3}-[0-9]{3,4}$/;

document.querySelector("#confirm").addEventListener("click", checkData);

//Provera podataka

function checkData(e) {
  e.preventDefault();

  let ime = document.querySelector("#name").value;
  let tel = document.querySelector("#telefon").value;

  if (imePatern.test(ime)) {
    if (telBroj.test(tel)) {
    } else {
      alert("Nije dobro broj unesen. Format je: XXX-XXX-XXXX");
    }
  } else {
    alert("Nije dobro ime uneseno...");
  }

  //ako su podaci tacni

  if (imePatern.test(ime) && telBroj.test(tel)) {
    let entry = { ime: ime, tel: tel };
    directory.push(entry);

    localStorage.setItem("directory", JSON.stringify(directory));

    updateDirectoryTable();
  } else {
    alert("Nesto nije u redu.");
  }
}

//Izbrisi podatke
function deleteEntry(i) {
  directory.splice(i, 1);

  localStorage.setItem("directory", JSON.stringify(directory));

  updateDirectoryTable();
}

//Izmeni broj
function modifyEntry (i, newTelBroj){
    if(telBroj.test(newTelBroj)) {
        directory[i].tel = newTelBroj;

        localStorage.setItem('directory', JSON.stringify(directory));

        updateDirectoryTable();
    } else {
        alert("Nesto nije u redu.");
    }

}

//Update podataka
function updateDirectoryTable() {
  let table = document.querySelector("#directoryTable");

  while (table.rows.length > 1) {
    table.deleteRow(1);
  }

  for (let i = 0; i < directory.length; i++) {
    let row = table.insertRow();

    let imeCell = row.insertCell();
    let brojCell = row.insertCell();
    let izmenaCell = row.insertCell();

    imeCell.innerHTML = directory[i].ime;
    brojCell.innerHTML = directory[i].tel;
    izmenaCell.innerHTML =
      '<input type="button" value="Izbrisi" onclick="deleteEntry(' +
      i +
      ')">' +
      '<input type="button" value="Izmeni" onclick="modifyEntry(' +
      i +
      ", prompt('Enter new phone number'))\">";
  }
}

//Promena podataka na tabli
window.onload = updateDirectoryTable;
