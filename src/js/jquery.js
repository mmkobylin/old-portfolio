console.log("test");

((d) => {

function toggleDocs(event) {

    if (event.target && event.target.className == 'skill-heading') {

        var next = event.target.nextElementSibling;

        if (next.style.display == "none") {
            next.style.display = "inline-block";

        } else {
            next.style.display = "none";
        }
    }
}

document.addEventListener('click', toggleDocs, true);

})(document);
