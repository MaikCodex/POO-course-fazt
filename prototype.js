function Person(name, lastName) {
    this.name = name,
    this.lastName = lastName
    this.displayName = function() {
        return `${this.name} ${this.lastName}`
    }
}

const john = new Person("John", "Doe");
john.name = "joe"
console.log(john.displayName())

const mario = new Person("Mario", "Rossi")
console.log(mario.displayName())

//! Añadimos un metodo nuevo al subObjeto john
john.greet = function() {
    return `Hello, I'm ${this.name}`
}
console.log(john)

//! De esta manera añadimos el metodo a la Clase Padre
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`
}

console.log(mario)

//! Para entender esto, hay que saber que los objetos hijos, no son copias de la clase, sino que son referencias

//! Por eso cuando añadimos el metodo "greet" con el prototype al objeto Person, los objetos hijos no tienen el metodo greet, sino que lo buscan y heredan del objeto person

Person.prototype.age = 100;

console.log(john)
console.log(mario)
console.log(john.age)
console.log(mario.age)

//! En principio jhon y mario no tienen la propiedad age, pero al llamar a la propiedad age, esta aparece, por que no esta directamente en el objeto hijo, sino que esta en el constructor, y como estan vinculados, este se muestra

//* --------------------------------------------------

//! De esta manera con "prototype" tambien podemos modificar los constructores propios del lenguaje y añadirles nuevas propiedades y metodos y extender estos constructores

const s = new String("Hello World")

String.prototype.concatTest = function() {
    return this + " " + "test"
}

console.log(s.concatTest())

console.log("my name is jesus".concatTest())