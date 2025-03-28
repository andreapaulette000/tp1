document.getElementById('cambiarFondo').addEventListener('click', function() {
    const coloresAcuarela = ['#f9e3e3', '#e1f3f8', '#f0e8d5', '#e8f4e8', '#f8e1f0'];
    const colorAleatorio = coloresAcuarela[Math.floor(Math.random() * coloresAcuarela.length)];
    document.body.style.backgroundColor = colorAleatorio;
});