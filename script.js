function initSite() {
    printList()
}

// Till startsidan
function toStart() {
    window.location = "index.html"
}

// Skapa dagboksinlägg
function writePost() {
    var rubrik = document.getElementById("input1").value 
    var inlägg = document.getElementById("input2").value 
    var date = document.getElementById("date").value
    saveToStorage({ title: rubrik, text: inlägg, day: date })
    printList()
}
 // Funktion för att printa ut dagboksinläggen
function printList() {
    var postList = JSON.parse(localStorage.getItem("list"))
    var inläggsSida = document.getElementById("posts")
    inläggsSida.innerHTML = ""

    // Loop för att printa rubrik och inläggstext
    postList.forEach(post => {
        postDiv = document.createElement("div")
        postDiv.classList = "postDiv"

        var title = document.createElement("p")
        title.innerText = post.title
        title.classList = "postTitle"

        var date = document.createElement("p")
        date.classList = "dateText"
        date.innerText = post.day

        var text = document.createElement("p")
        text.innerText = post.text
        text.classList = "postText"

        postDiv.appendChild(title)
        postDiv.appendChild(date)
        postDiv.appendChild(text)
        inläggsSida.appendChild(postDiv)
    }); 
}

// Funktion för att spara dagboksinläggen till localstorage
function saveToStorage(post) {
    var postList = JSON.parse(localStorage.getItem("list"))
    if(postList) {
        postList.push(post)
    } else {
        postList = []
        postList.push(post)
    }

    localStorage.setItem("list", JSON.stringify(postList))
}

// Funktion för att öppna formuläret "Skapa nytt inlägg"
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

// Funktion för att stänga formuläret
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
