function login(){

const naam = document.getElementById("naam").value;
const password = document.getElementById("password").value;

if(naam === "Bryan" && password === "handigelinks"){

document.getElementById("login-screen").style.display = "none";
document.getElementById("site-content").style.display = "block";

}else{
alert("Verkeerde login");
}

}

