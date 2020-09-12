//Solicitud de servicio de garantias

class Garantias {
    constructor(id, nombres, apellidos, correo, telefono, tipoServicio, fechaCreacion, msg) {
    this.id = id;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.correo = correo;
    this.telefono = telefono;
    this.tipoServicio = tipoServicio;
    this.fechaCreacion = fechaCreacion;
    this.msg = msg;
    }
}

module.exports = Garantias;