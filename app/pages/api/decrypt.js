import convert from '../../libs/convert'

export default (req, res) => {
  let success = false

  if (req.method === 'POST') {
    const n = parseInt(req.query.vueltas)

    if (n && req.query.mensaje) {
      const l = Math.ceil(req.query.mensaje.length / n)
      const msg = req.query.mensaje.padEnd(l * n, ' ')

      res.statusCode = 200
      res.json({ encrypted: convert(msg, l) })
      success = true
    }
  }

  if (!success) {
    res.statusCode = 400
    res.json({ response: 'bad request' })
  }
}
