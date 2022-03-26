const sections = document.querySelectorAll("section");
const cosito = document.querySelector(".cosito");
const navText = document.querySelector(".navText");

const colors = [
    "#6E48AA",
    "#0575E6",
    "#4c922b",
    "#cea166",
    "#d04ed6"
];

const colorsNav = [
    "#FFFFFF"
]

const options = {
    threshold: 0.5
};

let observer = new IntersectionObserver(navCheck, navColor, options);

/* esto es el cosito que se mueve en la nav */

function  navCheck(entries)  {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const colorsIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
    };
        if (entry.isIntersecting) {
            cosito.style.setProperty("left", `${directions.left}px`);
            cosito.style.setProperty("top", `${directions.top}px`);
            cosito.style.setProperty("width", `${directions.width}px`);
            cosito.style.setProperty("height", `${directions.height}px`);
            cosito.style.background = colors[colorsIndex];
        }
    });
}

/* esto deberia ser el texto de la nav cambiando de color pero no me anda jasj */

function  navColor(entries)  {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const colorsNavIndex = entry.target.getAttribute('data-index');
        const navColorChange = activeAnchor.getBoundingClientRect();

        if (entry.isIntersecting) {
            navText.style.color = colorsNav[colorsNavIndex];
        }
    });
}

sections.forEach(section  =>  {
    observer.observe(section);
});


/* esto es el color de alto contraste */


const contenido = document.querySelector(".contenido")
const header = document.querySelector("header")

            var ac_up = document.getElementById("alconUp");
            var ac_down = document.getElementById("alconDown");
            var str = "Activar el modo alto contraste";
          
            alconUp.innerHTML = str;
          
            function changeColor(color) {
                contenido.style.background = color;
                header.style.background = color;
            }

            function alconRun() {
                changeColor('#000000');

                alconDown.innerHTML = "¡Alto Contraste Activado!";
            }        