window.addEventListener("load", function(event) {
    const spans = this.document.querySelectorAll('.spanm');
    const img = this.document.createElement('img');
    const text = this.document.createElement('input');
    const btn = this.document.createElement('input');
    text.type = 'text';
    text.classList.add("inputText")
    btn.type = 'submit';
    btn.value = 'Vérifier';
    btn.classList.add("buttun")


    let compteur = 0;
    let ended = false;
    img.src = ""
    fetch("IMAGE.php")
        .then(res => res.text())
        .then((result) => {
            let temp = img.src
            img.src = temp + result;
        });
    document.body.appendChild(text);
    document.body.appendChild(btn);


    btn.addEventListener('click', () => {
        fetch("coords.php")
            .then(res => res.text())
            .then((result) => {
                let chaine1 = result.toString();
                let chaine2 = text.value.toLowerCase().split(" ").join("").split("−").join("-");
                if (chaine2 == chaine1) {
                    fetch("googleMaps.php")
                        .then(res => res.text())
                        .then((result) => {
                            window.open(result);
                        });
                } else {
                    console.log(chaine2);
                    console.log(chaine1);
                }
            });
    })

    spans.forEach(element => {
        element.addEventListener('click', () => {
            if (!ended) {
                if (compteur < 5) {
                    compteur += 1;
                } else {
                    setTimeout(() => {
                        document.body.appendChild(img);
                    }, 3000)
                    fetch("CODE.php")
                        .then(res => res.text())
                        .then((result) => { element.id = result });
                }
            }
        })
    });

})