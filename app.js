const textoIngresado = document.getElementById('mi-formulario');

textoIngresado.addEventListener('submit', (e) => {
    e.preventDefault();

  
    const conversion = parseFloat(document.getElementById('celsius').value);

    if (isNaN(conversion)) {
        alert('Por favor, debe ingresar números válidos en el campo Celsius.');
        
        return; // Detiene la ejecución para que no haga los cálculos
    }

    
    const farenheit = (conversion * 1.8) + 32;
    const kelvin = conversion + 273.15;

    
    document.getElementById('farenheit').value = farenheit;
    document.getElementById('kelvin').value = kelvin;
});


