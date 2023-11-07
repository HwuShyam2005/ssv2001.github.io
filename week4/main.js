var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://hwushyam2005.github.io/ssv2001.github.io/cities1.json');
ourRequest.onload = function() {
var ourData = JSON.parse(ourRequest.responseText);
console.log(ourData[0]);
};
ourRequest.send();