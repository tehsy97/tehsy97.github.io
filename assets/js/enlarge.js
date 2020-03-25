var modal = document.getElementById("myModal");
var images = document.getElementsByClassName("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
for (let i = 0; i < images.length; i++) {
    // console.log("sup");
    var img = images[i];
    // console.log(images);
    // console.log(images[i]);
    // and attach our click listener for this image.
    img.onclick = function(evt) {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        
        // hide body scrollbar when model opens up    
        document.body.style.overflow = "hidden";
        
        // hide navigation bar when modal opens up 
        document.getElementById("nav").style.position = "unset";
    }
}

// console.log("bye");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("modal")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";

// show body scrollbar when model closes
document.body.style.overflow = "auto";

// show navigation bar when model closes
document.getElementById("nav").style.position = "fixed";
}