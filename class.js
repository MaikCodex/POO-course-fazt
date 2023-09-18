function Person() {
    this.name = "",
    this.lastname = ""
}

//! usando la palabra reservada class, con el constructor, obtenemos el mismo resultado

//! A esto se le llama azucar sintactica(sintactic sugar), una forma bonita de escribir codigo aun que sea lo mismo

class Person2 {
    constructor(name, lastname) {
        this.name = name,
        this.lastname = lastname
    }

    greet() {
        return `Hello, I'm ${this.name} ${this.lastname}`
    }

}

const user = new Person2("Fernando", "Herrera")
const user2 = new Person2("Raul", "WebDev")

console.log(user.greet())
console.log(user2)

//! Las clases tratan de seguir las mejores recomendaciones a la hora de crear objetos.

//! Por eso al añadir los métodos dentro de "class", los hijos no tienen el método, por que hace el mismo uso que la palabra reservada prototype.

//! Las clases primero hay que definrlas, luego hay que instanciarlas, y por último ya se pueden utilizar

const Person3 = class {
    constructor(name, lastname) {
        this.name = name,
        this.lastname = lastname
    }
}

//! Esta es otra manera de crear clases, guardandola en una constante, por lo que la clase no tiene nombre.(Esto es equivalente a una funcion anonima)

//* --------------------------------------------------

const Person4 = class {
    constructor(name, lastname) {
        this.name = name,
        this.lastname = lastname
        return {
            x: 1
        }
    }
}

const user3 = new Person4("Fernando", "Herrera");

console.log(user3)

//! Las clases retornan sus propiedades y metodos, por lo que no es necesario retornarlos, si retornas algo esto sobreescribirá las propiedades principales