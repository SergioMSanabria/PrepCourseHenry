function colors(color) {
  // La función recibe un color. Retorna el string correspondiente:
  // En caso que el color recibido sea "blue"   --> "This is blue".
  // En caso que el color recibido sea "red"    --> "This is red".
  // En caso que el color recibido sea "green"  --> "This is green".
  // En caso que el color recibido sea "orange" --> "This is orange".
  // Si no es ninguno de esos colores           --> "Color not found".
  // PISTA: utilizar el statement SWITCH.
  // Tu código:
  if (color === "blue"){
    return "This is blue"
  }
  if (color === "red"){
    return "This is red"
  }
  if (color === "ingles"){
    return "Hello!"
  }
  if (idioma === undefined){
    return "Hola!"
  }else {
    return "Hola!"
  }
}

module.exports = colors;
