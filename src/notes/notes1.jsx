
// JSX
const element = <h1>Hello world!</h1>

// why JSX
// JSX allows us to write HTML elements
//  in JavaScript and place them in the DOM without any 
//  createElement() and/or appendChild() methods. 
//  JSX converts HTML tags into react elements. 
//  You are not required to use JSX, 
//  but JSX makes it easier to
//  write React applications.


// Note: Always start component 
// names with a capital letter.

// React treats components starting
// with lowercase letters as DOM tags. 
// For example, <div /> represents an HTML div tag,
// but <Welcome /> represents a component and requires
// Welcome to be in scope.
// Whether you declare a component as a function or
//  a class, it must never modify its own props. 
// Consider this sum function

function sum(a,b) {
    return a+b;

}

// impure function 
function withdraw(account, amount) {
    account.total -= amount;
  }
  //

  //All React components must act like pure functions with respect to their props.
//A function is said to have side effect if it trys to modify anything outside its body. 
//For example, if it modidifies a global variable, 
//then it is a side effect

  // lifeCycle method call
  //1. Mounting phase 
  // when instanance of component is created nd inserted into the DOM
  //> constructor()
  //>stattic getDriveStatetoProps()
//>render()
//>componentDidMount()
//2 Updating phase
//  An update is caused by changing state nd props 
//> staticGetDrivedStatetoProps
//shouldComponentUpdate()
//render()
//componentDidUpdate()

//3. unMounting : component is called when a component being removed from the DOM
//componentWillUnmount()




//render() will not be invoked if shouldComponentUpdate() returns false.


//Data fetching, setting up a subscription, and manually changing the DOM in React components 
//are all examples of side effects. 



























