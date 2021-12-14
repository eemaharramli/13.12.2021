// let buttons = document.querySelectorAll('.container__inner-btn')
// let boxes = document.querySelectorAll('.box')
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function(event) {
//         if (boxes.getAttribute('class', event.target.innerHTML)){
//             // boxes.style.backgroundColor = event.target.innerHTML
//             console.log(event.target.innerHTML)
//         }
//     })
//
// }



let elements = document.querySelectorAll('button');
let boxes = document.querySelectorAll('.box')
elements.forEach((item)=>{
    item.addEventListener('click',()=>{
        // console.log('item', item)
        // console.log('item value', item.value)
        // console.log('item inner', item.innerHTML.toLowerCase())
        boxes.forEach((box)=>{
            if (box.classList.contains(item.innerHTML.toLowerCase())){
                clearBox()
                box.style.backgroundColor = item.innerHTML.toLowerCase()
            }
        })
    })
})


function clearBox() {
    boxes.forEach(item=>{
        item.style.backgroundColor = ''
    })
}

