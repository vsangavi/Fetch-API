
fetch("https://api.github.com/users/divyansh")
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE ERROR");
  }
})
.then(data => {
  console.log(data);
  displayCocktail(data)
})
.catch((error) => console.error("FETCH ERROR:", error));
function displayCocktail(data) {
  const cocktail = data;
  const cocktailDiv = document.getElementById("cocktail");
  const cocktailName = cocktail.name;
  const cocktailbio=cocktail.bio;
  const heading = document.createElement("h1");
  const biog = document.createElement("h5");

  heading.innerHTML = cocktailName;
  biog.innerHTML = cocktailbio;
  cocktailDiv.appendChild(heading);
  cocktailDiv.appendChild(biog);

 
  
}
//const URL = "https://api.github.com/users/vsangavi";


 
   
    
  