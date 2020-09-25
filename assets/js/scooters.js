//Functionality to change image and info presented to the user on the showroom page

//Import the inventory data
import { scooterInventory } from "./scooterinventory.js";


var elements = document.getElementsByClassName("scooter-link");
    
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

Array.from(elements).forEach(function(element){
    element.addEventListener("click", showItem)
});