var names = ['Andrew', 'Julie', 'Jen'];

names.forEach (function(name) {
  console.log('foreach', name);
});

names.forEach ((n) => {console.log('arrow', n)});
names.forEach ((n) => console.log('arrow', n));

var returnMe = (name) => name + '!';
console.log(returnMe('faran'));

var person = {
  name: 'Faran',
  greet : function () {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name );
    });
  }
}

person.greet();

function add (a, b) {
  return a+b;
}
console.log(add(1,3));

var addStatement = (a,b) => {return a+b};
var addExpression = (a,b) => a + b;

console.log(addStatement(1,3));
console.log(addExpression(1,3))
