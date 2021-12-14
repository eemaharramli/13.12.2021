let elements = document.querySelectorAll('button');
let boxes = document.querySelectorAll('.box')
elements.forEach((item)=>{
    item.addEventListener('click',(e)=>{
        clearBox()
        let color = e.target.getAttribute('data-color');
        document.getElementsByClassName(color)[0].style.backgroundColor = color;
    })
})

function clearBox() {
    boxes.forEach(item=>{
        item.style.backgroundColor = ''
    })
}
