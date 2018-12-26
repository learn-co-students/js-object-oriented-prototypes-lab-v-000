
function BoardMember(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}
//each JavaScript object has reference to attributes declared on its constructor's prototype
//Both sally and freddy have a reference to the sayHello attribute that points to a specific function.
//Not only that, but they have reference to exactly the same function:
BoardMember.prototype.veto = function(){
  return "No, I must disagree"
};

BoardMember.prototype.approve = function(){
  return 'You can do that!'
};

BoardMember.prototype.doCharity = function(){
  return "I like to help people."
};


BoardMember.prototype.releasePressStatement = function(){
  return "You will see great things from Scuber."
};


BoardMember.prototype.sayHi = function(){
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
};
