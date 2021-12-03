window.addEventListener("load", function(event) {
    const spans = this.document.querySelectorAll('.spanm');
    let compteur = 0;
    spans.forEach(element => {
        element.addEventListener('click', () => {
            if (compteur < 5) {
                compteur += 1;
            } else {
                fetch("CODE.PHP")
                    .then(res => res.text())
                    .then((result) => { element.id = result });
            }
        })
    });
})