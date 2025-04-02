const name=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');
const form=document.getElementById('form');

const nameError=document.getElementById('nameError');
const emailError=document.getElementById('emailError');
const passwordError=document.getElementById('passwordError');

form.addEventListener('submit',(e)=>{

    let validForm=true
    var emailPattern='@'

    if(name.value==='') {
        e.preventDefault();
        nameError.innerHTML="Please enter your name";
        validForm=false;
    }
    else{
        nameError.innerHTML="";
    }
    if (!email.value.match(emailPattern)) {
        e.preventDefault();
        emailError.innerHTML="Invalid email id";
        validForm=false;
    }
    else{
        emailError.innerHTML="";
    }
    if (password.value==='') {
        e.preventDefault();
        passwordError.innerHTML="Please enter your password";
        validForm=false;
    }
    else if(password.value.length<6){
        e.preventDefault();
        passwordError.innerHTML="password must be at lease 6 characters";
        validForm=false;
    }
    else{
        passwordError.innerHTML="";
    }
    if (validForm) {
        e.preventDefault();
        alert("Form Validationn Successfully")
        form.reset()
    }
})