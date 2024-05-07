/* source credit: https://www.w3schools.com/howto/howto_css_modal_images.asp */

/*modal, image, caption*/
var modal = document.getElementsByClassName("modal")[0];
var modalImage = document.getElementsByClassName("modal-content")[0];
var captionText = document.getElementsByClassName("caption")[0];

/*images*/
let imageArray = document.querySelectorAll('img');
for (let image of imageArray){
    image.addEventListener(
        "mouseover",
        function(){
            if (modal.style.display !== "block"){
                image.style.opacity = 0.8;
                image.style.cursor = "pointer";
            }
        }
    );
    image.addEventListener(
        "mouseout",
        function(){
            image.style.opacity = 1;
            image.style.cursor = "auto";
        }
    );
    image.addEventListener(
        'click',
        function(){
            if (modal.style.display !== "block"){
                modal.style.display = "block";
                modalImage.src = this.src;
                captionText.innerHTML = this.alt;
                
            }
        }
    );
}


var closeX = document.getElementsByClassName('close')[0];
closeX.onclick = function(){
    modal.style.display = "none";
}
