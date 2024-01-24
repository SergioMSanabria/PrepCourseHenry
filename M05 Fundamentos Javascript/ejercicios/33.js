function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero  === 2){
    return true
  } else if (numero < 2){
    return false
  } 
  for(var contador = 2 ; contador < numero; contador++){
    if (numero % contador === 0){
      return false
    }
  }
return true
} 

module.exports = esNumeroPrimo;
