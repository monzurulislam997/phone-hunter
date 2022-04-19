const searchResult= ()=>{
    const searchField=document.getElementById("search-field");
        const searchText =searchField.value;
        console.log(searchText)
        searchField.value=" "
        fetch( `https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res=>res.json())
        .then(data=>displayPhones(data.data.slice(0,12)))
}

const displayPhones =(phones)=>{
    console.log(phones)
    const phonesContainer= document.getElementById("phones-container");
    const errorMessage=document.getElementById("error-message");
    // if(phones.length==0){
      phonesContainer.innerHTML=" "
      errorMessage.innerText="Not found anything";
      // return
    // }
    
    // else {
      
      
      phonesContainer.innerHTML=" "
        phones.forEach(phone => {
        const div=document.createElement('div');
        div.classList.add('col')
        // div.classList.add('w-25')
        div.innerHTML=` 
        <div   class="card h-100">
    <img   height="300px" src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h2>${phone.phone_name}</h2>
        
      <h5 class="card-title"> Brand: ${phone.brand}</h5>
      <button onclick="loadPhoneDetails('${phone.slug}')">See Details</button>
    </div>
    
  </div>
`

          phonesContainer.appendChild(div)
    });
    // }
   
}


const loadPhoneDetails =(slug)=>{
        const url=`https://openapi.programming-hero.com/api/phone/${slug}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>showPhoneDetails(data.data))

    

        console.log(url)
   
}

const showPhoneDetails =(phoneInfo)=>{
  
  console.log(phoneInfo.others)
    const phoneDetails =document.getElementById("phone-details");
        phoneDetails.innerHTML=` 
        
        <div class=" w-50 mx-auto mb-3" style="max-width: 540px;">
        <h5 class="card-title ms-5 ">${phoneInfo.name} Full Specification</h5>
        <div class="row g-0">
        <div class="col-md-4">
          <img src="${phoneInfo.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            
            <p class="card-text"> ${phoneInfo.releaseDate}</p>
            <p class="card-text"> display: ${phoneInfo.mainFeatures.displaySize}</p>
            <p class="card-text"> storage: ${phoneInfo.mainFeatures.storage}</p>
            <p class="card-text"> storage: ${phoneInfo.mainFeatures.chipSet}</p>
            <p class="card-text"> storage: ${phoneInfo.mainFeatures.sensors}</p>
            <p class="card-text"> Others: ${phoneInfo.others?.WLAN} , ${phoneInfo.others?.Bluetooth}, ${phoneInfo.others?.GPS}  </p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>  
        </div>
        </div>
      </div>`

}









/* const searchFood=()=>{
    const searchFiled=document.getElementById("search-field");
    const searchText=searchFiled.value;
    searchFiled.value=" "
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}
    `
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayResult(data?.meals))
}


const displayResult =meals=>{
    // console.log(typeof meals)
    const cardContainer=document.getElementById("card-container");
        cardContainer.innerHTML=" "
        if(typeof meals!="object"){
            console.log(typeof meals!="object")
            document.getElementById("error").innerText="<h4>No content found</h4>"
       
        }
    else {
        meals.forEach(meal => {
            const div=document.createElement('div');
            div.classList.add('col')
            div.classList.add('img-fluid')
            div.innerHTML=` 
            <div onclick="loadMeal(${meal.idMeal})"  class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,40)}</p>
        </div>
      </div>
            `
            cardContainer.appendChild(div)
        
        // console.log(meal) 
    });
    }
}

const loadMeal =(mealId)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayMealInfo(data))

   
}
const displayMealInfo =(data)=>{
    console.log(data)
    // const mealInfo =data.meals[0];
    console.log(mealInfo.strMealThumb)
    const singleMealInfo=document.getElementById("single-mealInfo");
    
    singleMealInfo.innerHTML =`
    <img class="card-img-top" src="${mealInfo.strMealThumb}" alt="Card image cap">
    
      <p class="card-text">${mealInfo.strInstructions}</p>
    `
    
} */