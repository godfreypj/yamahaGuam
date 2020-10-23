//Functionality to change image and info presented to the user on the showroom page

//Import the inventory data
import { scooterInventory } from "./scooterinventory.js";

//Grab all the end navigation titles
var elements = document.getElementsByClassName("scooter-link");
    
//Find the item in the inventory imported above that matches the clicked nav item, replace images on page with images in database
function showItem(e) {

    var title = this.innerHTML;
    for(var i=0; i<scooterInventory.length; i++) {
        if(title==scooterInventory[i].title) {
            document.getElementById("scooter-title").innerHTML = title
            document.getElementById("scooter-image").setAttribute("src", scooterInventory[i].img);
            document.getElementById("scooter-price").setAttribute("src", scooterInventory[i].price);
        }
    }

    e.preventDefault();
    
}

//find the clicked navigation item from the array of elements, call the showitem method
Array.from(elements).forEach(function(element){
    element.addEventListener("click", showItem)
});