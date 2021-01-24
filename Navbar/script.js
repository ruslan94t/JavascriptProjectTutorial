let menu = document.querySelector('.menu');
let burger = document.querySelector('.burger');
let open = burger.querySelector('#open');

function isOpenMenu(elem, tar){
elem.classList.add('activeMenu');
tar.className='fas fa-times';

}
function isCloseMenu(elem, tar){
    elem.classList.remove('activeMenu')
    tar.className='fa fa-bars';

}

open.addEventListener('click', ()=>{

if(!menu.classList.contains('activeMenu')){
    isOpenMenu(menu, open)
  
}else{
   
    isCloseMenu(menu, open)
 
}
})