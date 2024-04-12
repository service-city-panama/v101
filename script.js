
const abrirModal = document.getElementById('abrirModal');
const miModal = document.getElementById('miModal');
const cerrarModal = document.getElementById('cerrarModal');

abrirModal.addEventListener('click', () => {
    miModal.style.display = 'block';
});

cerrarModal.addEventListener('click', () => {
    miModal.style.display = 'none';
});
