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

db.collection(`registerForTing`)
  .orderBy("Navn")
  .onSnapshot((data) => {
    table.innerHTML = "";
    data.docs.forEach((doc) => {
      table.innerHTML += `<tr><th><button
    
      onclick="db.collection('registerForTing').doc('${
        doc.id
      }').delete()">Delete</button><a href="individual.html?individual=${encodeURI(
        doc.id
      )}"> ${doc.data().Navn} </a> </th><th> Adresse: ${
        doc.data().Adresse
      } </th> <th>Personnummer: ${doc.data().Personnummer} Status: ${
        doc.data().Status
      }</th></tr>`;
    });
  });

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
