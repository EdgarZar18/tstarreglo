/*  Archivo controllers/garantias.js
 *  Simulando la respuesta de objetos Garantias
 *  en un futuro aquí se utilizarán los modelos
 */

const Garantia = require('../scripts/servicio_garantias')

function crearGarantia(req, res) {
  // Instanciaremos un nuevo solicitud utilizando la clase garantia
  var garantia = new Garantia(req.body)
  res.status(201).send(garantia)
}

function obtenerGarantia(req, res) {
  // Simulando dos solicitudes y respondiendolos
  var garantias = [
    new Garantia(1, 4, '4/06/2020', 3, 8, 'pendiente'),
    new Garantia(2, 3, '5/06/2020', 4, 9, 'rechazada'),
    new Garantia(3, 3, '5/06/2020', 4, 9, 'aceptada')
  ]
  if (typeof req.params.id === 'number') {
    let s = garantias.find(s => s == req.params.id)
    s ? res.send(s) : res.status(404).send({ message: 'Servicio de Garantia no encontrado' });
  }
  res.send(garantias)
}

function modificarGarantia(req, res) {
  // simulando un solicitud previamente existente que el solicitud utili
  var solicitud1 = new Garantia(1, 4, '4/06/2020', 3, 8, 'pendiente')
  var modificaciones = req.body
  solicitud1 = { ...solicitud1, ...modificaciones }
  res.send(solicitud1)
}

function eliminarGarantia(req, res) {
  res.status(200).send(`Solicitud ${req.params.id} eliminada`);
}

module.exports = {
  crearGarantia,
  obtenerGarantia,
  modificarGarantia,
  eliminarGarantia
}