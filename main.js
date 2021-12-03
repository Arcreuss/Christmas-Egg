window.addEventListener("load", function(event) {
    const spans = this.document.querySelectorAll('.spanm');
    let compteur = 0;
    spans.forEach(element => {
        element.addEventListener('click', () => {
            if (compteur < 5) {
                compteur += 1;
            } else {
                element.id = "Xkjfkqn, ha lnkydwej ejzeya aop 5.68877t^3 −59.161t^2"
            }
        })
    });
})