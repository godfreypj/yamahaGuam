//Functionality to change image and info presented to the user on the showroom page

//Import the inventory data
import { watercraftInventory } from "./watercraftinventory.js";

//Grab all the end navigation titles
var elements = document.getElementsByClassName("watercraft-link");
    
//Find the item in the inventory imported above that matches the clicked nav item, replace images on page with images in database
function showItem(e) {

    var title = this.innerHTML;
    for(var i=0; i<watercraftInventory.length; i++) {
        if(title==watercraftInventory[i].title) {
            document.getElementById("watercraft-title").innerHTML = title
            document.getElementById("watercraft-image").setAttribute("src", watercraftInventory[i].img);
            document.getElementById("watercraft-price").setAttribute("src", watercraftInventory[i].price);
        }
    }

    e.preventDefault();
    
}

//find the clicked navigation item from the array of elements, call the showitem method
Array.from(elements).forEach(function(element){
    element.addEventListener("click", showItem)
});