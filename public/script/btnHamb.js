const btnHamb = document.getElementById('btnHamb')

function open() {

    const nav = document.getElementById('header')
    const styleHamb = document.getElementById('styleHamb')
    nav.classList.toggle('dropdown')
    styleHamb.classList.toggle('fa-times')

}

btnHamb.addEventListener('click', open)