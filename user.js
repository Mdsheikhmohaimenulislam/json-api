const userClick = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {

        user(data)
    })
    
};


const user = (posts) => {
    for( const post of posts){

        console.log(post);

        const bioData = document.createElement('p')
        bioData.innerHTML = `<h3>${post.name}</h3>
        <p></p>
        <p>${post.address.city}</p>
        <p>${post.email}</p>

        `
        document.getElementById('container').appendChild(bioData)
        
    }
}


// const userClick2 = async () => {
//     try {
//         const fetchPost = await fetch("https://jsonplaceholder.typicode.com/posts")
//         const data = await fetchPost.json()
//         showPost(data)
//     } 
//     catch (error) {
//         console.log("Code error");
        
//     }
// }

// const showPost = (fetchPost) => {

//     for(const post  of fetchPost){
//        console.log(fetchPost);

//         const titlePost = document.createElement("p")
//         titlePost.innerText =`
//         ${post.title}
//         ${post.id}
//         `
//         document.getElementById('container').appendChild(titlePost)
//     }
// };


// const userClick = () => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => console.log(response.json()))
    
// };


// console.log("A");
// Promise.resolve().then(() => console.log("B"));
// setTimeout(() => console.log("C"), 0);
// console.log("D");



// async function myFunction() {
//     return "Hello";
//    }
//    myFunction()
//    .then(console.log);



// const a = 10;
 
// const frist = () => {
//     second()
//     console.log("Hi  i am Loi");

// }

// const second = () => {
//     third()
//     console.log("Hi i am Luffy");
// }

// const third = () => {
//     fourth()
//     console.log("Hi i am izuku Midoriya");
// } 

// const fourth = () => {
 
//     console.log("Hi i am sung jinwoo");
// }
 
// const b = 20;

// frist()