let baseTodo = [
    {
        id:1,text :'i will go to piano class',isDone: false,isImportent:false, isChange: false
    },
    {
        id:2,text :'go to work',isDone: false,isImportent:false, isChange: false
    },
    {
        id:3,text :'i will to',isDone: false,isImportent:false, isChange: false
    }
]

let list = document.querySelector('.content')
let addInput = document.querySelector('.form_input')
let addTask = document.querySelector('.form_btn')
let form = document.querySelector('.form')


const addDateForList = ( ) => {
baseTodo.forEach( (item) => {
    list.innerHTML += `<div>
    <li class = "content_list-item">${item.text}</li>
    </div>
    `
})
}
addDateForList()

const del = document.querySelectorAll(".content_btn")


function removecontent(e) {
    const remove = e.currentTarget;
    remove.parentElement.remove();
}

del.forEach((del) => del.addEventListener ('click', removecontent));
console.log(del);

form.addEventListener( 'sumbit', (e) => {
    e.preventDefault()
    baseTodo = [...baseTodo, {
id:baseTodo.length ? baseTodo.at(-1).id +1:1,
text: addInput.value,
isDone: false,
isImportent: false,
isChange: false,
    }]
    addInput.value = ' '
    addDateForList()
})
