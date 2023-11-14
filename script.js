let input = document.getElementById('input')
let list = document.getElementById('list')

function addTask(){
    if(input.value === '')
    {
        alert('You must write something!')
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = input.value
        list.appendChild(li)
        input.value = ''

        let x = document.createElement('i')
        x.classList = 'fa-solid fa-trash-can'
        li.appendChild(x)
    }
    saveData()
}

list.addEventListener('click' , function(e){
    if(e.target.tagName === 'LI')
    {
        e.target.classList.toggle('checked')
    }
    if(e.target.tagName === 'I')
    {
        e.target.parentElement.remove();
    }
    saveData()
}, false)


function saveData(){
    localStorage.setItem('tasks' , list.innerHTML)
}

function showData(){
    list.innerHTML = localStorage.getItem('tasks')
}


showData();