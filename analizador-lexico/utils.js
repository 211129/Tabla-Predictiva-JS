export function separarElementos(texto) {
    // Expresión regular para buscar "create index", "(", ")", "on", y cualquier otro carácter
    var regex = /\b(create index|\(|\)|on)|(.)/g;

    // Obtener todos los elementos coincidentes, incluidas las letras individuales y las palabras clave
    var elementos = texto.match(regex) || [];

    // Filtrar elementos vacíos, null y espacios
    elementos = elementos.filter(function(elemento) {
        return elemento.trim() !== '' && elemento !== null;
    });

    return elementos;
}