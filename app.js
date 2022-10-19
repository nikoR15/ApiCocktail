const URL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";


const cardContainer = document.getElementById("containerCard");

const search = document.getElementById('search');
search.addEventListener('keyup', e =>{
    if (e.target.matches("#search")) {
        
        document.querySelectorAll(".card").forEach(cards =>{

            cards.textContent.includes(e.target.value)
            ?cards.classList.remove("filtro")
            :cards.classList.add("filtro")
    });
}})

window.addEventListener("DOMContentLoaded",getApi);

function getApi() {
    fetch(URL)
    .then (responce => responce.json())
    .then (data => {
        data.drinks.forEach(element => {
        const div = document.createElement("div");
        div.classList.add("card");

        const img = document.createElement("img");
        img.setAttribute("src",element["strDrinkThumb"]);
        img.classList.add = "img";

        const name = document.createElement("h2");
        name.textContent = element["strDrink"];
        name.classList.add("name");

        div.appendChild(name);
        div.appendChild(img);
        cardContainer.appendChild(div);

        });
    })}

