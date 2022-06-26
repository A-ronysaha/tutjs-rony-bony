showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", add);

function add() {
  console.log("click on add");
  let addTxt = document.getElementById("addTxt");
  let Text = localStorage.getItem("Notes");
  let noteObj;
  if (Text === null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(Text);
  }
  noteObj.push(addTxt.value);
  localStorage.setItem("Notes", JSON.stringify(noteObj));
  addTxt.value = "";
  showNotes();
}

function showNotes() {
  let Text = localStorage.getItem("Notes");
  let noteObj;
  if (Text === null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(Text);
  }
  let html = "";
  noteObj.forEach(function (element, index) {
    html += ` <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                     <div class="card-body">
                    <h5 class="card-title">Note${index + 1}</h5>
                    <p class="card-text">${element}</p>
                     <button id="${index}"onclick =" cancel(this.id)" class="btn btn-primary" >Delete</button>
                    </div>
                </div> `;
  });

  let myNote = document.getElementById("note");
  if (noteObj != 0) {
    myNote.innerHTML = html;
  } else {
    myNote.innerHTML = "add your note here";
  }
}

function cancel(index) {
  console.log("want to dlt", index);
  let Text = localStorage.getItem("Notes");
  let noteObj;
  if (Text === null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(Text);
  }

  noteObj.splice(index, 1);
  localStorage.setItem("Notes", JSON.stringify(noteObj));
  showNotes();
}

let find = document.getElementById("find")
find.addEventListener('input',locate)

function locate ()
{
    console.log("input event fire")
    let input = find.value
    let noteCards = document.getElementsByClassName("noteCard")
    Array.from(noteCards).forEach(function(element){
        let txtVal = element.getElementsByTagName('p')[0].innerText
        if(txtVal.includes(input))
        {
            element.style.display = "block"
        }
        else{
            element.style.display = "none"
        }

    })
}