const addForm = document.querySelector('.add');
const search = document.querySelector('.search input');
const list = document.querySelector('.todos');
const doneList = document.querySelector('.done');


const generateTemplate = todo => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      
      <i class="fas fa-check"></i>


    </li>
  `;
  list.innerHTML += html;
};
const addToDone= todo =>{
  const html=`<li class="list-group-item d-flex justify-content-between align-items-center">
      <span style="text-decoration: line-through">${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>`
    doneList.innerHTML+=html;
}

const filterTodos = term => {

  // add filtered class
  Array.from(list.children )
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  // remove filtered class
  Array.from(list.children )
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

};
const filterDone = term => {

  // add filtered class
  Array.from(doneList.children )
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  // remove filtered class
  Array.from(doneList.children )
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove('filtered'));

};

// add todos event
addForm.addEventListener('submit', e => {
  
  e.preventDefault();
  const todo = addForm.add.value.trim();

  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  }

});

// move todos event to done
list.addEventListener('click', e => {
//const store;
  if(e.target.classList.contains('fa-check')){
     
     const store=e.target.parentElement;
     e.target.parentElement.remove();
     addToDone(store.textContent);
          }
     

});

// delete done event
doneList.addEventListener('click', e => {
//const store;
  if(e.target.classList.contains('delete')){
     //store=e.target.parentElement();
     e.target.parentElement.remove();
     }
     
  

});

// filter todos event
search.addEventListener('keyup', () => {

  const term = search.value.trim().toLowerCase();
  filterTodos(term);
  filterDone(term);

});

//checking method