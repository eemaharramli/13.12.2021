const root = document.querySelector('#root')
root.appendChild(createHeader())

const header = document.querySelector('header')
const menu = header.appendChild(createDiv('menu'))
const nave = menu.appendChild(createNav())
const menuBtn = header.appendChild(createDiv('menu-btn'))
createMenuBtn()

/*
    Function for creating Menu button
*/

function createMenuBtn() {
    for (let i = 1; i <= 4; i++) {
        menuBtn.appendChild(createSpan())
    }
}

/*
    Function for create header
*/

function createHeader() {
    const header = document.createElement('header')

    return header
}

/*
    Function for creating div
*/

function createDiv(className) {
    const div = document.createElement('div')
    div.classList.add(className)

    return div
}

/*
    Function for creating nav
*/

function createNav(){
    const nav = document.createElement('nav')
    for (let index = 1; index <= 4; index++) {
        nav.appendChild(createLi())
    }
    return nav
}

/*
    Function for creating li
*/

function createLi() {
    const li = document.createElement('li')
    li.appendChild(createLink())

    return li
}

/*
    Function for creating a
*/

function createLink() {
    const menuItems = ['Main', 'About', 'Portfolio', 'Contact us']
    const a = document.createElement('a')

    a.setAttribute('href', '#')

    for(let item of menuItems){
        a.textContent = item
    }

    return a
}

/*
    Function for creating span
*/

function createSpan() {
    const span = document.createElement('span')

    return span
}

/*
    Toggle function
*/ 

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})