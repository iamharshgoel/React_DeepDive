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

class func_Name extends Component{......}

* State is a javascript object with properties that we can access at any point inside of our class.


