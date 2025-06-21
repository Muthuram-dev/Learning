//CALL BACK HELL PRACTICAL SCENARIO EXAMPLE DOWN BELOW

const fakeRequestCallback = (url, success, failure) => {
    delaySeconds = Math.floor((Math.random() * 2000)) + 500;
    setTimeout(() => {
        if (delaySeconds > 1000){
        failure("Connection TimeOut");
    } else {
        success(`Done, here is your url ${url}`);
    }
    },delaySeconds)
}

fakeRequestCallback("google.com", function(response){
    console.log("The connection was successful in page1", response),
    fakeRequestCallback("google.com/page2", 
        function(res){console.log('You got your page2', res)}, 
        fakeRequestCallback("www.google.com/page3",function(res2){console.log("You got your page3")},

        function(err3){console.log("Again, something went wrong in the page3",err3)}),
    function(err2){console.log("Uh Uh oh, something went wrong!", err2)})},
function(errormsg){
    console.log("The connection was failed", errormsg);
});


//We will be using the .then and .catch methods to counter the callback hell


