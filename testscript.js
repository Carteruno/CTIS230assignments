//myitem is defined by the document element and the getElementById method.
//Any element with the id "firsttest" will return the given element.
{
    myimageitem = document.getElementById("image-expansion")
    myitem = document.getElementById("firsttest");
    thebutton = document.getElementById("thebutton");
    thesecondbutton = document.getElementById("thesecondbutton")
    thethirdButton = document.getElementById("thethirdbutton")
    otheritem = document.getElementById("buttontest");
    secondotheritem = document.getElementById("secondbuttontest");
    thirditem = document.getElementById("thirdbuttontest")
    //an event listener adds an event handler, in this case the event handler
    //is being added to the myitem element by the .addEventListener Method.
    //"click" is the name given to event and "Onclick" is the Method. 
    myitem.addEventListener("click", onClick);
    myimageitem.addEventListener("click", onClickImage);
    myitem.addEventListener("mouse off", onmouseout);
    thebutton.addEventListener("click", onButtonClick1);
    thesecondbutton.addEventListener("click",onButtonClick2);
    thethirdbutton.addEventListener("click",onButtonClick3);
    //This code states when the onclick function/Method is invoked, the element returned to
    //myitem tagged with "firsttest" id will invoke an event. This event will execute myitem.style.color = "green"
    //The event of the OnClick function will turn the given element's text green.

    function onClick() {
        myitem.style.color = "green";
        myitem.style.fontSize = "25px";
    }

    var ifclick = false;

    function onClickImage() {
        if(ifclick == false) {
            ifclick = true;
            myimageitem.style.width = "220px";
            myimageitem.style.height = "220px";
        }
        else {
            ifclick = false;
            myimageitem.style.width = "110px";
            myimageitem.style.height = "110px";
        }
    }

    

    function onmouseout() {
        myitem.style.color = "";
        myitem.style.fontSize = "";
    }

    function onButtonClick1() {
        otheritem.style.color ="red";
    }

    function onButtonClick2() {
        secondotheritem.style.color ="blue";
    }
    function onButtonClick3() {
        thirditem.style.color = "orange";
    } 

    textentry = document.getElementById("myinput");  
    textentry.addEventListener("change", onChange);
    modifiedtext = document.getElementById("modifiedtext");
    
    function onChange() {  
        newtext = myinput.value;  
        modifiedtext.innerHTML = newtext;  
    }
}
