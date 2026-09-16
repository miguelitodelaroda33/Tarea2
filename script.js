import "./node_modules/bootstrap/dist/js/bootstrap.min.js"

window.addEventListener("load", function(){
    console.log(this);
    this.textos = document.getElementsByClassName("text-animate");

    let margin = 0;
    let marginMove = 10;
    
    setInterval(function() {
        for(let i = 0 ; i < this.textos.length ; i++){
            this.textos[i].style.marginLeft = margin + "px";
        }

        margin = margin + marginMove
    }, 1000);

});