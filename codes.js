document.addEventListener("input", () => {
    codeValue = codable.value
    if (codeValue === "Alert") {
        window.alert("Alerting!")
    }

    if (codeValue === "Invert") {
        document.body.style.backgroundColor = "white";
        document.querySelectorAll("div").forEach(div => { div.style.backgroundColor = "grey"})
        document.querySelectorAll("h1").forEach(div => { div.style.color = "black"})
        document.querySelectorAll("button").forEach(button => {button.style.border = "2px solid grey"}
    }

    if (codeValue === "UnHide") {
        codable.style.backgroundColor = "white"
        codable.style.color = "black"
    }
    if (event.key === "Enter") {
     if (codeValue.includes("MassGoogleSwitch*")) {
         tabsTot = 0
         
         numRep = codeValue.substring(18)
        for (tabsTot = 0; tabsTot < Number(numRep); tabsTot++) {
            
           
            window.open("https://www.google.com", "_blank")
        }
    }
    }
})
