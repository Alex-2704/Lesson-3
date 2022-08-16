const container = document.querySelector("#homework")

const homework = [
  {type: 'js', title: 'Выучить JavaScript', done: true},
  {type: 'git', title: 'Попрактиковаться с Git', done: true},
  {type: 'react', title: 'Изучить React', done: false},
  {type: 'node', title: 'Понять NodeJS', done: false},
  {type: 'work', title: 'Устроиться на работу', done: false}
]

function render() {
  let html ''
  
  for (let i = 0; i < homework.length; i++) {
    html += toHTML(homework[i])
  }
  
  container.innerHTML = html 
}

function toHTML(skill) {
  const checked = skill.done ? 'checked' : ''
  return `
  <li>
  <lable>
  <input type="checkbox" ${checked} />
  ${homework.title}
</label>
  <li>
  `
}

render()