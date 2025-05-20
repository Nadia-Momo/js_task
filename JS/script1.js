let button1=document.querySelector('.button1')
let button2=document.querySelector('.button2')
let button3=document.querySelector('.button3')
let button4=document.querySelector('.button4')
let button5=document.querySelector('.button5')
let main_div=document.querySelector('.main_div')
let plus_button=document.querySelector('.plus_button')
let minus_button=document.querySelector('.minus_button')
let quantity=document.querySelector('.quantity')
let submit=document.querySelector('.submit')
let input=document.querySelector('.input')
let my_text=document.querySelector('.my_text')
let button6=document.querySelector('.button6')
let button7=document.querySelector('.button7')
let button8=document.querySelector('.button8')
let input1=document.querySelector('.input1')
let show_text=document.querySelector('.show_text')
let hidden_text=document.querySelector('.hidden_text')
let error_text=document.querySelector('.error_text')
let value=0;
   let show=document.querySelector('.show')
let Input=document.querySelector('.Input')
  let error=document.querySelector('.error')
quantity.innerHTML=value;
button1.addEventListener('click',()=>{
    main_div.style='background:yellow'
})
button2.addEventListener('click',()=>{
    main_div.style='background:green'
})
button3.addEventListener('click',()=>{
     main_div.style='background:pink'
})
button4.addEventListener('click',()=>{
    main_div.style='background:purple'
})
button5.addEventListener('click',()=>{
    console.log(window.location.reload())
})
plus_button.addEventListener('click',()=>{
    value=value+1;
    quantity.innerHTML=value;
   
})
minus_button.addEventListener('click',()=>{
    if(quantity.innerHTML>0){
        value=value-1;
        quantity.innerHTML=value;
    } 
})
submit.addEventListener('click',()=>{
//     console.log(input.value);
// show.innerHTML=input.value;
if(input.value==''){
    error.innerHTML=`Input can't be empty`;
    show.innerHTML=''
}
else{
    show.innerHTML=`My name is ${input.value}`;
    error.innerHTML='';
    input.value='';
}
})
show_text.addEventListener('click',()=>{

    // my_text.innerHTML= input1.value;
    // hidden_text.style="display:block;text-align:center";
  
   if(input1.value==''){
   
    error_text.innerHTML=`Input can't be empty`;
   }
   
else{
      my_text.innerHTML= input1.value;
    hidden_text.style="display:block;text-align:center";
    input1.value='';
    error_text.innerHTML='';

}
    // my_text.innerHTML= input1.value;
    
})
button6.addEventListener('click',()=>{
    my_text.style="color:red";
})
button7.addEventListener('click',()=>{
    my_text.style="color:blue";
})
button8.addEventListener('click',()=>{
    my_text.style="color:Green";
})

function fruitProcessor(apple,oranges){
const juice=`juice with ${apple} and ${oranges} oranges`;
return juice;
}
console.log(fruitProcessor(5,0));