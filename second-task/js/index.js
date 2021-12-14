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

function createLi(item) {
    debugger;
    const li = document.createElement('li')

    const a = document.createElement('a')
    a.setAttribute('href', '#')
    a.textContent = item;
    li.appendChild(a);

    return li;
}

/*
    Function for creating nav
*/

function createNav(){
    const menuItems = ['Main', 'About', 'Portfolio', 'Contact us']
    const nav = document.createElement('nav')
    for(let item of menuItems){
        var li = createLi(item);
        nav.appendChild(li)
    }

    return nav;
}

/*
    Function for creating a
*/

function createLink() {
    const menuItems = ['Main', 'About', 'Portfolio', 'Contact us']
    const a = document.createElement('a')

    a.setAttribute('href', '#')

    for(let item of menuItems){
        debugger;
        console.log('item', item);
        a.textContent = item
    }

    return a;
}

/*
    Function for creating span
*/

function createSpan() {
    const span = document.createElement('span')

    return span;
}

/*
    Toggle function
*/ 

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
