//Inheritance and Polymorphism Example

class Shape {
  area() {}
}


class Rectangle extends Shape{
  constructor(w, h){
    super();
    this.width = w;
    this.height = h;
  }
  area() {
    return this.width * this.height;
  }
}

class Triangle extends Shape{
  constructor(b, h){
    super();
    this.base = b;
    this.height = h;
  }
  area() {
    return this.base * this.height;
  }
}
// the 'new' keyword returns an object
const shapes = [new Rectangle(2, 3), new Triangle(2, 6)];

shapes.forEach(item => console.log(item.area()));



// Encapsulation Example

// The goal is to prevent the caller from accessing fullName
// directly, in order to hide our fullName data we used scopes and closures
const person = function(){

  let fullName = 'Henry Okonkwo';
  let reg = new RegExp(/\d+/);

  //Return the inner object when the anonymous function is called 
  //and assign it to the outside variable (person)
  return {
    //When the caller wants to set fullName
    setFullName: function(newValue) {//it ensures the name doesnt contain a digit
      if (reg.test(newValue)){
        console.log('Invalid name');
      } else {
        fullName = newValue;
      }
    },
    getFullName : function(){
      return fullName;
    }
  }; //End of the return
}(); // The '()', means we are calling the function 
    //and assigning the *returned object*, instead of
    // the *function itself* to the 'person'
    
   
    console.log(person.getFullName()); //Henry Okonkwo
    person.setFullName('Chuka Okonkwo');
    console.log(person.getFullName()); //Chuka Okonkwo
    person.setFullName(600); //Invalid name, the name is not changed
    person.fullName = 600; //Doesnt affect the private fullName
    console.log(person.getFullName()); //Chuka Okonkwo
    