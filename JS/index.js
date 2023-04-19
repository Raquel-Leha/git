function calcIva (precio){
    let precioConIva = precio;
    let precioSinIva = (precio / 1.21);
    console.log("El precio con Iva es: " + precioConIva + " y el precio sin Iva es: " + precioSinIva);
}

calcIva(12.3);
