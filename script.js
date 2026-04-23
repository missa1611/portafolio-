// menú hamburguesa
function toggleMenu(){
const menu = document.getElementById("menu");
if(menu){
menu.classList.toggle("activo");
}
}

// animación scroll
const elementos = document.querySelectorAll(".presentacion, .frase, .perfil");

//  agregado
const nuevosElementos = document.querySelectorAll(".formacion, .proyectos");

// 🔽 nuevo (para imagen bienvenida, sin repetir variable)
const imagenBienvenida = document.querySelectorAll(".bienvenida-img");

const mostrarScroll = () => {
const trigger = window.innerHeight * 0.85;

elementos.forEach(el => {
const top = el.getBoundingClientRect().top;
if(top < trigger){
el.classList.add("visible");
}
});

// agregado
nuevosElementos.forEach(el => {
const top = el.getBoundingClientRect().top;
if(top < trigger){
el.classList.add("visible");
}
});

// 🔽 agregado para imagen
imagenBienvenida.forEach(el => {
const top = el.getBoundingClientRect().top;
if(top < trigger){
el.classList.add("visible");
}
});

};

window.addEventListener("scroll", mostrarScroll);
window.addEventListener("load", mostrarScroll);

// MODAL

function abrirImagen(img){
const modal= document.getElementById("modalImagen");
const imagenGrande= document.getElementById("imagenGrande");

modal.style.display= "flex";
imagenGrande.src= img.src;
}

function cerrarImagen(){
document.getElementById("modalImagen").style.display="none";
}