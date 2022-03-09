const showRegion = document.getElementById("drop-region-selected");
const selectRegion = document.querySelectorAll(".muscles");
let toggle = false;
selectRegion.forEach(region => {
    region.addEventListener("click",() => {
        if(!toggle){
            // showRegion.innerHTML = region.innerHTML;
        }
        console.log("working");
    })
})