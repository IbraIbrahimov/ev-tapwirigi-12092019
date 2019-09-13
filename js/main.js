// let canvas = document.getElementById('c1');
// let ctx = canvas.getContext('2d');
//  let myColor='red'

// document.getElementById('color').oninput=function(e){

//            myColor=this.value;

// }

// canvas.onmousedown=function(e){
    
    
    
//     canvas.onmousemove=function(e){
//         let x=e.offsetX;
//         let y=e.offsetY;
        
//     ctx.fillStyle=myColor;
//         ctx.fillRect(x-5,y-5,10,10);
        
//      canvas.onmouseup=function(){

//         canvas.onmousemove=null;
//      }
        
        
//     }


// }


function add(){
let input = document.getElementById('input').value;
let text = document.getElementById('text');

let li = document.createElement('li');
li.classList.add('list-group-item', 'list-group-item-action');
let btn=document.createElement("button");
btn.textContent='Remove';


btn.onclick=function(){

    removeLi(btn);
}

li.onclick=function(){
// btnLi.onclick=function(){

//     removeLi(btnLi);

// }

li.children[0].setAttribute('onclick',"removeLi(this)");


    addToP(li);


    
}

li.innerHTML=input;


text.appendChild(li);
li.appendChild(btn);


}

function addToP(e){
    let p=document.getElementById('p1');
    
    p.innerHTML+= '</br>' + e.innerHTML;
    
    
    }


    function removeLi(e){

let LiElement=e.parentElement;
let ulElement=LiElement.parentElement;

ulElement.removeChild(LiElement);


}