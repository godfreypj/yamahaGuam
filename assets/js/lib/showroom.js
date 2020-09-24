var elements = document.getElementsByClassName("showroomLink");
    
    function getTitle(e) {

        var title = this.innerHTML;
        console.log(title);
        document.getElementById("showroomTitle").innerHTML = title;

        e.preventDefault();
        
    }



    Array.from(elements).forEach(function(element){
        element.addEventListener("click", getTitle)
    });

        