var btnsubmit= document.querySelector("#btn-submit")

btnsubmit.addEventListener("click", displayDate)
document.getElementById("btn-submit")
{

    //console.log("clicked")
}
//document.getElementById("btn-submit").addEventListener("click", displayDate);

function displayDate() {
    document.getElementById("demo").innerHTML = Date();
  }