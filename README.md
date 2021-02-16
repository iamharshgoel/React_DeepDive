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
