
const request = new XMLHttpRequest();

request.onload = function(){
    console.log("success");
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    console.log(data.result.properties.gender);
}


request.onerror = function(){
    console.log("ERROR");
    console.log(this);
}

request.open("GET", "https://www.swapi.tech/api/people/1")
request.send()