var cityContainer = document.getElementById("city-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://hwushyam2005.github.io/ssv2001.github.io/week4/cities1.json');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
renderHTML(ourData);
btn.classList.add("hide-me");
};
ourRequest.send();
});

function renderHTML(data){
    for (i=0; i<data.length; i++){
        htmlString += " The Weather of " + data[i].name + 
        " is a " + data[i].type_of_sky + 
        " the temperature is " + data[i].temperature +
        "and the wind speed is" + data[i].windspeed +
        "</br>"  ;
        }
    cityContainer.insertAdjacentHTML('beforeend' , htmlString);
}