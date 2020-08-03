const chop = (str, size) => {
  if (str == null) return []
  str = String(str)
  size = ~~size
  return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str]
}

const convert = (msg, l) => {
  // cortamos el mensaje en arreglos de longitud l
  const chunks = chop(msg, l)

  // transponemos el arreglo
  const transpolated = Array(l).fill().map((_, i) => chunks.map(r => r[i]))

  // pasamos el arreglo a string
  return transpolated.join('').replace(/,/g, '').trim()
}

export default convert
