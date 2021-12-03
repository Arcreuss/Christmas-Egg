window.addEventListener("load", function(event) {
    const spans = this.document.querySelectorAll('.spanm');
    let compteur = 0;
    let ended = false;
    let img = this.document.createElement('img');
    img.src = ""
    fetch("IMAGE.PHP")
        .then(res => res.text())
        .then((result) => {
            let temp = img.src
            img.src = temp + result;
        });


    spans.forEach(element => {
        element.addEventListener('click', () => {
            if (!ended) {
                if (compteur < 5) {
                    compteur += 1;
                } else {
                    setTimeout(() => {
                        document.body.appendChild(img);
                    }, 3000)
                    fetch("CODE.PHP")
                        .then(res => res.text())
                        .then((result) => { element.id = result });
                }
            }
        })
    });
})