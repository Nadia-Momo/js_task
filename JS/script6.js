let input=document.querySelector('input');
let multiply_button=document.querySelector('.multiply_button');
let multiply_era=document.querySelector('.multiply_era');

multiply_button.addEventListener('click',()=>{
  
    multiply_era.innerHTML='';
    console.log('button clicked');
for(let i=1;i<=10;i++){
 let namotavalue=input.value + 'x' + i+'='+ input.value*i;
multiply_era.innerHTML+=namotavalue+'<br>';
    }

})