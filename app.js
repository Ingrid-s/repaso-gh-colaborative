//1010
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
//termina 1010

//1011
// Obteniendo los elemtos
var realTimeComment = document.getElementById("real-time-comment");
var area = document.getElementById("text-comment");
var sendComment = document.getElementById("send");
var sizeText = document.getElementsByClassName("size-text");
var alignText = document.getElementsByClassName("align-text");
var textColor = document.getElementById("text-color");
var backgroundColor = document.getElementById("background-color");
var commentedPost = document.getElementById("comment-posted");
var selectImage = document.getElementById("select-image");
// Asignando eventos a los elementos
area.addEventListener("keyup", getTextPreview);
sendComment.addEventListener("click", printComments);
textColor.addEventListener("click", changeTextColor);
backgroundColor.addEventListener("click", chnageBackgroundColor);
selectImage.addEventListener("change", readFile);

//termina 1011
