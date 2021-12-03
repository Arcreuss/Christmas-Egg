window.addEventListener("load", function(event) {
    initBalloons();
    let pos = 500
    let balloons = document.querySelectorAll(".balloon")
    setInterval(function() {
        balloons.forEach(balloon => {
            balloon.style.marginBottom = pos + "px"
            document.body.appendChild(balloon);
        });
        --pos
        if (pos == 0)
            createLastDiv();
    }, 10)

})

function initBalloons() {
    for (let i = 0; i < 40; i++) {
        let balloon = document.createElement("div")
        let image = document.createElement("img")
        balloon.classList.add("balloon")
        image.src = "./Images/balloon.png"
        image.style.width = "100px"
        image.style.height = "auto"

        balloon.style.left = `${getRandom(-300, 920)}px`
        balloon.style.bottom = `${getRandom(0, 250)}px`

        balloon.addEventListener("mouseover", function() {
            // balloon.style.display = "none"
        })

        document.body.appendChild(balloon)
        balloon.appendChild(image)
    }
}

function createLastDiv() {
    let easter = document.createElement("div")
    easter.classList.add("easter")
    easter.innerHTML = "Thank you for playing our game"
    document.body.appendChild(easter)

    let egg = document.createElement("img")
    egg.src = "./Images/egg.jpg"
    egg.classList.add("egg");
    document.body.appendChild(egg);

}

function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}