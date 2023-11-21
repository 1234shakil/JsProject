// search section starting
const  search_box = document.querySelector('.search_box')

const search_btn = document.querySelector('#search_btn')

const cloes_btn = document.querySelector('.cloes_btn')

search_btn.addEventListener('click',()=>{
    search_box.style ='transform: scale(1) rotate(0deg);'
}
)
cloes_btn.addEventListener('click',()=>{
    search_box.style ='transform: scale(0) rotate(360deg)'
}
)
// search section ending 

// dropmenu starting
const dotIcon = document.querySelector('.dotIcon');
const dorpIcon = document.querySelector('.dorpIcon');
const dorpmenu = document.querySelector('.dorpmenu');
const main = document.querySelector('main');


dotIcon.addEventListener('click',()=>{
    dorpIcon.style = 'transform: scale(1);'

})
main.addEventListener('mouseover',()=>{
    dorpIcon.style = 'transform: scale(0);'
  
})

// dropmenu ending

// site bar starting
const asite = document.querySelector('aside')

const asit_btn = document.querySelector('.asit_btn')

asit_btn.addEventListener('click',()=>{
    asite.classList.toggle('asite_show')
})
main.addEventListener('click',()=>{
    asite.classList.remove('asite_show')
})
// site bar ending


// shopping bar starting
const shopping_open_btn = document.querySelector('.shopping_open_btn');
const shoping_drop = document.querySelector('.shoping_drop');
const Shopping_cloes_btn = document.querySelector('.Shopping_cloes_btn');

shopping_open_btn.addEventListener('click',()=>{
    shoping_drop.style ='transform: scaleX(1);'
})
Shopping_cloes_btn.addEventListener('click',()=>{
    shoping_drop.style ='transform: scaleX(0);'
})
// shopping bar ending


// login password starting
const password = document.querySelector('#password')
const show_hiden = document.querySelector('.eye')

show_hiden.addEventListener('click',()=>{
    if(password.type == 'password'){
        password.type = 'text';
        show_hiden.innerHTML = '<i class="fa-solid fa-eye"></i>'
    }else{
        password.type = 'password';
        show_hiden.innerHTML = '<i class="fa-solid fa-eye-low-vision"></i>'

    }
})

// login password ending
