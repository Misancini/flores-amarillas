const boton = document.getElementById("botonSorpresa");
const sorpresa = document.getElementById("sorpresa");
const jardin = document.getElementById("jardin");

boton.addEventListener("click", () => {

    sorpresa.classList.add("mostrar");

    sorpresa.scrollIntoView({
        behavior: "smooth"
    });

    crearJardin();
    lanzarCorazones();

    boton.disabled = true;
});


function crearJardin() {

    jardin.innerHTML = "";

    for (let i = 0; i < 9; i++) {

        const flor = document.createElement("div");
        flor.classList.add("flor");

        flor.style.animationDelay = `${Math.random() * 2}s`;

        const cabeza = document.createElement("div");
        cabeza.classList.add("cabeza");

        for (let j = 0; j < 10; j++) {

            const petalo = document.createElement("div");
            petalo.classList.add("petalo");

            petalo.style.transform =
                `rotate(${j * 36}deg) translateY(-18px)`;

            cabeza.appendChild(petalo);
        }

        const centro = document.createElement("div");
        centro.classList.add("centro");

        const tallo = document.createElement("div");
        tallo.classList.add("tallo");

        const hojaIzquierda = document.createElement("div");
        hojaIzquierda.classList.add("hoja", "hoja-izquierda");

        const hojaDerecha = document.createElement("div");
        hojaDerecha.classList.add("hoja", "hoja-derecha");

        cabeza.appendChild(centro);

        flor.appendChild(cabeza);
        flor.appendChild(tallo);
        flor.appendChild(hojaIzquierda);
        flor.appendChild(hojaDerecha);

        jardin.appendChild(flor);
    }
}


function lanzarCorazones() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            const corazon = document.createElement("div");

            corazon.classList.add("corazon");

            const elementos = ["💛", "🌻", "✨"];

            corazon.textContent =
                elementos[Math.floor(Math.random() * elementos.length)];

            corazon.style.left =
                `${Math.random() * 100}%`;

            corazon.style.fontSize =
                `${18 + Math.random() * 22}px`;

            corazon.style.animationDuration =
                `${3 + Math.random() * 4}s`;

            document.body.appendChild(corazon);

            setTimeout(() => {
                corazon.remove();
            }, 7000);

        }, i * 120);
    }
}
