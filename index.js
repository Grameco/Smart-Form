const email = document.querySelector("#email-id");
const password = document.querySelector("#password");
const button = document.querySelector(".mainBtn");
let flag = 1;

function a() {
    
    if(email.value == "" || password.value == "" ) {
        shiftButton();
        email.style.border = "2px solid red";
        password.style.border = "2px solid red";
        button.value = "Fill the details!";
    }
    else {
        email.style.border = "2px solid green";
        password.style.border = "2px solid green";
        button.style.border = "2px solid green";
        button.innerHTML = "Good!";
        button.style.right = "250px";
    }
}

function shiftButton() {
    if( flag == 1) {
        button.style.right = "140px";
        flag = 2;
    }
    else if( flag == 2 ) {
        button.style.right = "360px";
        flag = 1;
    }
}