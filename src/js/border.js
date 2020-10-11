console.log("test");

((d) => {

    let area = d.getElementById("border");

    let show = true;

    //event clicked

    area.addEventListener("click", () => {
        area.style.display = show ? 'none' : 'block';
        // area.color = color ? "red" : "green";

        show = !show;
    });

    var button = document.getElementById('dissapear');
    button.onclick = function () {
        var div1 = document.getElementById('div1');
        var div2 = document.getElementById('div2');

        if (div1.style.display === 'none') {
            div1.style.display = 'block';
            div2.style.display = 'none';
        } else {
            div1.style.display = 'none';
            div2.style.display = 'block';
        }
    };

})(document);
