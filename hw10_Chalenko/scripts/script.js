const LOGIN = "Admin";
const PASSWORD = "root";

const loginInEl = document.getElementById('login-input'); 
const passwordInEl = document.getElementById('password-input');
const btnSignInEl = document.getElementById('sign-in');
const mainEl = document.getElementById('container');
const registerEl = document.getElementById('text-block');

// Переключение состояния кнопки
function btnState(btn, state = false){
    if(state){
        btn.classList.remove('is-disabled');
        btn.removeAttribute('disabled');
    }
    else
    {
        btn.classList.add('is-disabled');
        btn.setAttribute('disabled', 'disabled');
    }
}

// создание сообщения об ошибке
function newErrorMsg(message){
    const errorMsgEl = document.createElement('div');
    errorMsgEl.classList.add('nes-container', 'is-centered', 'block', 'show-message');
    const errorTextEl = document.createElement('span');
    errorTextEl.classList.add('nes-text', 'is-error');
    errorTextEl.innerText = message;
    errorMsgEl.append(errorTextEl);
    return errorMsgEl;
}

// изменение состояния кнопки от заполнения инпутов
function onCheckFilling(login, password, btn){
    return () =>{
        if(login.value == "" || password.value == ""){
            btnState(btnSignInEl, false);
        }
        else{
            btnState(btnSignInEl, true);
        }
    };
}

// проверка логина и пароля
function onVerification(login, password, main){
    return () => {
        if(login.value === LOGIN && password.value === PASSWORD){
            registerEl.remove();
            mainEl.append(createWelcome());
            console.log("OK");
        }
        else{
            login.classList.add('is-error');
            password.classList.add('is-error');

            if(main.childElementCount < 2)
                main.append(newErrorMsg("Sorry, we cannot find an account with this name. Please try again."));
        }
    };
}

// сброс стилей при повторвном вводе
function onVerificationReset(login, password, main){
    return () => {
        if(main.childElementCount > 1){
            main.children[1].remove();
            login.classList.remove('is-error');
            password.classList.remove('is-error');    
        }
    };
}

// создание окна приветствия
function createWelcome(){
    const welcome = document.createElement('div');
    welcome.classList.add('nes-container', 'is-centered', 'block');
    welcome.innerText = "welcome";
    welcome.style.fontSize = "2rem";
    const octocat = document.createElement('i');
    octocat.classList.add('nes-octocat', 'animate');
    welcome.append(octocat);
    return welcome;
}

btnState(btnSignInEl); // отключаем кнопку
loginInEl.addEventListener('input', onCheckFilling(loginInEl, passwordInEl, btnSignInEl));
passwordInEl.addEventListener('input', onCheckFilling(loginInEl, passwordInEl, btnSignInEl));
loginInEl.addEventListener('focus', onVerificationReset(loginInEl, passwordInEl, mainEl));
passwordInEl.addEventListener('focus', onVerificationReset(loginInEl, passwordInEl, mainEl));
btnSignInEl.addEventListener('click', onVerification(loginInEl, passwordInEl, mainEl));

// loginInEl.addEventListener('change', onVerificationReset(loginInEl, passwordInEl, mainEl));
// passwordInEl.addEventListener('change', onVerificationReset(loginInEl, passwordInEl, mainEl));



