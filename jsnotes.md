# 🚀 JavaScript Introduction

---

## 🖼️ Reference Images

### 📊 JavaScript Overview
![JavaScript](https://d2dkqamqz2k831.cloudfront.net/posts/338-1733217432633.jpg)

### ⚙️ V8 Engine
![V8 Engine](https://media.licdn.com/dms/image/v2/D5612AQEbPzlyk2oaSw/article-cover_image-shrink_720_1280/B56Zi6nHLHHUAI-/0/1755477494480?e=2147483647&v=beta&t=m0nKYCtrO9ytXBhPxTxgoigei0ErZ0oAn1EyeoiG32Q)

### 🌳 DOM Tree Structure
![DOM Tree](https://www.tutorialspoint.com/html/images/html_dom.jpg)

---

## 🔗 Useful Links

- 🌐 Electron.js Official: https://www.electronjs.org/

---

# 📜 Origin of JavaScript (1995)

JavaScript was created in **1995** by **Brendan Eich** while working at Netscape.

- Developed in just **10 days**
- Initially called:
  - **LiveScript**
- Later renamed to:
  - **JavaScript** (to match Java’s popularity)

---

## 🎯 Purpose of JavaScript

👉 To make web pages **interactive**

Before JavaScript:
- Web pages were **static**
- No dynamic behavior or user interaction

---

## 💡 Simple Example

```html
<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Example</title>
</head>
<body>

<h1 id="demo">Hello</h1>

<button onclick="changeText()">Click Me</button>

<script>
function changeText() {
  document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
</script>

</body>
</html>

With **JavaScript (JS)**, you can build almost anything in modern software development. It’s no longer just for simple web pages — it’s a **full-stack language**.

---

## 🌐 1. Web Applications (Frontend)

You can build interactive user interfaces that run in the browser.

👉 Examples:

* Forms, dashboards, admin panels
* Single Page Applications (SPA)

👉 Popular tools:

* React
* Angular
* Vue.js

---

## 🖥️ 2. Backend Applications (Server-side)

Using JavaScript on the server, you can build APIs and handle business logic.

👉 Runtime:

* Node.js

👉 What you can build:

* REST APIs
* Authentication systems
* Database-driven apps

---

## 📱 3. Mobile Apps

You can create Android & iOS apps using JavaScript.

👉 Frameworks:

* React Native
* Ionic

---

## 💻 4. Desktop Applications

Build cross-platform desktop apps.

👉 Tools:

* Electron

👉 Apps built using JS:

* Visual Studio Code
* Slack

---

## 🎮 5. Games

You can create browser-based and even 2D/3D games.

👉 Libraries:

* Phaser
* Three.js


Simple Understanding

👉 Learning JS features means:

Writing better code
Building real-world apps
Cracking interviews
Becoming a full-stack developer



## ☁️ 6. Real-time Applications

Apps that update instantly without refresh.

👉 Examples:

* Chat apps
* Live tracking apps
* Online collaboration tools

---

## 🤖 7. AI & Machine Learning (Basic Level)

JavaScript can also be used for AI in the browser.

👉 Libraries:

* TensorFlow.js

---

## 🌍 8. Progressive Web Apps (PWA)

Apps that behave like mobile apps but run in the browser.

👉 Features:

* Offline support
* Push notifications

---

## 🧠 Simple Understanding

👉 With JavaScript, you can build:

* Frontend (UI)
* Backend (Server)
* Mobile apps
* Desktop apps
* Games
* Real-time systems


---
The difference between ECMAScript and JavaScript:

Core Idea
👉 ECMAScript = Standard (rules)
👉 JavaScript = Implementation (actual language you use)


===========================================================

How to Run js 

## 🔹 Script Tag

```html
<script>
  alert("Hello World");
</script>
```

OR external file:

```html
<script src="script.js"></script>
```



# 🟢 JavaScript Keywords: let and `const`

## 📖 1) `let` Keyword

### ✅ Description:

* Used to declare variables
* Value **can be changed (reassigned)**
* Block scope (works inside `{ }`)

### 💻 Simple Program:
```html
let n = 10;
let m = 13;

console.log("Sum:", n + m);

// changing value
n = 20;
console.log("Updated n:", n);
```

### 🎯 Output:

```
Sum: 23
Updated n: 20
```

---

## 🔵 2) `const` Keyword

### ✅ Description:

* Used to declare variables
* Value **cannot be changed (constant)**
* Must assign value at declaration

---

## 💻 Simple Program:

```html
const name = "anbu";

let msg = "My name is " + name + ". I am a web developer";

console.log(msg);
```


---

## 🟡 3) Multiple Variables Example

```html
const name1 = "anu";
let name2 = "vijay";

let msg2 = "My name is " + name1 + 
           ". My friend name is " + name2;

console.log(msg2);
```

---

## 🔥 4) Best Practice (Modern Way ⭐)

Use **template literals** (recommended)

```html
const name1 = "sri";
let name2 = "kumar";

let msg = `My name is ${name1}. My friend name is ${name2}`;

console.log(msg);
```

# 🔵 JavaScript Data Types

## 📖 Description

Data types define the **type of value stored in a variable**.

👉 JavaScript has **2 main types**:

1. **Primitive Data Types**
2. **Non-Primitive Data Types**

---

## 🟢 1) Primitive Data Types

These store **single/simple values**

### Types:

* String → `"Mani"`
* Number → `24`
* Boolean → `true / false`
* Undefined → variable declared but no value
* Null → empty value

---

## 🔶 Program (Primitive Types)

```html
const name = "Mani";   // String
var num = 24;           // Number

let isStudent = true;   // Boolean
let un = undefined;     // Undefined
let n = null;           // Null

// updating values
n = 12;
un = 34;

// message
let msg = "My name is " + name + 
          ", my age is " + num + 
          ", student: " + isStudent + 
          ", un: " + un + 
          ", n: " + n;

console.log(msg);
```

---

## 🟡 2) Non-Primitive Data Types

These store **multiple or complex values**

### Types:

* Object → key-value pair
* Array → list of values

---

## 🔶 Program (Non-Primitive Types)

```html
// Object
let user = {
  name: "Banu",
  age: 24
};

// Array
let marks = [80, 70, 90];

console.log(user);
console.log(marks);
```

---

## 🔥 3) Modern Way (Better ⭐)

Use **template literals** instead of `+`

```html
const name = "saru";
let num = 24;
let isStudent = true;

let msg = `My name is ${name}, my age is ${num}, student: ${isStudent}`;

console.log(msg);
```


# 🟤 JavaScript Objects

## 📖 Description

An **object** stores data in **key–value pairs**.

👉 Example:

```html
let person = {
  name: "kavya",
  age: 16,
  gender: "male",
  address: "rajapalayam"
};
```

---

# 🔵 Updating Object Values

```html
person.age = 26;
console.log(person.age); // 26
```

---

# 🟢 Dot Notation (`.`)

## 📖 Description

* Used to access object properties using **dot (`.`)**
* Simple and commonly used

### 💻 Program:

```html
console.log(person.name);
console.log(person.name, person.age, person.gender, person.address);
```

👉 Output:

```
kavya
kavya 26 male rajapalayam
```

---

# 🟡 Bracket Notation (`[]`)

## 📖 Description

* Used to access properties using **string inside []**
* Useful when:

  * Property name is dynamic
  * Property has spaces

### 💻 Program:

```html
person.address = "rajapalayam";

console.log(person["address"]);
```

👉 Output:

```
rajapalayam;
```

---

# 🟣 Dynamic Example (Real Use 🔥)

```html
let key = "name";

console.log(person[key]);   // Mani
// console.log(person.key); ❌ wrong
```

👉 This is why **bracket notation is powerful**

---

# 🔶 Nested Object (Multiple Objects)

### 💻 Program:

```html
let person = {
  name: "sudar",
  age: 16,
  siblings: {
    brother: {
      b1: "vijay"
    },
    sisters: {
      s1: "gayu"
    }
  }
};

console.log(person.siblings.brother.b1);
```

👉 Output:

```
vijay
```

---

# 🌍 Real-World Usage (Very Important 🔥)

## 🧠 Where Dot Notation is used:

* API responses
* UI data access
* Simple object handling


Here’s your **JavaScript Class & Object content (clean, corrected, seminar-ready)** with explanation and simple programs 👇

---

# 🟣 JavaScript Classes & Objects

## 📖 What is an Object?

* An **object** is a real-world entity
* It contains **properties (data)** and **methods (functions)**

👉 Example:
Student → name, age, city

---

## 📖 What is a Class?

* A **class** is a **blueprint/template** to create objects
* Introduced in modern JavaScript (ES6)

👉 Example:
Class = Design
Object = Real instance

---

# 🟢 Your Example (Corrected)

### 💻 Program:

```html
class Student {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  display() {
    let msg = `My name is ${this.name}, age is ${this.age}, living in ${this.city}`;
    console.log(msg);
  }
}

// creating objects
let sudar = new Student("anbu", 16, "rajapalayam");
sudar.display();

let sudar1 = new Student("mani", 35, "rajai");
sudar1.display();
```

---


# 🌍 Real-World Usage

Classes are used in:

* Web apps (user, product, order)
* Backend models
* Frameworks like:

  * React
  * Angular

---

# 🔥 Key Concepts

* Class → blueprint
* Object → instance
* Constructor → initialize values
* `this` → current object

---

# 🎯 Simple Conclusion

👉 Class = Design
👉 Object = Real data



# 🟢 1) Arrow Function & `find()` Method

## 📖 Description

* Arrow function → short function syntax
* `find()` → returns **first matching element**

### 💻 Program:

```js
const order = [
  { id: 1, food: "idly", quality: "good" },
  { id: 2, food: "uppuma", quality: "normal" },
];

let result = order.find(value => value.food === "idly");

console.log(result);
```

---

# 🔵 2) `filter()` Method

## 📖 Description

* Returns **all matching elements**

### 💻 Program:

```html
const age = [13, 45, 67];

let result = age.filter(value => value > 56);

console.log(result);
```

### 💻 Object Example:

```html
const age1 = [
  { id: 1, item: "android", quality: 23 },
  { id: 2, item: "iphone", quality: 56 },
  { id: 3, item: "tv", quality: 100 },
  { id: 4, item: "android latest", quality: 55 },
];

let result = age1.filter(value => value.quality >= 78);

console.log(result);
```

---

# 🟡 3) `find()` vs `filter()`

## 📖 Description

* `find()` → returns **first match**
* `filter()` → returns **all matches**

### 💻 Program:

```html
const items = [
  { id: 1, item: "android", quality: 23 },
  { id: 2, item: "iphone", quality: 56 },
  { id: 3, item: "tv", quality: 100 },
  { id: 4, item: "android latest", quality: 55 },
];

let result = items.filter(value => value.quality > 32);
console.log(result);

let result1 = items.find(value => value.quality >= 32);
console.log(result1);
```

---

# 🟣 4) `map()` Method

## 📖 Description

* Used to **transform data**

### 💻 Program:

```html
const number = [10, 20, 30];

let result = number.map(value => value * 9);

console.log(result);
```

### 💻 Object Example:

```html
const items = [
  { id: 1, item: "android", quality: 23 },
  { id: 2, item: "iphone", quality: 56 },
];

let result = items.map(value => {
  return { name: value.item, quality: value.quality };
});

console.log(result);
```

---

# 🔥 5) Method Chaining

## 📖 Description

* Combining multiple methods (`sort + filter + map`)

### 💻 Program:

```html
const product = [
  { id: 1, item: "android", quality: 23, price: 12000 },
  { id: 2, item: "iphone", quality: 56, price: 53000 },
  { id: 3, item: "tv", quality: 10, price: 45035 },
  { id: 4, item: "Androidlate", quality: 55, price: 11238 },
];

let result = product
  .sort((a, b) => a.price - b.price)
  .filter(value => value.price < 50000)
  .map(value => value.item + " - " + value.price);

console.log(result);
```
---

#  reduce()` with Objects

### 💻 Program:

```html
const food = [
  { id: 1, food: "idly", price: 24 },
  { id: 2, food: "uppuma", price: 12 },
];

let total = food.reduce((prev, curr) => prev + curr.price, 0);

console.log(total);
```


# 🎯 Final Conclusion

* `find()` → first match
* `filter()` → all matches
* `map()` → transform
* `reduce()` → single value
* chaining → powerful combination


# 🟢 Function Declaration vs Function Expression

## 📖 Description

JavaScript functions can be created in different ways:

1. Function Declaration
2. Function Expression
3. Anonymous Function
4. Arrow Function

---

# 🔵 1) Function Declaration

## 📖 Description

* Defined using `function` keyword
* **Can be called before declaration** (hoisting)

### 💻 Program:

```html
let num1 = 2;
let num2 = 4;

function add() {
  let num3 = num1 + num2;
  console.log(num3);
}

add();
```

👉 Output: `6`

---

# 🟡 2) Function Expression (Named)

## 📖 Description

* Function stored inside a variable
* Cannot call before definition

### 💻 Program:

```html
let num1 = 2;
let num2 = 4;

let add = function add() {
  let num3 = num1 + num2;
  console.log(num3);
};

add();
```

---

# 🟣 3) Anonymous Function

## 📖 Description

* Function without a name
* Mostly used in expressions

### 💻 Program:

```html
let num1 = 2;
let num2 = 4;

let add = function () {
  let num3 = num1 + num2;
  console.log(num3);
};

add();

console.log(add); // shows function definition
```

---

# 🔶 4) Arrow Function

## 📖 Description

* Short syntax (ES6)
* Common in modern JavaScript

### 💻 Program:

```html
let num1 = 2;
let num2 = 4;

const addNo = () => {
  let num3 = num1 + num2;
  console.log(num3);
};

addNo();
```




# 🎤 ES6 Concepts  Content

---

# 🟣 1) Spread Operator (`...`)

## 📖 Description

* Used to **copy or expand** arrays and objects
* Helps avoid modifying original data

## 💻 Example:

```html
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4];

console.log(arr2); // [1,2,3,4]
```

## 🎯 Use Case

* Copy objects
* Merge arrays
* Used in React state updates

---

# 🟢 2) Rest Operator (`...`)

## 📖 Description

* Used to **collect multiple values into one variable**

## 💻 Example:

```html
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

## 🎯 Use Case

* Functions with unknown number of arguments

---

# 🔵 3) Default Parameters

## 📖 Description

* Assign **default values** to function parameters

## 💻 Example:

```html
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet(); // Hello Guest
```

## 🎯 Use Case

* Avoid undefined values

---

# 🟡 4) Modules (import/export)

## 📖 Description

* Split code into multiple files
* Improves code organization

## 💻 Example:

### file1.js

```html
export const name = "sudar";
```

### file2.js

```html
import { name } from "./file1.js";
console.log(name);
```

## 🎯 Use Case

* Large applications
* Reusable code

---

# 🟠 5) Destructuring

## 📖 Description

* Extract values from arrays/objects easily

## 💻 Example:

```html
let user = { name: "ram", age: 20 };

let { name, age } = user;

console.log(name, age);
```

## 🎯 Use Case

* Clean and short code
* Used in APIs and frameworks

---

# 🔴 6) Promises

## 📖 Description

* Handle **asynchronous operations**
* Avoid callback problems

## 💻 Example:

```html
let promise = new Promise((resolve, reject) => {
  resolve("Success");
});

promise.then(result => console.log(result));
```

## 🎯 Use Case

* API calls
* Data fetching




# 🎤 BOM vs DOM in JavaScript

---

# 🟢 1) DOM (Document Object Model)

## 📖 Description

* DOM represents the **HTML document as a tree structure**
* It allows JavaScript to **access and modify web page content**

👉 Browser converts HTML → DOM Tree

---

## 🌳 DOM Structure

```
Document
 └── html
      ├── head
      └── body
           ├── h1
           └── p
```

---

## 🔑 Types of DOM

1. **Document Node** → entire page
2. **Element Node** → HTML tags (`<div>`, `<p>`)
3. **Text Node** → text inside elements
4. **Attribute Node** → attributes like `id`, `class`

---

## 💻 DOM Example

```html
let title = document.getElementById("heading");

title.innerHTML = "Hello JavaScript";
```

---

## 🎯 Uses of DOM

* Change content dynamically
* Handle events (click, input)
* Add/remove elements
* Build interactive UI

👉 Example:

* Form validation
* Dynamic data display

---

# 🔵 2) BOM (Browser Object Model)

## 📖 Description

* BOM allows JavaScript to **interact with the browser**
* Not related to HTML structure

---

## 🔑 Types of BOM Objects

1. `window` → main browser object
2. `navigator` → browser info
3. `location` → URL info
4. `history` → browser history
5. `screen` → screen details

---

## 💻 BOM Example

```html
console.log(window.innerWidth);

alert("Welcome!");

console.log(navigator.userAgent);
```

---

## 🎯 Uses of BOM

* Get browser information
* Redirect pages
* Show alerts/popups
* Manage browser history

👉 Example:

```html
location.href = "https://google.com";
```

---

# 🔥 DOM vs BOM (Important Difference)

| Feature   | DOM                         | BOM                  |
| --------- | --------------------------- | -------------------- |
| Full Form | Document Object Model       | Browser Object Model |
| Works on  | HTML page                   | Browser window       |
| Purpose   | Manipulate content          | Control browser      |
| Example   | `document.getElementById()` | `window.alert()`     |

---

# 🧠 Simple Understanding

👉 DOM = **Web Page Control**
👉 BOM = **Browser Control**

---

# 🎯 Final Conclusion

* DOM → used for UI and page interaction
* BOM → used for browser-level operations

---

# 💡 Real-Time Usage

* DOM → Forms, buttons, dynamic UI
* BOM → Redirect, alert, browser info


# 🎤 DOM Selectors & Event Handling

---

# 🟢 1) Types of DOM Selectors

## 📖 Description

DOM selectors are used to **access HTML elements** using JavaScript.

---

## 🔵 a) `getElementById()`

### 📖 Description

* Selects **one element** using `id`
* `id` must be unique

### 💻 Example:

```html
<h1 id="p">H1 tag</h1>
<button onclick="change()">Click</button>

<script>
function change() {
  var v = document.getElementById("p");
  v.style.color = "red";
  v.style.background = "black";
  v.innerHTML = "Mani is a good boy";
}
</script>
```

👉 Used when targeting **single element**

---

## 🟡 b) `getElementsByClassName()`

### 📖 Description

* Selects **multiple elements** using class
* Returns a collection (array-like)

### 💻 Example:

```html 
<h1 class="demo">addition</h1>
<h1 class="demo">subtraction</h1>

<button onclick="change()">Click</button>

<script>
function change() {
  var v = document.getElementsByClassName("demo");

  for (var i = 0; i < v.length; i++) {
    v[i].style.background = "red";
    v[i].style.color = "white";
  }
}
</script>
```

👉 Used when handling **multiple elements**

---

## 🟣 c) `src` Attribute (Image Change)

### 📖 Description

* Used to **change image dynamically**

### 💻 Example:

```html 
<img id="img" src="img1.jpg" width="200">

<button onclick="changeImg()">Click</button>

<script>
function changeImg() {
  document.getElementById("img").src = "img2.jpg";
}
</script>
```

👉 Used in image sliders, galleries

---

## 🔶 d) `innerHTML`, `innerText`, `textContent`

### 📖 Description

* `innerHTML` → gets HTML content
* `innerText` → visible text only
* `textContent` → full text (including hidden)

### 💻 Example:

```html 
<h1 id="in">Hello <strong>World</strong></h1>

<button onclick="show()">Click</button>

<script>
function show() {
  var v = document.getElementById("in");

  console.log(v.innerHTML);   // Hello <strong>World</strong>
  console.log(v.innerText);   // Hello World
  console.log(v.textContent); // Hello World
}
</script>
```

---

# 🔥 2) Event Handling

## 📖 Description

Events are **actions performed by user**

👉 Examples:

* Click
* Hover
* Input

---

## 🟢 Types of Event Handling

### 1) Inline Event
```html

<button id="btn">Click</button>

<script>
let btn = document.getElementById("btn");

btn.onclick = function() {
  alert("Button clicked using DOM property!");
};
</script>

```
👉 Simple but not recommended for large apps

---

### 2) Event Listener (Best Practice ⭐)

## 📖 Description

* Attach event using JavaScript
* Cleaner and scalable

### 💻 Example:

```html 
<button id="btn">Click</button>

<script>
document.getElementById("btn").addEventListener("click", function() {
  alert("Button clicked!");
});
</script>
```

---

# 🧠 Why Event Listener is Important

* Can add multiple events
* Cleaner code
* Used in real projects (React, Angular)

---

# 🔄 Common Events

| Event     | Description  |
| --------- | ------------ |
| click     | Button click |
| mouseover | Mouse hover  |
| keydown   | Key press    |
| submit    | Form submit  |





# 🎤 Browser Object Model (BOM)

## 📖 Description

BOM allows JavaScript to **interact with the browser (not HTML)**.

👉 It controls:

* Browser window
* URL
* History
* Screen
* User information

---

# 🟢 Main BOM Objects (Types)

---

## 🔵 1) `window` Object

### 📖 Description

* Root object of BOM
* Represents browser window

### 💻 Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Window Size</title>
</head>
<body>

<h1 id="h1"></h1>

<script>
  var h = window.innerHeight;
  var w = window.innerWidth;

  document.getElementById("h1").innerHTML =
    "Height: " + h + " Width: " + w;
</script>

</body>
</html>
```

### 🎯 Use

* Get screen size
* Open/close window

---

## 🟡 2) `window.open()` & `window.close()`

### 💻 Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Open and Close Window</title>
</head>
<body>

<button onclick="op()">Open Google</button>
<button onclick="oc()">Close Window</button>

<script>
  let newWin;

  function op() {
    newWin = window.open("https://www.google.com", "_blank");
  }

  function oc() {
    if (newWin) {
      newWin.close();
    } else {
      alert("No window opened!");
    }
  }
</script>

</body>
</html>
```

👉 Fix: store reference in variable

---

## 🟣 3) `screen` Object

### 📖 Description

* Provides screen information

### 💻 Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Screen Info</title>
</head>
<body>

<h2>Screen Information</h2>
<p id="p1"></p>

<button onclick="on()">Show Screen Info</button>

<script>
function on() {
  let info = 
    "Height: " + screen.height +
    " Width: " + screen.width +
    " Available Height: " + screen.availHeight +
    " Available Width: " + screen.availWidth;

  document.getElementById("p1").innerHTML = info;
}
</script>

</body>
</html>
```

---

## 🔶 4) `location` Object

### 📖 Description

* Gives URL information

### 💻 Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Location Object</title>
</head>
<body>

<h2>Location Information</h2>
<p id="p1"></p>

<button onclick="on()">Show Location Info</button>

<script>
function on() {
  let info =
    location.href + "<br>" +
    location.hostname + "<br>" +
    location.pathname;

  document.getElementById("p1").innerHTML = info;
}
</script>

</body>
</html>
```

---

## 🔷 5) `history` Object

### 📖 Description

* Controls browser navigation

### 💻 Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>History Object</title>
</head>
<body>

<h2>Browser Navigation</h2>

<button onclick="back()">Go Back</button>
<button onclick="forward()">Go Forward</button>

<script>
function back() {
  history.back();
}

function forward() {
  history.forward();
}
</script>

</body>
</html>
```

---

## ⚫ 6) `navigator` Object

### 📖 Description

* Provides browser/user details

### 💻 Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Navigator Object</title>
</head>
<body>

<h2>Navigator Information</h2>
<h1 id="h1"></h1>

<script>
  document.getElementById("h1").innerHTML =
    navigator.userAgent + "<br>" +
    navigator.language + "<br>" +
    navigator.onLine;
</script>

</body>
</html>
```

---

## 🔥 7) Dialog Boxes

### 📖 Types:

* `alert()` → show message
* `confirm()` → OK/Cancel
* `prompt()` → input

### 💻 Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Prompt Example</title>
</head>
<body>

<h2>User Greeting</h2>
<p id="p1"></p>

<button onclick="on()">Enter Name</button>

<script>
function on() {
  let name = prompt("Enter your name");

  if (name) {
    document.getElementById("p1").innerHTML =
      "Hi " + name + " welcome!";
  } else {
    document.getElementById("p1").innerHTML =
      "No name entered";
  }
}
</script>

</body>
</html>
```

---

## ⏱️ 8) Timing Events

---

### 🟢 a) `setInterval()`

```html
<!DOCTYPE html>
<html>
<head>
  <title>Digital Clock</title>
</head>
<body>

<h2>Live Time</h2>
<h1 id="h1"></h1>

<button onclick="stop1()">Stop Clock</button>

<script>
let t = setInterval(showTime, 1000);

function showTime() {
  document.getElementById("h1").innerHTML =
    new Date().toLocaleTimeString();
}

function stop1() {
  clearInterval(t);
}
</script>

</body>
</html>
```

---

### 🔵 b) `setTimeout()`

```html
<!DOCTYPE html>
<html>
<head>
  <title>setTimeout Example</title>
</head>
<body>

<h2>Show Date After 1 Second</h2>
<h1 id="h1"></h1>

<button onclick="off()">Cancel Timeout</button>

<script>
let t = setTimeout(fun, 1000);

function fun() {
  document.getElementById("h1").innerHTML =
    new Date();
}

function off() {
  clearTimeout(t);
}
</script>

</body>
</html>
```

---

# 🎯 Uses of BOM

* Open/close browser windows
* Redirect pages
* Show alerts
* Get browser/device info
* Create timers

---

# 🔥 Final Summary

| Object                 | Use                  |
| ---------------------- | -------------------- |
| window                 | Main browser control |
| screen                 | Screen details       |
| location               | URL info             |
| history                | Navigation           |
| navigator              | Browser info         |
| alert/confirm/prompt   | User interaction     |
| setTimeout/setInterval | Timing               |

---

# 💡 Easy Understanding

👉 BOM = **Control the browser**
👉 DOM = **Control the webpage**








