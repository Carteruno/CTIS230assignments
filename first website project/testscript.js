//myitem is defined by the document element and the getElementById method.
//Any element with the id "firsttest" will return the given element.
{
    myitem = document.getElementById("firsttest");
    thebutton = document.getElementById("thebutton");
    thesecondbutton = document.getElementById("thesecondbutton")
    otheritem = document.getElementById("buttontest");
    secondotheritem = document.getElementById("secondbuttontest")
    //an event listener adds an event handler, in this case the event handler
    //is being added to the myitem element by the .addEventListener Method.
    //"click" is the name given to event and "Onclick" is the Method. 
    myitem.addEventListener("click", onClick);
    myitem.addEventListener("mouse off", onmouseout);
    thebutton.addEventListener("click", onButtonClick);
    thesecondbutton.addEventListener("click two",onButtonClick);
    //This code states when the onclick function/Method is invoked, the element returned to
    //myitem tagged with "firsttest" id will invoke an event. This event will execute myitem.style.color = "green"
    //The event of the OnClick function will turn the given element's text green.

    function onClick() {
        myitem.style.color = "green";
        myitem.style.fontSize = "25px";
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
}
