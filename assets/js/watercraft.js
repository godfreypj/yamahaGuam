//Functionality to change image and info presented to the user on the showroom page

//Import the inventory data
import { watercraftInventory } from "./watercraftinventory.js";


var elements = document.getElementsByClassName("watercraft-link");
    
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

Array.from(elements).forEach(function(element){
    element.addEventListener("click", showItem)
});