function listen(){
    document.addEventListener("keydown", (e) => {
        const givenTextLength = sectionGivenElement[0].textContent.length
        const typedTextLength = sectionTypedElement[0].textContent.length
        if ( e.keyCode > 64 && e.keyCode <= 90  && typedTextLength < givenTextLength ){
            console.log( e.keyCode, sectionTypedElement[0].textContent.length )
            const indexPointer = sectionTypedElement[0].textContent.length  // pointer 
            console.log( sectionGivenElement[0].textContent[indexPointer].trim() === e.key.trim() )
            sectionTypedElement[0].textContent += e.key 
        }
        
    })
}
function listenSpan(){
    document.addEventListener("keydown", (e) => {
        const givenTextLength = sectionGivenElement[0].textContent.length
        const typedTextLength = sectionTypedElement[0].textContent.length
        if ( e.keyCode === 32 || e.keyCode > 64 && e.keyCode <= 90  && typedTextLength < givenTextLength ){
            console.log( e.keyCode, sectionTypedElement[0].textContent.length )
            const indexPointer = sectionTypedElement[0].textContent.length  // pointer 
            console.log( sectionGivenElement[0].textContent[indexPointer].trim() === e.key.trim() )
            
            const doesItMatch =  sectionGivenElement[0].textContent[indexPointer].trim() === e.key.trim() 

            const charElement = document.createElement("span")
            if (doesItMatch) {
                charElement.setAttribute("class", "green")
            }
            else {
                charElement.setAttribute("class", "red")
            }

            charElement.textContent = e.key.trim()
            
            sectionTypedElement[0].appendChild(charElement) 
        }
        
    })
}

const generatePhrase = () => {
    const char = "abcdefghijklmnopqrstuvwxyz"
    let phrase = ""

    for (let index = 0; index < 20; index++) {
        const index = parseInt (  Math.random() * char.length  )
        
        phrase += char[index]
        
    } 

    return phrase

}

const injectInto = (section, content ) => {

}
const sectionGivenElement = document.getElementsByClassName("given_phrase")
sectionGivenElement[0].textContent = generatePhrase()

const sectionTypedElement = document.getElementsByClassName("typed_phrase")
listenSpan()