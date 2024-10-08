/*function getData(uId) {
setTimeout(() => {
console.log("Fetched the data!");
return "skc@gmail.com";
}, 4000);
}

console.log("start");
var email = getData("skc");
console.log("Email id of the user id is: " + email);
console.log("end");

How do you solve this problem. How can we wait for till the function execution is completed, 
so that we can have correct email at line 10?
*/


function getData(uId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");
        }, 4000);
    });
}

async function fetchData() {
    try {
        console.log("start");
        const email = await getData("skc");
        console.log("Email id of the user id is: " + email);
        console.log("end");
    } catch (error) {
        console.log(error);
    }
}
fetchData();

