const toggleSwitch = document.querySelector("#toggleSwitch");
const firebaseConfig = {
  apiKey: "AIzaSyDf05Y8-HKJZvkqjCZU9Zp3r85uUPJQdzU",
  authDomain: "social-media-dashboard-7812d.firebaseapp.com",
  databaseURL: "https://social-media-dashboard-7812d-default-rtdb.firebaseio.com",
  projectId: "social-media-dashboard-7812d",
  storageBucket: "social-media-dashboard-7812d.appspot.com",
  messagingSenderId: "332547602429",
  appId: "1:332547602429:web:687475280b4938f4e3cb94",
  measurementId: "G-ZPR0T6087B"

};

function themeSwitcher() {
    if (toggleSwitch.checked) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        // Add Light Theme in LocalStorage
        localStorage.setItem("theme", "light")
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        localStorage.removeItem("theme");
    }
}
document.querySelector(".login-btn").addEventListener("click", function() {
    // Add login functionality here
    console.log("Login button clicked");
});

document.querySelector(".register-btn").addEventListener("click", function() {
    // Add register functionality here
    console.log("Register button clicked");
});

toggleSwitch.addEventListener("click", function () {
    themeSwitcher();
})

// Login and Register Buttons
const loginBtn = document.querySelector(".login-btn");
const registerBtn = document.querySelector(".register-btn");
const loginForm = document.querySelector(".login-form");
const registerForm = document.querySelector(".register-form");

loginBtn.addEventListener("click", function() {
    loginForm.classList.add("active");
    registerForm.classList.remove("active");
});

registerBtn.addEventListener("click", function() {
    registerForm.classList.add("active");
    loginForm.classList.remove("active");
});

// Get Theme From Local Storage while Toggle Switch is Clicked
function latestTheme() {
    if (localStorage.getItem("theme")) {
        document.body.classList.add('light');
        toggleSwitch.checked = true;
    }
}

latestTheme();
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
