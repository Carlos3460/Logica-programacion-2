let celsius = parseFloat(prompt("Ingresa la temperatura Celsius "));

let farenheit=0;
let kelvin=0;

if(isNaN(celsius)){
    alert("Por favor, agregue un valor");

}else{
    farenheit = (celsius + 9/5) + 32;
    kelvin = celsius + 273.15;

    alert(celsius + "°C\n" + farenheit + "°F\n" + kelvin + "°K\n")
}


