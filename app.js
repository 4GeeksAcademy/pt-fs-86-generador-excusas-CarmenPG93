const excusas = [
    "Mi perro se comió mis deberes.",
    "Me quedé atrapado en el tráfico.",
    "Me olvidé completamente.",
    "Tenía una cita con el médico.",
    "Perdí mi ordenador.",
    "Estaba enfermo y no podía trabajar."
];

function generarExcusa() {
    const indice = Math.floor(Math.random() * excusas.length);
    document.getElementById("excusa").textContent = excusas[indice];
}
