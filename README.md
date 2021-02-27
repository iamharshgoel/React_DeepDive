##### REACT DEEP DIVE:-

In imperative paradigm you directly change individual parts of your app in response to various user events.

React works on 4 basic concepts:
1. Don't touch the DOM. I'll do it
2. Build websites like lego blocks
3. Unidirectional data flow
4. UI. The rest is upto you

###### Dependencies:-

1. Install dependencies from package.json: npm install == yarn

2. Install a package and add to package.json: npm install package --save == yarn add package

3. Install a devDependency to package.json: npm install package --save-dev == yarn add package --dev

4. Remove a dependency from package.json: npm uninstall package --save == yarn remove package

5. Upgrade a package to its latest version: npm update --save == yarn upgrade

6. Install a package globally: npm install package -g == yarn global add package

################################################################################

* React library allows you to write this HTML like syntax inside a javascript file 
* react-dom is for rendering the components in the DOM. The react-dom package as the name implies is the glue between **React** and the **DOM**.

* For using class component syntax is:-

class component_Name extends Component{......}

* State is a javascript object with properties that we can access at any point inside of our class.

* The **constructor()** in a React component is called before the component is mounted. When you implement the **constructor** for a React component, you need to call **super**(props) method before any other statement. If you do not call super(props) method, this.props will be undefined in the **constructor** and can lead to bugs.

* super() helps us with this by calling React.Component's constructor()

class component_Name extends Component{
	Constructor(){
		super();
	this.props = {
		......
		}
	}

	render(){
		.......
	}
}

* Key help react understand it helps it know which element is the one that's been updated in the map function.

* Anytime you use the map() function inside of render, or you have a list of the same jsx elements one after another, they need a key attribute (and CRA will warn you about it if you miss it)

* render() method comes built in with react component

####### Lifecycle Methods:-
Essentially methods that get called at different stages of when this component gets rendered.

* fetch() method returns us a promise.

###### Promises:-

The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

> Promise.prototype.then() and Promise.prototype.catch() methods return promises

> A promise object will eventually have a value. It will either be resolved value or a rejected value. The resolved value we use when our API call is successful, our rejected call we use when our API call gives us an error 

A Promise is in one of these states:
* `pending`: initial state, neither fulfilled nor rejected.
* `fulfilled`: meaning that the operation was completed successfully.
* `rejected`: meaning that the operation failed.

> By having a reject we are able to control the separation of a successful API callback from an unsuccessful callback and this is the main benefit of using promises is because when we make an API call we don't know whether or not that will work 100 percent of the time.


For more info:- Check out this documentation link:-
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

* use the back tick  ` and NOT regular single or double quotes (' and ") for string interpolation on our image src. This is an easy mistake to make as you cannot interpolate the strings when using regular quotes, you must use back ticks!

* call, bind, apply:-

bind():- will return a new function with `this` bound.
call():- will actually call the function with `this` bound in any arguments as well.
apply():- does the same thing as call() but it takes 2 arguments 
	1st argument:- what this should be bound to
	2nd argument:- an array of arguments
> call() and apply() will actually run the function immediately whereas bind() will just return a new function so that you can use whenever you want.

🚩 State turns into props when it gets passed down.

* setState() :-

setState(updater, [callback])
setState() enqueues changes to the component state and tells React that this component and its children need to be re-rendered with the updated state. This is the primary method you use to update the user interface in response to event handlers and server responses.

* An onChange event handler returns a Synthetic Event object which contains useful meta data such as the target input’s id, name, and current value.

We can access the target input’s value inside of the handleChange by accessing e.target.value. Therefore, to log the name of the input field, we can log e.target.name.


> Aynchronous action or event is something that actually takes an indefinite amount of time that JavaScript does not know.  Asynchronous action doesn't have to wait – your program can continue to run.
Synchronous action is executed in sequence – each statement waits for the previous statement to finish before executing. JavaScript knows the amount of time it will take.

###### Primitives:-
In JavaScript, a primitive (primitive value, primitive data type) is data that is not an object and has no methods. There are 7 primitive data types: string, number, bigint, boolean, undefined, symbol, and null.

All primitives are immutable, i.e., they cannot be altered. It is important not to confuse a primitive itself with a variable assigned a primitive value. The variable may be reassigned a new value, but the existing value can not be changed in the ways that objects, arrays, and functions can be altered.

NOTE:- Except for null and undefined, all primitive values have object equivalents that wrap around the primitive values.

* bind() is a method on any function that returns a new function where the context of **this** is set to whatever we passed to it 

* Arrow functions use lexical scoping therefore it saves that extra one step of bind method in the constructor.

* We don't call function when it is an event handler.

> 1. React events are named using camelCase, rather than lowercase.
> 2. With JSX you pass a function as the event handler, rather than a string. 

* The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

🚩💡  React.createElement(component, props, ...children) is used to create components without using JSX in vanilla javascript.

* yarn.lock or package.lock is an file generated by either npm or a yarn that locks the version of all the packages inside of our application within a specified range based on the rules that we set inside of package.json .

######## Virtual DOM:-
The virtual DOM is an in-memory representation of the real DOM elements generated by React components before any changes are made to the page. It's a step that happens between the render function being called and the displaying of elements on the screen.

Q. Difference between DOM and virtual DOM?
A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing's power to directly change what's on the screen. Manipulating the DOM is slow. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen. 

* this.setState((prevState, prevProps) => {
	return {meaningOfLife: prevState.meaningOfLife + 1}
},
 () => console.log(this.state.meaningOfLife)
)  

This is the best practice to update the states in REACT

* this.setState() function in any component is asynchronous or is called after the completion of the function that it was called in.

**Async Await**

It is a way to write functions that contain promise oriented or asynchronous code that looks synchronous .

* The word “async” before a function means one simple thing: a function always returns a promise.
* The keyword await makes JavaScript wait until that promise settles and returns its result.

* For error handling in async await we have to use try and catch block:-
try{
....
}catch(err){
.....
}

###### React Lifecycle Methods:-

1. Ternary Operator:-

ifcondition ? exprIfTrue : exprIfFalse

**Parameters**

1. condition
An expression whose value is used as a condition.

2. exprIfTrue
An expression which is evaluated if the condition evaluates to a truthy value (one which equals or can be converted to true).

3. exprIfFalse
An expression which is executed if the condition is falsy (that is, has a value which can be converted to false).


2. Mounting:- 
The name is self-explanatory. Mounting is the phase in which our React component mounts on the DOM (i.e., is created and inserted into the DOM).

componentDidMount()

This method is called after the component gets mounted on the DOM. It is called once in a lifecycle. Before the execution of this method, the render method is called (i.e., we can access the DOM). We can make API calls and update the state with the API response.
componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.

3. Updating:- 
componentDidUpdate()

Syntax:- componentDidUpdate(prevProps, prevState, snapshot)

componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render.


4. Unmounting:-

componentWillUnmount()

componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

You should not call setState() in componentWillUnmount() because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.

> Functional components are the best type of component to render if you don't need access to state or lifecycle methods! It has benefits of being easy to test, easier to read, and easier to write!


