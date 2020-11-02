console.log("card");

((d) => {

    //getting items via Id
    let show = d.getElementById("show");
    let hideLess = d.getElementById("hide-less")
    let hideMore = d.getElementById("hide-more")

    let cardDisplay = d.getElementById("card");

    // this is our state
    // keep track of whether the items are showing
    let invisible = true;

    // every time the user clicks
    show.addEventListener("click", () => {
        // if display:none then set to inline, otherwise set to none
        hideLess.style.display = invisible ? "inline" : "none";
        hideMore.style.display = invisible ? "none" : "inline";

        cardDisplay.style.display = invisible ? "inline" : "none";

        // switch the value of invisible
        invisible = !invisible;
    });
})(document);

console.log('test')

