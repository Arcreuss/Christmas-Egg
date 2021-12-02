window.addEventListener("load", function(event) {
    const spans = this.document.querySelectorAll('.spanm');
    spans.forEach(element => {
        element.addEventListener('click', () => {
            console.log("TTT");
        })
    });
})