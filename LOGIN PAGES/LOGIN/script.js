const Container=document.querySelector('.container');
const rigisterBtn=document.querySelector('.register-btn');
const loginBtn=document.querySelector('.login-btn');

rigisterBtn.addEventListener('click',()=>{
    Container.classList.add('active');
}
);
loginBtn.addEventListener('click',()=>{
    Container.classList.remove('active');
}
);

function link(){
    alert("login with linkedin");
}

function google(){
    alert("logined with google");
}

function git(){
    alert("logined with github");
}

function face(){
    alert("logined with facebook");
}

function login(){
    alert("logined sucessfully");
}

function register(){
    alert("registered succesfully");
}