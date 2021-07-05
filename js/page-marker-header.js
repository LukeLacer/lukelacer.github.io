window.addEventListener("load", () => {
    var aboutClicked = false
    var contactClicked = false
    var worksClicked = false

    document.querySelector("#logo").addEventListener("click", e => {
        document.getElementById("about-marker").style.display = "none"
        document.getElementById("contact-marker").style.display = "none"
        document.getElementById("works-marker").style.display = "none"
        aboutClicked = false
        contactClicked = false
        worksClicked = false
    })

    document.querySelector("#about-link").addEventListener("click", e => {
        document.getElementById("about-marker").style.display = "flex"
        document.getElementById("contact-marker").style.display = "none"
        document.getElementById("works-marker").style.display = "none"
        aboutClicked = true
        contactClicked = false
        worksClicked = false
    })
    document.querySelector("#about-link").addEventListener("mouseover", e => {
        document.getElementById("about-marker").style.display = "flex"
    })
    document.querySelector("#about-link").addEventListener("mouseout", e => {
        if (!aboutClicked) document.getElementById("about-marker").style.display = "none"
    })


    document.querySelector("#contact-link").addEventListener("click", e => {
        document.getElementById("contact-marker").style.display = "flex"
        document.getElementById("about-marker").style.display = "none"
        document.getElementById("works-marker").style.display = "none"
        contactClicked = true
        aboutClicked = false
        worksClicked = false
    })
    document.querySelector("#contact-link").addEventListener("mouseover", e => {
        document.getElementById("contact-marker").style.display = "flex"
    })
    document.querySelector("#contact-link").addEventListener("mouseout", e => {
        if (!contactClicked) document.getElementById("contact-marker").style.display = "none"
    })


    document.querySelector("#works-link").addEventListener("click", e => {
        document.getElementById("works-marker").style.display = "flex"
        document.getElementById("contact-marker").style.display = "none"
        document.getElementById("about-marker").style.display = "none"
        contactClicked = false
        aboutClicked = false
        worksClicked = true
    })
    document.querySelector("#works-link").addEventListener("mouseover", e => {
        document.getElementById("works-marker").style.display = "flex"
    })
    document.querySelector("#works-link").addEventListener("mouseout", e => {
        if (!worksClicked) document.getElementById("works-marker").style.display = "none"
    })
})