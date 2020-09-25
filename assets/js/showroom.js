//Functionality to change image and info presented to the user on the showroom page

//Import the inventory data
import { showroomInventory } from "./inventory.js";


var elements = document.getElementsByClassName("showroom-link");
    
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

Array.from(elements).forEach(function(element){
    element.addEventListener("click", showItem)
});