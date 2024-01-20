function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num > 99 && num < 1000){
    return true
  }
  if (num > -1000 || num < -99){
    return false
  }
  if (num > 99 || num < 1000){
    return false
  } 
}

module.exports = tieneTresDigitos;
