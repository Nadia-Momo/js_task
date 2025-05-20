let input=document.querySelector('input');
let search_button=document.querySelector('.search_button');
let showProduct=document.querySelector('.showProduct');
let error=document.querySelector('.error');
// let my_device=['Keyboard','Mouse','Mouse','Mouse','Touch-Screens','Monitor','Printers','Speakers','Modems',
    
//     'Webcams', 'Webcams','Graphic Tablets','Graphic Tablets','Graphic Tablets','Graphic Tablets','Scanners','Scanners','Scanners','Barcode Readers','RAM','ROM'
// //     ,'Hard Disk Drives','Solid State Drives','Solid State Drives','Flash Drives','Flash Drives','Flash Drives','Flash Drives']
let my_device=['keyboard','mouse','monitor','monitor'];
search_button.addEventListener('click',()=>{
  if(input.value==''){
    error.innerHTML=`Input can't be empty`;}
    else{
       error.innerHTML='';
 let filterProduct=  my_device.filter((item)=>{
    return item==input.value;    
    })
  filterProduct.map((item)=>{
   showProduct.innerHTML+=item+'<br>';
  }) 
   if (filterProduct.length==0){
    showProduct.innerHTML='Product not found!!';
   }

    }
 
})