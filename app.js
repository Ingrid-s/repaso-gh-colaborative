function readFile() {
  if (this.files && this.files[0]) {
    var newImages = new FileReader();
    newImages.addEventListener("load", paintImage);
    newImages.readAsDataURL(this.files[0]);
  }
}
function paintImage(e) {
  var realTimeImage = document.getElementById("real-time-image");
  realTimeImage.src = e.target.result;
  // console.log(e.target);
}
