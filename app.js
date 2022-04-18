const searchResult= ()=>{
    const searchField=document.getElementById("search-field");
        const searchText =searchField.value;
        console.log(searchText)
        searchField.value=" "
        fetch( `https://openapi.programming-hero.com/api/phones?search=${searchText}`)
        .then(res=>res.json())
        .then(data=>displayPhones(data.data))
}

const displayPhones =(phones)=>{
    const phonesContainer= document.getElementById("phones-container");

        phones.forEach(phone => {
        //     console.log(phone)
        //     const div =document.createElement("div");
        //     div.classList.add("col")
        //     div.innerHTML=` 
        //     <div class="card h-50">
        //     <img   src="${phone.image}" class="card-img-top" alt="...">
        //     <div class="card-body">
        //       <p>${phone.brand}</p>
              
        //     </div>
        //     </div>
        //   `
        const div=document.createElement('div');
        div.classList.add('col')
        // div.classList.add('w-25')
        div.innerHTML=` 
        <div   class="card h-100">
    <img   height="300px" src="${phone.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${phone.brand}</h5>
      
    </div>
  </div>
`

          phonesContainer.appendChild(div)
    });
    console.log(phones)
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