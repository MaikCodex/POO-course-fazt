// Son funciones que nos permiten crear objetos con propiedades y metodos a partir de una plantilla

//! Objeto Literal
const user1 = {
    name: "Ryan",
    lastname: "Perez",
    age: 30,
    showFullName() {
        return `${this.name} ${this.lastname}`
    }
}

//* --------------------------------------------------

//! Constructor
function Person() {
    this.name = "",
    this.lastname = "",
    this.age = 0,
    this.showFullName = function() {
        return `${this.name} ${this.lastname} tiene ${this.age} años`
    }
}

const user2 = new Person()
user2.name = "Fernando"
user2.lastname = "Herrera"
user2.age = 30
console.log(user2.showFullName())

const user3 = new Person()
user3.name = "Raul"
user3.lastname = "WebDev"
user3.age = 45
console.log(user3.showFullName())

const user4 = new Person()
user4.name = "anonimo"

const user5 = new Person()

console.log(user4)
console.log(user5)
