const btnHamb = document.getElementById('btnHamb')

function open() {

    const header = document.querySelector('header')
    
    header.classList.toggle('dropdown')
    

}

btnHamb.addEventListener('click', open)