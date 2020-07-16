document.addEventListener("DOMContentLoaded", function () {
    //everything that happens inside these curlies will happen after DOM is loaded
    //put all functions within here

       document.querySelector("button").addEventListener("click", function () {
        document.querySelector(".celsius").value = (document.querySelector(".fahrenheit").value -32) * 5/9;
    })

    document.querySelector(".clear").addEventListener("click", function () {
        document.querySelector(".celsius").value = " ";
        document.querySelector(".fahrenheit").value = " ";
    })

    //click button
    //take value from Fahren and converts that to celsius
    //apply result to celsius button
    
})