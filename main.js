window.addEventListener("load", function(event) {
    const spans = this.document.querySelectorAll('.spanm');
    const img = this.document.createElement('img');
    const text = this.document.createElement('input');
    const btn = this.document.createElement('input');
    text.type = 'text';
    text.classList.add("inputText")
    btn.type = 'submit';
    btn.value = 'Vérifier';

    let compteur = 0;
    let ended = false;
    img.src = ""
    fetch("IMAGE.PHP")
        .then(res => res.text())
        .then((result) => {
            let temp = img.src
            img.src = temp + result;
        });
    document.body.appendChild(text);
    document.body.appendChild(btn);


    btn.addEventListener('click', () => {
        fetch("coords.PHP")
            .then(res => res.text())
            .then((result) => {
                console.log(typeof result.toString() + "==" + typeof text.value.toString());
                console.log(result.toString() + "==" + text.value.toString());
                if (text.value.toString() === result.toString()) {
                    console.log("Yes");
                } else {
                    console.log("NO");
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
                    fetch("CODE.PHP")
                        .then(res => res.text())
                        .then((result) => { element.id = result });
                }
            }
        })
    });

})