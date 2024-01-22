const ul = document.querySelector('ul')
const input = document.querySelector('input')
const button = document.querySelector('button')

const btnClicked = () => {
    let val = input.value
    input.value = ""
    const li = document.createElement('li')
    const span = document.createElement('span')
    const btn = document.createElement('button')

    btn.addEventListener('click', () => {
        ul.removeChild(li)
    })

    span.textContent = val
    btn.textContent = "Delete"

    li.appendChild(span)
    li.appendChild(btn)

    ul.appendChild(li)
    input.focus()
}

button.addEventListener('click', btnClicked)