console.log("Higher order components ?")
// same logic in different components then u can use HOC
// we have component have some state functionality ---> create a new function(pass the 
// compont as argument into the function ) --> return (new comp wrap into the original comp)
console.log("Hooks?")
// WHy hooks?
// its introduced V16+ in react .. 
// classes are a bit difficult 
// the this keyword is confusing
// Boilerplate code 


// hook is function allows us react feacture like 

// useState function returns array two items 1 . value of counter 2. is function update its value
// const array = useState();                                  {
// const count = array[0]  ;   // this.state.count    this 3 line code convert into 1 using array destruction
//                                                          count[count,setState] = useState(0);
// const setState = array[1]   // this.setState()            }
// you cannot use Hooks inside of loops , condition or nested function 