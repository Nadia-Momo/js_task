let input=document.querySelector('input');
let multiply_button=document.querySelector('.multiply_button');
let multiply_era=document.querySelector('.multiply_era');
let ID=document.querySelector('.ID');
let Name=document.querySelector('.Name');
let UserName=document.querySelector('.UserName');
let Email=document.querySelector('.Email');
let Address=document.querySelector('.Address');
let Street=document.querySelector('.Street');
let Suite=document.querySelector('.Suite');
let City=document.querySelector('.City');
let Zipcode=document.querySelector('.Zipcode');
let Geo=document.querySelector('.Geo');
let Lat=document.querySelector('.Lat');
let Lng=document.querySelector('.Lng');
let Phone=document.querySelector('.Phone');
let Website=document.querySelector('.Website');
let Company=document.querySelector('.Company');
let CName=document.querySelector('.CName');
let CatchPhrase=document.querySelector('.CatchPhrase');
let BS=document.querySelector('.BS');
let image=document.querySelector('.image');
let error=document.querySelector('.error');
image.src='images/pexels-olly-948873.jpg';
multiply_button.addEventListener('click',()=>{
  
    multiply_era.innerHTML='';
    console.log('button clicked');
 if(input.value===''){
  error.innerHTML=`Input can't be empty`;
 }
  else{
     error.innerHTML='';
      for(let i=1;i<=10;i++){

 let namotavalue=input.value + 'x' + i+'='+ input.value*i;
multiply_era.innerHTML+=namotavalue+'<br>';
    }
  }
  

  

})
let users={
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }

ID.innerHTML='ID :'+users.id;
Name.innerHTML='Name :'+users.name;
UserName.innerHTML='UserName :'+users.username;
Email.innerHTML='Email :'+users.email;

Street.innerHTML='Street :'+users.address.street;
Suite.innerHTML='Suite :'+users.address.suite;
City.innerHTML='City :'+users.address.city;
Zipcode.innerHTML='Zipcode :'+users.address.zipcode;

Lat.innerHTML='Lat :'+users.address.geo.lat;
Lng.innerHTML='Lng :'+users.address.geo.lng;
Phone.innerHTML='Phone :'+users.phone;
Website.innerHTML='Website :'+users.website;

CName.innerHTML='Name :'+users.company.name;
CatchPhrase.innerHTML='CatchPhrase :'+users.company.catchPhrase;
BS.innerHTML='BS :'+users.company.bs;
