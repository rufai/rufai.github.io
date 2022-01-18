const data = [
    {
        "url" : "https://images.pexels.com/photos/2376712/pexels-photo-2376712.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "alt" : "SEOUL neon light"
    },
    {
        "url" : "https://images.pexels.com/photos/2133243/pexels-photo-2133243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "alt" : "a cat shaped mascot"
    },
    {
        "url" : "https://images.pexels.com/photos/2888679/pexels-photo-2888679.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "alt" : "korean workers eating in restaurant after working hours"
    },
    {
        "url" : "https://images.pexels.com/photos/3038786/pexels-photo-3038786.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
        "alt" : "Korean sea-food market"
    },
    {
        "url" : "https://images.pexels.com/photos/6045114/pexels-photo-6045114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "alt" : "panoramicc view of seoul from the top of a high-rise building"
    },
]

let currentImgIndex = 0

function setNewImage(imgIndex){
    const imgElement = document.createElement("img")

    const sliderElement = document.getElementById("slider")

    imgElement.setAttribute("src", data[imgIndex].url )
    imgElement.setAttribute("alt", data[imgIndex].alt )
    imgElement.setAttribute("width", "200px" )
    imgElement.setAttribute("height", "200px" )

    sliderElement.appendChild(imgElement)
}

setNewImage(currentImgIndex)

const leftButtonElement = document.getElementById("left")
const rightButtonElement = document.getElementById("right")

leftButtonElement.addEventListener("click", (e) => {
    currentImgIndex--
})