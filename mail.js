const firebaseConfig = {
    apiKey: "AIzaSyC0PU9SsjZg65tYifuADiEurrU9LwteA1w",
    authDomain: "veracitiz-form-35c05.firebaseapp.com",
    databaseURL: "https://veracitiz-form-35c05-default-rtdb.firebaseio.com",
    projectId: "veracitiz-form-35c05",
    storageBucket: "veracitiz-form-35c05.appspot.com",
    messagingSenderId: "720291621150",
    appId: "1:720291621150:web:9f71db9673a8413799810f"
  };


  firebase.initializeApp(firebaseConfig);
  //reference your database
  var contactFormDB = firebase.database().ref("veraform");

  document.getElementById("contactForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();
    var name = getElementByVal("name");
    var designation = getElementByVal("designation");
    var organisation = getElementByVal("organisation");
    var city = getElementByVal("city");
    var number = getElementByVal("number");
    var emailid = getElementByVal("email");

    saveMessages(name,designation,organisation,city,number,emailid);

    //enable alert
    document.querySelector('.alert').style.display = "block";

    //remoce alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = "none";

    }, 3000);
    
    //reset form
    document.getElementById("contactForm").reset();

  }


  const saveMessages = (name,designation,organisation,city,number,emailid) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        designation: designation,
        organisation: organisation,
        city: city,
        number: number,
        emailid: emailid,


    });
 };

  const getElementByVal = (id) => {
    return document.getElementById(id).value;
  }