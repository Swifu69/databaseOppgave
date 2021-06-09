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
  
  const table = document.querySelector("table");
  const db = firebase.firestore();
  const urlParams = new URLSearchParams(location.search);
  const individualId = decodeURI(urlParams.get("individual"));
  console.log(individualId, urlParams);
  
  db.collection("registerForTing")
    .doc(individualId)
    .get()
    .then((doc) => {
        const individual = doc.data()
        for (let key in individual) table.innerHTML += `<th><td> ${key}: ${individual[key]} </td></th>`  });