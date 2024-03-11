const bar = document.getElementById('bars');
const cross = document.getElementById('cross');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
nav.classList.add('active')
    });
}
if(cross){
    cross.addEventListener('click',()=>{
nav.classList.remove('active')
    });
}