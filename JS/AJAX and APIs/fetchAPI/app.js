fetch("https://www.swapi.tech/api/people/1")
.then((res) => {
    console.log(res);
    return res.json()
})
.then((data) => {
    console.log(data.result.properties.name);
    return fetch("https://www.swapi.tech/api/people/2")    
})
.then((res) => {
    return res.json();
})
.then((data) => {
    console.log(data.result.properties.name);
})
.catch((err) => {
    console.log("Something went wrong");
    console.log(err);

})


const fetchAPILoading = async() => {
    await fetch("https://www.swapi.tech/api/people/1")
    .then((res) => {
    return res.json()
})
    .then((data) => {
        console.log(data.result.properties.name);   
})
    .catch((err) => {
    console.log("Something went wrong");
    console.log(err);
})
    
    await fetch("https://www.swapi.tech/api/people/2")
    .then((res) => {
    return res.json()
})
    .then((data) => {
        console.log(data.result.properties.name);   
})
    .catch((err) => {
    console.log("Something went wrong");
    console.log(err);
})
}

fetchAPILoading();

const fetchAPILoading2 = async() => {
    try{
    const res = await fetch("https://www.swapi.tech/api/people/1");
    const data = await res.json();
    console.log(data.result.properties.name);

    const res2 = await fetch("https://www.swapi.tech/api/people/2");
    const data2 = await res2.json();
    console.log(data2.result.properties.name);
    }
    catch(e){
        console.log(e); 
    }
}
fetchAPILoading2();  