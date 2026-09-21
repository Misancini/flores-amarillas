const boton = document.getElementById("botonSorpresa");
const sorpresa = document.getElementById("sorpresa");
const jardin = document.getElementById("jardin");

const botonCarta = document.getElementById("botonCarta");
const carta = document.getElementById("carta");

const botonSecreto = document.getElementById("botonSecreto");
const mensajeSecreto = document.getElementById("mensajeSecreto");


/* =========================
   BOTÓN PRINCIPAL
========================= */

boton.addEventListener("click", () => {

    sorpresa.classList.add("mostrar");

    sorpresa.scrollIntoView({
        behavior: "smooth"
    });

    crearJardin();

    iniciarPetalos();

    boton.disabled = true;
});


/* =========================
   CREAR FLORES
========================= */

function crearJardin() {

    jardin.innerHTML = "";

    for (let i = 0; i < 9; i++) {

        const flor = document.createElement("div");

        flor.classList.add("flor");

        /* Cada flor crece después de la anterior */

        flor.style.animationDelay =
            `${i * 0.35}s, ${i * 0.35 + 1.8}s`;

        const cabeza = document.createElement("div");
        cabeza.classList.add("cabeza");


        /* PÉTALOS DE LA FLOR */

        for (let j = 0; j < 10; j++) {

            const petalo = document.createElement("div");

            petalo.classList.add("petalo");

            petalo.style.transform =
                `rotate(${j * 36}deg) translateY(-18px)`;

            cabeza.appendChild(petalo);
        }


        /* CENTRO */

        const centro = document.createElement("div");
        centro.classList.add("centro");


        /* TALLO */

        const tallo = document.createElement("div");
        tallo.classList.add("tallo");


        /* HOJAS */

        const hojaIzquierda = document.createElement("div");

        hojaIzquierda.classList.add(
            "hoja",
            "hoja-izquierda"
        );


        const hojaDerecha = document.createElement("div");

        hojaDerecha.classList.add(
            "hoja",
            "hoja-derecha"
        );


        cabeza.appendChild(centro);

        flor.appendChild(cabeza);

        flor.appendChild(tallo);

        flor.appendChild(hojaIzquierda);

        flor.appendChild(hojaDerecha);

        jardin.appendChild(flor);
    }
}


/* =========================
   PÉTALOS CAYENDO
========================= */

function crearPetaloCayendo() {

    const petalo = document.createElement("div");

    petalo.classList.add("petalo-cayendo");

    const petalos = [
        "🌼",
        "💛",
        "✨"
    ];

    petalo.textContent =
        petalos[Math.floor(Math.random() * petalos.length)];

    petalo.style.left =
        Math.random() * 100 + "vw";

    petalo.style.fontSize =
        14 + Math.random() * 18 + "px";

    petalo.style.animationDuration =
        5 + Math.random() * 5 + "s";

    document.body.appendChild(petalo);


    setTimeout(() => {

        petalo.remove();

    }, 10000);
}


/* Empezar lluvia */

function iniciarPetalos() {

    setInterval(() => {

        crearPetaloCayendo();

    }, 500);
}


/* =========================
   ABRIR CARTA
========================= */

botonCarta.addEventListener("click", () => {

    carta.classList.add("mostrar");

    botonCarta.style.display = "none";


    /* Llevar suavemente hacia la carta */

    setTimeout(() => {

        carta.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);


    /* Botón secreto aparece después */

    setTimeout(() => {

        botonSecreto.classList.add("mostrar");

    }, 2500);
});


/* =========================
   BOTÓN SECRETO
========================= */

botonSecreto.addEventListener("click", () => {

    mensajeSecreto.classList.add("mostrar");

    botonSecreto.style.display = "none";


    /* EXPLOSIÓN DE CORAZONES Y FLORES */

    for (let i = 0; i < 45; i++) {

        setTimeout(() => {

            crearCorazon();

        }, i * 70);
    }


    setTimeout(() => {

        mensajeSecreto.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 300);
});


/* =========================
   CORAZONES FINALES
========================= */

function crearCorazon() {

    const corazon = document.createElement("div");

    corazon.classList.add("corazon");

    const elementos = [
        "💛",
        "🌻",
        "✨",
        "🌼"
    ];

    corazon.textContent =
        elementos[Math.floor(Math.random() * elementos.length)];

    corazon.style.left =
        Math.random() * 100 + "%";

    corazon.style.fontSize =
        18 + Math.random() * 25 + "px";

    corazon.style.animationDuration =
        3 + Math.random() * 4 + "s";

    document.body.appendChild(corazon);


    setTimeout(() => {

        corazon.remove();

    }, 7000);
}
