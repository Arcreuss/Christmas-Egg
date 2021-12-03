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
                let chaine1 = result.toString();
                let chaine2 = text.value.toLowerCase().split(" ").join("").split("−").join("-");
                if (chaine2 == chaine1) {
                    window.open(`https://www.google.com/maps/@34.1325361,-118.3224481,3a,75y,31.69h,77.39t/data=!3m8!1e1!3m6!1sAF1QipPH63Kkr0XDAM9E1onLoJHSArwG-L97_RB9FC7u!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipPH63Kkr0XDAM9E1onLoJHSArwG-L97_RB9FC7u%3Dw203-h100-k-no-pi-0-ya90.36409-ro-0-fo100!7i8192!8i4096`);
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
                    fetch("CODE.PHP")
                        .then(res => res.text())
                        .then((result) => { element.id = result });
                }
            }
        })
    });

})