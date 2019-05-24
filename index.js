function BoardMember(name, homeState, training){
  this.name = name
  this.homeState = homeState
  this.training = training
}

Object.prototype.veto = function () {
  return 'No, I must disagree'
};
Object.prototype.approve = function () {
    return 'You can do that!'
};
Object.prototype.doCharity = function () {
  return "I like to help people."
};

Object.prototype.releasePressStatement = function () {
    return "You will see great things from Scuber."
};
Object.prototype.sayHi = function () {
    return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
};
