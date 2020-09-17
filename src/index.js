console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", (evt) => {
    console.log("🐶 🐶 🐶 🐶")
    let dogImageContainer = document.getElementById('dog-image-container')
    let dogUL = document.querySelector("#dog-breeds")

    
    //challenge1
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
        // this is my json object.
        //I have to return it and can do so by not having the curly braces in the 
        //arrow function
    .then(handleImageAppending) 
    //challenge1 


    //challenge2
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(res => {
        let dogBreedsArr = Object.keys(res.message)
        dogBreeedsArr.forEach((breed) => {
            addLIToDom(breed)
            

        })
    })
    //challenge2
        
        
    function handleImageAppending(jsonObject) {
        //console.log(jsonObject.message)
        let arrOfDogURLs = jsonObject.message
        console.log(arrOfDogURLs)
        //I know have an array of URL's how do I get them to the page?

        arrOfDogURLs.forEach(url => {
            dogImageContainer.innerHTML += makeImageTagString(url)
        })
    }
    //DOMContentLoaded
})

function makeImageTagString(url) {
    //will take a single URL
    //then it will get embedded into a source img
    return `<img src="${url}">`
}

function addLIToDom(breed){
    let dogUL = document.querySelector("#dog-breeds")
    dogUL.innerHTML += `<li>${breed}</li>`
}


//####################### Challenge 2 ##########################################

