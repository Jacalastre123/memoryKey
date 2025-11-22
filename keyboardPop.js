document.addEventListener("keydown", (event) => {
    
    keys.classList = "keys"
    keys.innerHTML = event.key 

    
})

document.addEventListener("input", (event) => {
 
    keys.classList = "keys"
    keys.innerHTML = codeValue

    
})
