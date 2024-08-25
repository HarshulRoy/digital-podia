let nav = document.getElementsByClassName('nav')[0]
window.addEventListener('scroll',addclass)

function addclass(e){
    if(scrollY>50){
        console.log('done')
        nav.classList.add('active')
    }else{
        nav.classList.remove('active')
    }
}