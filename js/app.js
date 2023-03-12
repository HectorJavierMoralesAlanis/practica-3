const date =document.getElementById("date");
date.innerHTML = new Date().getFullYear();

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click",function (){
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if (containerHeight == 0) {
        linksContainer.style.height =`${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add("fixed-nav");
    } else {
        navbar.classList.remove("fixed-nav");
    }
    if (scrollHeight > 500) {
        topLink.classList.add("show-link");
    } else {
        topLink.classList.remove("show-link");
    }
});

const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;

        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position +containerHeight;
        }

        window.scrollTo({
            left: 0,
            top: position,
        });
        linksContainer.style.height = 0;
    })
})

const sobreMi = document.getElementById("cuerpo");
const curriculumV = document.getElementById("cuerpoVitae");
const multi = document.getElementById("cuerpoMulti");
const contact =document.getElementById("cuerpoContacto");

window.addEventListener("DOMContentLoaded",function(){
    mostrarAbout();
    mostrarCurriculum();
})

function mostrarAbout(){
    let infoAbout = `<div class="columna" style="text-align:center;">
    <li>
    <div class="info">
    <p style="text-align:justify">Soy Hector Javier Morales Alanis, actualmente me encuentro estudiando la carrera de ingenieria en tecnologia de la informacion en la universidad politecnica de victoria. Mi posicion actual es estudiante pero tengo experiencia en el area laboral en el lenguaje c# para aplicaciones de escritorio, tambien con el framework Angular tengo experiencia.<br>Mi especialidad seria en la parte de backend ya que es la parte en la cual mas se me facilita pero no me limito solo a eso tambien podria desenvolverme en frontend.<br>Actualmente vivo en cd.Victoria Tamaulipas, mi banda favorita son los Red Hot Chili Peppers, me gustan los videojuegos.</p>
    </div>
    <li>
    <li class="imagen" style="text-align:center;">
    <img src="./Imagenes/Imagen-removebg-preview.png">
    </li>
    </div>`;
    sobreMi.innerHTML = infoAbout;
}

function mostrarCurriculum(){
    let infoVitae = `<div style="text-align:center;" class="vitaeCurr">
    <img src="./imagenes/Black & White Professional Designer Simple Resume.png"/>
    </div>`
    curriculumV.innerHTML = infoVitae;
}