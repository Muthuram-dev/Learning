axios.get("https://www.swapi.tech/api/people/1")

.then((datas) => {
    console.log(datas.data.result.properties.name);   
})
.catch((err) => {
    console.log(err);
})

const getCharNameStarWars = async(q) => {
    try{
    const res = await axios.get(`https://www.swapi.tech/api/people/${q}`);
    console.log(res.data.result.properties.name);
    }
    catch(e){
        console.log(e);
    }
}

getCharNameStarWars(2);
getCharNameStarWars(5);

// axios.get("https://swapi.tech/api/people/1")
//   .then((res) => {
//     console.log("THEN:", res.data.result.properties.name);
//   });

// const fetchCharacter = async () => {
//   console.log("ASYNC FUNCTION STARTED");
//   const res = await axios.get("https://swapi.tech/api/people/2");
//   console.log("ASYNC:", res.data.result.properties.name);
// };

// fetchCharacter();


// console.log("1");

// setTimeout(() => {
//   console.log("2 - timeout");
// }, 0);

// Promise.resolve().then(() => {
//   console.log("3 - from .then()");
// });

// (async () => {
//   console.log("4 - before await");
//   await Promise.resolve();
//   console.log("5 - after await");
// })();

// console.log("6");

