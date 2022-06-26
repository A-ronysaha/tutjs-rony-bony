let rony = document.getElementById("addBtn")
rony.addEventListener("click",(e)=>{
    let text = document.getElementById("addTxt")
    let note = localStorage.getItem("Text")
    let textObj

    if(note === null)
    {
        textObj = []
    }
    else
    {
        textObj = JSON.parse(note)
    }

    textObj.push(text.value)
    localStorage.setItem("Text",JSON.stringify(textObj))
    text.value=""

    display()
})

function display()
{
    let note = localStorage.getItem("Text")
    let textObj

    if(note === null)
    {
        textObj = []
    }
    else
    {
        textObj = JSON.parse(note)
    }

    let hmtl =""
    textObj.forEach((element,index) => {
         hmtl += `   <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
         <div class="card-body">
        <h5 class="card-title">Note${index + 1}</h5>
         <p class="card-text">${element}</p>
         <button id="${index}"onclick =" cancel(this.id)" class="btn btn-primary" >Delete</button>
        </div>
     </div>`

        
    });

    let final = document.getElementById("note")
    final.innerHTML = hmtl

}