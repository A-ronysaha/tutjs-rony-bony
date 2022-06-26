displayNote()
let addbtn = document.getElementById("addBtn");
addbtn.addEventListener("click", add);

function add(e) {
  let text = document.getElementById("addTxt");
  let data = localStorage.getItem("notes");
  let textObj;

  if (data === null) {
    textObj = [];
  } else {
    textObj = JSON.parse(data);
  }
  textObj.push(text.value);
  localStorage.setItem("notes", JSON.stringify(textObj));
  text.value = "";
  displayNote();
}

function displayNote() {
  let data = localStorage.getItem("notes");
  let textObj;

  if (data === null) {
    textObj = [];
  } else {
    textObj = JSON.parse(data);
  }
  let str = "";
  textObj.forEach(function (element, index) {
    str += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                     <div class="card-body">
                    <h5 class="card-title">Note${index + 1}</h5>
                     <p class="card-text">${element}</p>
                     <button id="${index}"onclick =" cancel(this.id)" class="btn btn-primary" >Delete</button>
                    </div>
                 </div> `;
  });
  let myNote = document.getElementById("note");
  if (textObj != 0) {
    myNote.innerHTML = str;
  } else {
    myNote.innerHTML = "add ur test here";
  }
}
