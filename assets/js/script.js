const addItem = (dob,fullName, nickName) =>{
  console.log(dob,fullName, nickName)
//format date value
  const date = new Date(dob);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  let itemList = document.getElementById('userList');
  let li = document.createElement('li');
  li.className = 'list-group-item d-flex justify-content-between';
  li.innerHTML = `
          <div>
            <h5>${fullName}</h5>
            <p class="m-0">${formattedDate} | <span>${nickName}</span></p>
          </div>
          <div class="d-flex align-items-center gap-3 dropstart">
            <button class="mark-read-btn  bg-primary text-white p-2 rounded-5 border-0"><i
                class="fa-solid fa-check"></i></button>
            <button class="bg-transparent text-secondary dropdown-toggle p-2 rounded-5 border-0 fs-3"
              data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-ellipsis-vertical"></i></button>
            <ul class="dropdown-menu ">
              <li class="mark-item"><a class="dropdown-item" href="#">Mark as Done</a></li>
              <hr class="dropdown-divider">
              <li class="delete"><a class="dropdown-item" href="#">Delete</a></li>
            </ul>
          </div>
        `;

  itemList.appendChild(li);
}

// Function to handle form submission
const handleSubmit =(event)=> {
  event.preventDefault();
  let dob = document.getElementById('dob').value;
  let fullName = document.getElementById('fullName').value;
  let nickName = document.getElementById('nickName').value;
  addItem(dob, fullName,nickName);
  hideFunc();
  document.getElementById('userForm').reset();
  deleteItem();
  markAsDone();
}

//modal hide
function hideFunc() {
  let myModalEl = document.getElementById('userCreate')
  let modal = bootstrap.Modal.getInstance(myModalEl)
  modal.hide()
}


//handle item deletion
const deleteItem = ()=>{
  const deleteItem = document.querySelectorAll('.delete')
  deleteItem.forEach(element => {
    console.log(element)
    element.addEventListener('click',(e)=>{
      e.target.parentNode.parentNode.parentNode.parentNode.remove();
    })
  });
}
deleteItem();

const markAsDone = () =>{
  const addMark = document.querySelectorAll('.mark-item')
    addMark.forEach(element => {
      console.log(element)
      element.addEventListener('click',(e)=>{
        //debugger;
        let markBtn =  e.target.parentNode.parentNode.parentNode.children[0];
       // debugger;
        markBtn.classList.add('active')
      })
    });
}
markAsDone()

// click submit
document.getElementById('userForm').addEventListener('submit', handleSubmit);

