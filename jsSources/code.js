var firebaseConfig = {
  apiKey: "AIzaSyARETM_TZPuMqRT3Ipe0KBahrxRTD07np8",
  authDomain: "skoledatabase-5ca0e.firebaseapp.com",
  projectId: "skoledatabase-5ca0e",
  storageBucket: "skoledatabase-5ca0e.appspot.com",
  messagingSenderId: "1005938349621",
  appId: "1:1005938349621:web:cc127ec8c848820dd1437c",
  measurementId: "G-37TZ2JBDQX",
};

firebase.initializeApp(firebaseConfig);

const table = document.querySelector(`table`);
let db = firebase.firestore();

function personRegisterOnLoad() {
  const tableinfo =
    "<tr><th></th><th>Navn og Etternavn</th><th>Adresse</th><th>PersonNummer</th><th>Status</th></tr>";

  db.collection(`registerForTing`)
    .orderBy("Navn")
    .onSnapshot((data) => {
      table.innerHTML = "";
      table.innerHTML = tableinfo;
      data.docs.forEach((doc) => {
        table.innerHTML += `<tr><th><button
    
      onclick="db.collection('registerForTing').doc('${
        doc.id
      }').delete()">Delete</button> </th> <th> <a href="../sides/individual.html?individual=${encodeURI(
          doc.id
        )}"> ${doc.data().Navn} </a> </th><th>${
          doc.data().Adresse
        } </th> <th> ${doc.data().Personnummer}</th> <th> ${
          doc.data().Status
        }</th></tr>`;
      });
    });
}

let inputField = document.querySelectorAll(".input-field");

function addItemsData(e) {
  e.preventDefault();
  obj = {};
  inputField.forEach((input) => {
    obj[input.name] = input.value;
    input.value = "";
  });
  db.collection(`registerForTing`).add(obj);
}
//Bilregister

function bilRegisterOnLoad() {
  const tableInfoCar =
    "<tr><th></th><th>Eier</th><th>SkiltNummer</th><th>PersonNummer</th><th>Type Kjøretøy</th></tr>";

  db.collection(`registerForBiler`)
    .orderBy("Eier")
    .onSnapshot((data) => {
      table.innerHTML = "";
      table.innerHTML = tableInfoCar;
      data.docs.forEach((doc) => {
        table.innerHTML += `<tr><th><button
    
      onclick="db.collection('registerForBiler').doc('${
        doc.id
      }').delete()">Delete</button> </th> <th> <a href="individual.html?individual=${encodeURI(
          doc.id
        )}"> ${doc.data().Eier} </a> </th><th>${
          doc.data().SkiltNummer
        } </th> <th type="reference"> ${doc.data().Personnummer}</th> <th> ${
          doc.data().Type
        }</th></tr>`;
        console.log(doc.data().Personnummer);
      });
    });
}

let inputFieldCar = document.querySelectorAll(".input-field-car");

function addItemsDataBiler(e) {
  e.preventDefault();
  obj = {};
  inputFieldCar.forEach((input) => {
    obj[input.name] = input.value;
    input.value = ""
    console.log(inputFieldCar.value)
  });
  db.collection(`registerForBiler`).add(obj);
}

//Ekteskap Register

function ekteskapRegisterOnLoad() {
  const tableInfoEkte =
    "<tr><th></th><th>Person</th><th>PersonNummer</th><th>Ektefelle</th></tr>";

  db.collection(`registerForEkteskap`)
    .orderBy("Navn")
    .onSnapshot((data) => {
      table.innerHTML = "";
      table.innerHTML = tableInfoEkte;
      data.docs.forEach((doc) => {
        table.innerHTML += `<tr><th><button
    
      onclick="db.collection('registerForEkteskap').doc('${
        doc.id
      }').delete()">Delete</button> </th> <th> <a href="individual.html?individual=${encodeURI(
          doc.id
        )}"> ${doc.data().Navn} </a> </th><th>${
          doc.data().Personnummer
        } </th> <th type="reference"> ${doc.data().Ektefelle}</th></tr>`;
        console.log(doc.data().Ektefelle);
      });
    });
}

let inputFieldEkte = document.querySelectorAll(".input-field-ekte");

function addItemsDataEkteskap(e) {
  e.preventDefault();
  obj = {};
  inputFieldEkte.forEach((input) => {
    obj[input.name] = input.value;
    input.value = "";
  });
  db.collection(`registerForEkteskap`).add(obj);
}
