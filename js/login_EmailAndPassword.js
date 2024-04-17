const firebaseConfig = {
  apiKey: "AIzaSyAczBzL80MoEe8qm91CCHHxX-_8iAla-S8",
  authDomain: "service-city-app.firebaseapp.com",
  projectId: "service-city-app",
  storageBucket: "service-city-app.appspot.com",
  messagingSenderId: "1068099519430",
  appId: "1:1068099519430:web:a896e65c893c36d833a8c7",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

  // inputs
  const datab = firebase.database().ref('data');
  function UserRegister(){
  const email = document.getElementById("eemail").value;
  const password = document.getElementById("lpassword").value;
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){

  }).catch(function(error){
    const errorcode = error.code;
    const errormsg = error.message;
  });
}

const auth = firebase.auth();
function SignIn(){
    const email = document.getElementById('eemail').value;
    const password = document.getElementById('lpassword').value;
    const promise = auth.singInWithEmailAndPassword(email, password);
    promise.catch(e => alert(e.msg));
    window.open("https://www.google.com"."_self");
}

document.getElementById('form').addEventListener('submit'.(e) => {
    e.preventDefault();
    const 
})




