// const delayeGreeting = setInterval(() => {
//     console.log("Hello, Alice!");
//     clearInterval(delayeGreeting);
// },5000);


// const delayeGreeting2 = setTimeout(() => {
//     demo();
// },5000);

// function demo() {
// console.log('Hello, Alice!');
// }


// function show(name,time){

//     setTimeout(() => {
//         console.log(`Hello, ${name}!`);
//     },time)

// };

// show('Alice',5000);

//? task 2

// function tellJoke(){
//     console.log("Hello, I am Loi!");
// }

// const jokeInterval = setInterval(tellJoke,2000);


// setTimeout(() => {

//     console.log(jokeInterval);

//     clearInterval(jokeInterval);
   
// },10000);


//? task 3

// const apiShow = async () => {
//     try {

//         const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    
//         const data = await response.json();
//         console.log(data.joke);

//     } 
//     catch (error) {
//         console.log('error');
//     }


// }

// apiShow()



// async function api(){
//     try{
//         const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');

//         const data = await response.json();
     
//         console.log(data.joke);
//     }
//     catch(error){
//         console.log("Code Error.");
//     }


// }
// api()