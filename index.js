function addRamen() {
    let name = 
document.getElementById("name").value;
    let restaurant =
document.getElementById("reataurant").value;
    let image = 
document.getElementById("image").value;
    let rating = 
document.getElementById("rating").value;
    let comment = 
document.getElementById("comment").value;

    if (name && image && rating && comment) {
document.getElementById("ramen-name").innerText = name;

document.getElementById("ramen-img").src = image

document.getElementById("ramen-rating").
innertext = rating + "/10";

document.getElementById("ramen-comment")
.innerText = comment;
 } else {
    alert("plese fill all fields")
 }
}