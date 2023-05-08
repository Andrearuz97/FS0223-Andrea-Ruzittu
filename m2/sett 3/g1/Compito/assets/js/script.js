class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} ${this.lastName} ha ${this.age} anni ed è più grande di ${otherUser.firstName} ${otherUser.lastName} che ne ha ${otherUser.age}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} ${this.lastName} ha ${this.age} anni è più giovane di ${otherUser.firstName} ${otherUser.lastName} che ne ha ${otherUser.age}`;
    } else {
      return `${this.firstName} ${this.lastName} ha la stessa età di ${otherUser.firstName} ${otherUser.lastName}, ovvero ${this.age} anni.`;
    }
  }
}

const user1 = new User("Antonio", "cassano", 40, "Bari");
const user2 = new User("Francesco", "Totti", 37, "Roma");
const user3 = new User("Antonio", "Di natale", 40, "Udine");

console.log(user1.compareAge(user3)); // Output: "Mario è più grande di Luigi"
