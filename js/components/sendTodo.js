import { ajaxPost, ajaxGet } from '../services/ajax.js'

const d = document

export const sendTodo = (form, list) => {
  d.addEventListener('submit', async (e) => {
    if (e.target.matches(`#${form}`)) {
      try {
        e.preventDefault()
        const formData = new FormData(e.target)
        const res = await ajaxPost(
          './php/controllers/todoController.php',
          formData,
        )
        getTodo(list)
        console.log(res.info)
      } catch (error) {
        console.error(error)
      }
    }
  })
}

export const getTodo = async (list) => {
  try {
    const $todoList = d.getElementById(list),
      $fragment = d.createDocumentFragment()
    if ($todoList.hasChildNodes) {
      $todoList.textContent = ''
    }
    const res = await ajaxGet('./php/controllers/getTodoController.php')
    res.forEach((elem) => {
      const $element = d.createElement('a'),
        $div = d.createElement('div'),
        $checkbox = d.createElement('input')
      $element.href = '#'
      $element.textContent = elem.work
      $checkbox.type = 'checkbox'
      $checkbox.checked = elem.todo ? true : false
      $div.classList.add('list__item')
      $div.appendChild($element)
      $div.appendChild($checkbox)
      $fragment.appendChild($div)
    })
    $todoList.appendChild($fragment)
  } catch (error) {
    console.error(error)
  }
}
