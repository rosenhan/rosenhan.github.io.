(function(){
    "use strict";
    const dropDowns = document.querySelectorAll(".dropDown");
    const subMenus = document.querySelectorAll(".muscles > ul > li > ul");
    const mainImg = document.querySelector("#mainImg > img")
    const mainImgText = document.querySelector("#mainImg > h2")

    function hideMenus(){
        subMenus.forEach(menu => {
            menu.classList.add("hide");
        })  
    }
    hideMenus();
    dropDowns.forEach(dropDown =>{
        dropDown.addEventListener("click", (e) => {
            let dropParent = e.target.parentElement
            let subMenu = dropParent.querySelector("ul > li > ul")
            let menuImg = subMenu.querySelector("img")


            mainImgText.innerText = dropDown.innerText
            mainImg.src = menuImg.src;
            console.log("main",mainImg.src)
            console.log(mainImg)
            
            if(subMenu.classList.contains("hide")){
                hideMenus();
                subMenu.classList.remove("hide")
            } else {
                subMenu.classList.add("hide")
            }

        })
    })
})()
    