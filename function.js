let manKiBaat = {
  firstName: "jabir",
  lastName: "Khan",
  age: 29,
  fullName: () => {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(manKiBaat.fullName);

console.log(this);

