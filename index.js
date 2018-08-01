function BoardMember(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}

BoardMember.prototype.veto = function(){
    return 'No, I must disagree'
  }
  BoardMember.prototype.approve = function(){
    return 'You can do that!'
  }
  BoardMember.prototype.doCharity = function(){
    return "I like to help people."
  }

  BoardMember.prototype.releasePressStatement = function(){
    return "You will see great things from Scuber."
  }

  BoardMember.prototype.sayHi = function(){
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
  }


  // using prototypes allows us to grant each object made from our constructor function a reference to a SINGLE function declaration. 
  // this differs from defining a function within the constructor. If the constructor contains a function, then the function will
  // be REDECLARED every single time we instantiate a new object. Although the function is identical, it is a new declaration. That is memory ineffecient. 
  // thus- we use a prototype so that our objects all reference a single function declaration. 
