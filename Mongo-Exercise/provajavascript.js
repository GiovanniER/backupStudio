/*function my_outer_function() {
    var counter=0; 
    increase_counter=function() {
      counter++;
    }
    show_counter=function() {
      console.log(counter);
    }
  }
  
  my_outer_function();
  show_counter();
  increase_counter();
  show_counter();
  
function my_outer_function() {
    var counter=0;
    increase_counter=function() {
        counter++;
    }
    show_counter=function() {
        console.log(counter);
    }
}

my_outer_function();
show_counter();
increase_counter();
//my_outer_function();
show_counter();

*/
function Person(name, surname) {
    this.name=name;
    this.surname=surname;

    // Usiamo una variabile locale, che fantasiosamente chiameremo "that"
    var that=this;

    inspect_this = function() {
        console.log(that.name + " " + that.surname);
    }
}
  
var claudio = new Person("Claudio", "Cicali");

inspect_this();