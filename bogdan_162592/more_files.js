class Person {
  constructor(name, surname, age) {
    this.name = name
    this.surname = surname
    this.age = age
  }

  sayHi() {
    console.log(`Hello ${name} ${this.surname}, how are you?`)
  }
}

const bogdan = new Person("Bogdan", "Koykov", 22)

console.log(bogdan)
