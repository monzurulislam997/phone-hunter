const searchResult= ()=>{
    const searchField=document.getElementById("search-field");
     
     const searchText =searchField.value;
        searchField.value=" "
        const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
         
        fetch(url)
        .then(res=>res.json())
         .then(data=>displayPhones(data.data.slice(0,20)))
       
        
}
    //displayphone area 
const displayPhones =(phones)=>{
    console.log(phones)
    const allContent= document.getElementById("all-content");
    const phonesContainer= document.getElementById("phones-container");
    const errorMessage=document.getElementById("error-message");
    
        if(phones.length==0){
        allContent.innerHTML=" "
        errorMessage.innerText="Not found anything ,reload page for again search";
         return
       }
     
      
      
      
        phones.forEach(phone => {
        const div=document.createElement('div');
        div.classList.add('col')
        div.classList.add('w-25')
        div.innerHTML=` 
        <div   class=" card h-100">
    <img   height="300px" src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5>${phone.phone_name}</h5>
        
      <h5 class="card-title"> Brand: ${phone.brand}</h5>
      <button class="border-0 rounded-2 bg-primary text-white py-1 px-3" onclick="loadPhoneDetails('${phone.slug}')">See Details</button>
    </div>
    
  </div>
`

          phonesContainer.appendChild(div)
    });
  
   
}
//load phone information

const loadPhoneDetails =(slug)=>{
        const url=`https://openapi.programming-hero.com/api/phone/${slug}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>showPhoneDetails(data.data))

   
}
//show phone details
const showPhoneDetails =(phoneInfo)=>{
  
    const phoneDetails =document.getElementById("phone-details");
    console.log(phoneInfo.mainFeatures.sensors)
    const sensorArray =phoneInfo.mainFeatures.sensors;
        //if date not found
          let date;
        if(phoneInfo.releaseDate!=false){
          date=phoneInfo.releaseDate;
        }else{
          date="Release Date Not found"
        }
        console.log(phoneInfo.releaseDate)
        phoneDetails.innerHTML=` 
        
        <div class=" col-12 rounded p-4   w-50 mx-auto " style="max-width: 540px;">
        <h2 class="card-title  ms-5 text-success">${phoneInfo.name} Full Specification</h2>
        <div class="row g-0">
        <div class=" col-12  col-md-4">
          <img src="${phoneInfo.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-12  col-md-8">
          <div  class="card-body">
            <ul>  
            
            <li class="card-text text-danger">  ${date}  </li>
            <li class="card-text text-info "> Display: ${phoneInfo.mainFeatures.displaySize}</li>
            <li class="card-text text-danger"> Storage: ${phoneInfo.mainFeatures.storage}</li>
            <li class="card-text text-info"> Chipset: ${phoneInfo.mainFeatures.chipSet}</li>
            
            <li class="card-text text-success"> Others Info: ${phoneInfo.others?.WLAN} , ${phoneInfo.others?.Bluetooth}, ${phoneInfo.others?.GPS}  </li>

        </ul>
            
           
          </div>  
        </div>
        </div>
      </div>`

     
      //sensor data remove
      const sensor =document.getElementById('sensor');
      sensor.innerHTML=" "
       //sensor array looping
      sensorArray.forEach(element=>{
       
        
          document.getElementById("sensor-title").innerText="Sensor Information"
          const ul=document.createElement('ul')
          
          ul.innerHTML=` 
          
     <li >${element}</li> `;
  
          sensor.appendChild(ul)
         
      })
      
      



}




 
  
