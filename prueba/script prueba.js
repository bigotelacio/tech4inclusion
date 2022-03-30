const sections = document.querySelectorAll("section");
const cosito = document.querySelector(".cosito");
const navText = document.querySelector(".navText");

const coloresCoso = [
    "#6f23c7",
    "#1475d6",
    "#49ad1a",
    "#ca7f1c",
    "#f060f8"
];

const coloresNav = [
    "#FFFFFF"
]

const options = {
    threshold: 0.5
};

/* este es el observador que va a hacer acciones al ver cosas en la pantalla. se podria usar el scroll pero esta medio malaso, asi que usemos este jasj */

let observer = new IntersectionObserver(navCheck, options);

/* esto es el cosito que se mueve en la nav. ahora, deberia tambien cambiar el color del texto de la nav */

function  navCheck(entries)  {
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const coloresCosoIndex = entry.target.getAttribute('data-index');
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
            cosito.style.background = coloresCoso[coloresCosoIndex];
            navText.style.color = coloresNav[coloresNavIndex];
        }
    });
}

/* estas son las ordenes para que el observador... bueno, observe */

sections.forEach(section  =>  {
    observer.observe(section);
});
