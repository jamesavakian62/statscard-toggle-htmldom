let dog = {
    name: "Steve",
    age: 1,
    location: "Japan",
    profileImg: "https://images.unsplash.com/photo-1613410180211-106788bd2d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
    bannerImg: "url('https://thumbs.dreamstime.com/b/green-polka-dot-background-25383307.jpg')",
    backgroundColor: "blue",
    stats: {
        followers: "1.2M",
        likes: "8M",
        posts: "2K"
    }
}
let cat = {
    name: "Mochi",
    age: 1,
    location: "Philippines",
    profileImg: Image, //"https://images.unsplash.com/photo-1621780030440-71c9ace78fa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG9yYW5nZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    bannerImg: 'green', //"url('https://www.teahub.io/photos/full/159-1595602_chevron-desktop-wallpapers-hd-blue-striped-wallpaper-hd.jpg')",
    backgroundColor: "#FFD580",
    stats: {
        followers: "4.5M",
        likes: "12M",
        posts: "8K"
    },

    speak() {   "meow meow"    }
}

//console.log("hello world");

// How do I change the text color of the name to green?
// How do I access the name?
// How do I change the style?
// How do I change the value of the style?  with DOM



// document.querySelector('h1', container).style.color = 'green';

// document.getElementById("myH1").style.color = "green";

// /////style.backgroundImage 

// How do I change my profile picture to steve's?

// How do I access the image?
// What property do I want to change?
// What do I want to change that property too?
function changePet(){
let cat = {
    name: "Mochi",
    age: 1,
    location: "Philippines",
    profileImg: Image, //"https://images.unsplash.com/photo-1621780030440-71c9ace78fa3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG9yYW5nZSUyMGNhdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    bannerImg: 'green', //"url('https://www.teahub.io/photos/full/159-1595602_chevron-desktop-wallpapers-hd-blue-striped-wallpaper-hd.jpg')",
    backgroundColor: "#FFD580",
    stats: {
        followers: "4.5M",
        likes: "12M",
        posts: "8K"
    },

    speak() {   "meow meow"    }
}

// document.getElementsbyClassName('profile').innerHTML = "https://images.unsplash.com/photo-1613410180211-106788bd2d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80";


//How do I get the profile picture of the dog?

//// document.getElementById('fullname').getClickEventListener("click" function() {
////     document.getElementById('fullname').style.com = 'green'


    // const curColour = document.body.style.backgroundColor;

    // document.body.style.backgroundColor = curColour === 'red' ? 'blue' : 'red';
// });

document.getElementById('fullname').innerText = cat.name
console.log(document.getElementById('fullname').innerText)    // )  .innerText = dog.name
document.getElementById('fullname').innerText = cat.name
document.getElementById('age').innerText = cat.age
document.getElementById('location').innerText = cat.location
document.getElementsByClassName("photo1")[0].src = './images/cat.png'
//document.getElementsByClassName("photo1")[0].height = '100px'
document.getElementsByClassName("top")[0].style.backgroundColor = cat.bannerImg
document.getElementsByClassName("mid")[0].style.backgroundColor = cat.bannerImg
document.getElementsByClassName("mid-bottom")[0].style.backgroundColor = cat.bannerImg
document.body.style.background = cat.backgroundColor;
document.getElementsByClassName('one1')[0].innerText = cat.stats.followers;
document.getElementsByClassName('one1')[1].innerText = cat.stats.likes;
document.getElementsByClassName('one1')[2].innerText = cat.stats.posts;
console.log(cat.speak);         /////
}
// if you click the name changte the color of it to green and back
// document.getElementById("fullname").addEventListener("click", function() {

//     let name = document.getElementById('fullname')
        
//      if( name.style.color == 'blue'   ){ 
//          name.style.color ='black'
//     } else if (name.style.color != 'blue' ){
//         name.style.color ='blue'
      
//     }
  
// })



// document.getElementById("fullname").addEventListener("click", function() {

    //     let name = document.getElementById('fullname')
            
    //      if( name.style.color == 'blue'   ){ 
    //          name.style.color ='black'
    //     } else if (name.style.color != 'blue' ){
    //         name.style.color ='blue'
          
    //     }
      
    // })


    //  document.body.style.backgroundColor = curColour === 'green' ? 'blue' : 'red';

        //how do i get the style of an element?
        // how do i change the color of that style?

        // see sunday video at beginning, flash  by

        // write code to change the green text back to black
  
// document.getElementById("change").addEventListener("click", changePet() 

function changePet2() {

        let dog = {
            name: "Steve",
            age: 1,
            location: "Japan",
            profileImg: "https://images.unsplash.com/photo-1613410180211-106788bd2d94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
            bannerImg: "url('https://thumbs.dreamstime.com/b/green-polka-dot-background-25383307.jpg')",
            backgroundColor: "blue",
            stats: {
                followers: "1.2M",
                likes: "8M",
                posts: "2K"
            }
        }

document.getElementById('fullname').innerText = dog.name
console.log(document.getElementById('fullname').innerText)    // )  .innerText = dog.name
document.getElementById('fullname').innerText = dog.name
document.getElementById('age').innerText = dog.age
document.getElementById('location').innerText = dog.location
document.getElementsByClassName("photo1")[0].src = './images/stevephoto.jpg'
//document.getElementsByClassName("photo1")[0].height = '100px'
document.getElementsByClassName("top")[0].style.backgroundColor = dog.bannerImg
document.getElementsByClassName("mid")[0].style.backgroundColor = dog.bannerImg
document.getElementsByClassName("mid-bottom")[0].style.backgroundColor = dog.bannerImg
document.body.style.background = cat.backgroundColor;
document.getElementsByClassName('one1')[0].innerText = dog.stats.followers;
document.getElementsByClassName('one1')[1].innerText = dog.stats.likes;
document.getElementsByClassName('one1')[2].innerText = dog.stats.posts;
    
    }

function togglePet(){

   if ( document.getElementById('fullname').innerText != dog.name
    ){
        changePet2();
        
    } else if  ( document.getElementById('fullname').innerText == dog.name
    ){
        changePet();
    }

}



