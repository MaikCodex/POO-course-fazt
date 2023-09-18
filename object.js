//! JS ya tiene sus constructores ya creados

const objeto = new Object();

const objeto2 = {}

//! Esto crea un obbjeto vacio sin propiedades ni metodos

const string = new Object("Hello World")
string.name = "Special String"
string.test = function() {
    return this + "test"
}

console.log(string.name)