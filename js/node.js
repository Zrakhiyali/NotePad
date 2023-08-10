let $=document

let conteiner=$.querySelector('.conteiner')
let icon =$.querySelector('.icon')
let color1 =$.querySelector('.color1')
let color2 =$.querySelector('.color2')
let color3 =$.querySelector('.color3')
let color4 =$.querySelector('.color4')
let colors =$.querySelectorAll('.color')
let eraser=$.querySelector('.icon2')
let input=$.querySelector('.inp')
let boxes=$.querySelector('.boxes')
let plus=$.getElementById('icon1')
let newcolor;


boxes.addEventListener('click',function(event){

if(event.target.className=='box')
event.target.remove()
})
color1.addEventListener('click',function(){
  newcolor=color1.style.backgroundColor;

  input.style.backgroundColor= newcolor
})
color2.addEventListener('click',function(){
  newcolor=color2.style.backgroundColor;

  input.style.backgroundColor=newcolor
})
color3.addEventListener('click',function(){
  newcolor=color3.style.backgroundColor;

  input.style.backgroundColor= newcolor
})
color4.addEventListener('click',function(){
  newcolor=color4.style.backgroundColor;

  input.style.backgroundColor= newcolor
})
plus.addEventListener('click',add)
function add(){
  danger.style.display='none'
  let div=$.createElement('div')
let p=$.createElement('p')  
div.classList.add("box")
div.style.backgroundColor=input.style.backgroundColor
p.classList.add("text")
if(input.value){
p.innerHTML=input.value
div.appendChild(p)
boxes.appendChild(div)

div.style.backgroundColor=input.style.backgroundColor
input.value=''
input.style.backgroundColor='white'
}
else{
  danger.style.display='block'
}
}
$.addEventListener('keypress',function(e){

  if(e.which==13)
 {
  console.log('clicked');
  if(input.value){

    add()
  }
 }
})
eraser.addEventListener('click',function(){
  console.log('eraser');
  input.value=''}
  
  )

colors.forEach(function(color) {
  color.addEventListener('click',function(e)
  {

    console.log(e.target.style.backgroundColor);
    newcolor= e.target.style.backgroundColor
input.style.backgroundColor=newcolor
    
    })
}); 
