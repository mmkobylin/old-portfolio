console.log("test");

((d) => {

    //getting items via Id
    let show = d.getElementById("show");
    let hide = d.getElementById("hide-less")

    let cardDisplay = d.getElementById("test");

    // this is our state
    // keep track of whether the items are showing
    let invisible = true;

    // every time the user clicks
    show.addEventListener("click", () => {
        // if display:none then set to inline, otherwise set to none
        hide.style.display = invisible ? "inline" : "none";

        cardDisplay.style.display = invisible ? "inline" : "none";

        // switch the value of invisible
        invisible = !invisible;
    });
})(document);

