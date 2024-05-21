let btnOpen = document.querySelector('.menu');
let btnClose = document.querySelector('.btn-close');
let aside = document.querySelector('.container');
let div1 = document.querySelector('.firstdiv');
let div2 = document.querySelector('.seconddiv');

btnOpen.addEventListener('click', ()=>{
    if(aside.style.width = "0"){
        aside.style.width ='100%';
        aside.style.transition ='.3s linear';
        div1.style.transform = 'rotate(45deg)';
        div2.style.transform = 'rotate(-45deg)';
        document.body.style.overflow = 'hidden';
    }
})
btnClose.addEventListener('click', ()=>{
    if(aside.style.width = "100%"){
        aside.style.width ='0';
        aside.style.transition ='.3s linear';
        div1.style.transform = 'rotate(0deg)';
        div2.style.transform = 'rotate(0deg)';
        document.body.style.overflow = 'auto';
    }
})