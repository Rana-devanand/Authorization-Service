class Parent {
  constructor(name = "AppError", message = "Something went wrong") {
    (this.name = name), (this.message = message), super();
  }
}

class child extends Parent {
  constructor(error) {
    let errorName = error.name;
    super(errorName, "Hi there");
  }
}

let obj = new child();
console.log(obj);
