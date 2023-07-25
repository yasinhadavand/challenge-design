const myform = document.querySelector('#my-form');
const emailInput = document.querySelector('#email');
const nameInput = document.querySelector('#name');
const Itemsuser = document.querySelector('#Items');
const msg = document.querySelector('.msg');


myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(!nameInput.value || !emailInput.value){
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter feilds';
    }else{
        msg.innerHTML = '';
        msg.classList.remove('error');


    }
    if(!nameInput.value){
        nameInput.classList.add('false');
        nameInput.classList.remove('true');
    }
    else{
        nameInput.classList.add('true');
        nameInput.classList.remove('false')
    }
    if(!emailInput.value){
        emailInput.classList.add('false');
        emailInput.classList.remove('true');
    }
    else{
        emailInput.classList.add('true');
        emailInput.classList.remove('false')
    }



    
    console.log(emailInput.value);
}