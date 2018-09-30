function Employee(first, last, salary) {
  this.firstName = first;
  this.lastName = last;
  this.salary = salary;
}

Employee.prototype.increaseSalary = function increaseSalary() {
  this.salary += 1000;
}

Employee.prototype.showEmployee = function showEmployee() {
  console.log("First name: " + this.firstName);
  console.log("Last name: " + this.lastName);
  console.log("Salary: " + this.salary);
}

let empleado = new Employee('Chespi','Rito',1000);

empleado.showEmployee();
empleado.increaseSalary();
empleado.showEmployee();
