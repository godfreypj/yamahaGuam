//Functionality to change image and info presented to the user on the showroom page

//Import the inventory data
import { showroomInventory } from "./inventory.js";

//Grab all the end navigation titles
var elements = document.getElementsByClassName("showroom-link");
    
//Find the item in the inventory imported above that matches the clicked nav item, replace images on page with images in database
function showItem(e) {

    var title = this.innerHTML;
    for(var i=0; i<showroomInventory.length; i++) {
        if(title==showroomInventory[i].title) {
            document.getElementById("showroom-title").innerHTML = title
            document.getElementById("showroom-image").setAttribute("src", showroomInventory[i].img);
            document.getElementById("showroom-price").setAttribute("src", showroomInventory[i].price);
        }
    }

    e.preventDefault();
    
}

//find the clicked navigation item from the array of elements, call the showitem method
Array.from(elements).forEach(function(element){
    element.addEventListener("click", showItem)
});