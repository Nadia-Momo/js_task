
let clickTheButton=document.querySelector('.my_button');
let h1=document.querySelector('h1');
let button=document.querySelector('.second_button');
let h2=document.querySelector('h2');
console.log(button);
console.log(clickTheButton);
console.log(h1);
console.log(h2.innerHTML);
clickTheButton.addEventListener('click',()=>{
    h1.style='color:green'
    console.log("hea click hosse");
})
button.addEventListener('click',()=>{
    h2.innerHTML='Task 2 Completed'
    h2.style="color:green"
})









