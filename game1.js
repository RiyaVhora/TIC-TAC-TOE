let boxes = document.querySelectorAll(".box");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msgContainer");
let newbtn = document.querySelector("#newbtn");

let reset = document.querySelector("#reset");

let turnO = true;
let arr = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{

    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O";
            turnO = false ;
        }else{
            box.innerText = "X";
            turnO = true ;
        }
        box.disabled = true;
        check();
    })
})



const check = () =>{
  for(let p of arr){
    // console.log(p[0],p[1],p[2]);
   
       let pos1 = boxes[p[0]].innerText;
       let pos2 = boxes[p[1]].innerText;
       let pos3 = boxes[p[2]].innerText;

       if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 == pos2 && pos2 == pos3){
            show(pos1);
        }
       }
  }
}

const show = (winner) =>{
    msg.innerText = `congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    for(box of boxes){
        box.disabled = true;
    }
}

const newb = () =>{

    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
        msgContainer.classList.add("hide");
    }
}

reset.addEventListener("click",newb);
newbtn.addEventListener("click",newb);
