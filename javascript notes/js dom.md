# js dom?
- dom stans for document object model
- DOM is a programing interface for web documents.
- it represents the struture of an HTML or XML documents as tree of objects that can be manioulated using javascript
- it represents the page of thst parograms can change the document structure,and style and ocntent.
- A web page is a documeny that can be displayes eiher browserr or as the html source.
## DOM structure:
- the DOM represents an HTML as  ahierarchical tree where
- each HTML element is a node.
- the entore document is the **root node**
- elelment contains **child nodes**
## key conacpets of DOM:
### tree structure: 
- the dom represents an HTML or XML documents as a tree of nodes. each element , attribute, or piece of text in the document is represented as a node.
### nodes:
- **element node**: represents an HTML elements such as **div**, **p** or **button**
- **text node**:
- represents the text content inside an element.
- **Attribute node**: represents attributes like **class**, **id**, or **src**
-**document node**: represents the entire documentn itself
## Accessing the DOM:
- javascript provides methods to access and manipulate the DOM. the most comon entry point in the **document** object.
- examples:
- **selecting elements**:
- / By ID
- const elementById = document.getElementById("myElement");

- // By class name
- const elementsByClassName = document.getElementsByClassName("myClass");

- // By tag name
- const elementsByTagName = document.getElementsByTagName("div");

- // By CSS selector
- const singleElement = document.querySelector(".myClass");
- const multipleElements = document.querySelectorAll(".myClass");

- **manipulating elements**:
- const element = document.getElementById("myElement");

- // Change content
element.textContent = "New Content";

- // Change HTML
element.innerHTML = "<b>Bold Text</b>";

- // Change styles
element.style.color = "red";

- // Add a class
element.classList.add("newClass");

- // Remove a class
element.classList.remove("oldClass");

- **event handling**:
- const button = document.querySelector("button");

-button.addEventListener("click", () => {

  alert("Button clicked!");

});

## Traversing DOM:
- you can navigate between nodes using properties.
- **parenthesis**, **childnodes**,**firstchild**,**lastchild**
- **nextsibling**, **previoussibling**.
## creating and removing elements:
### create:
- const newDiv = document.createElement("div");

  newDiv.textContent = "Hello, World!";

  document.body.appendChild(newDiv);
### Remove:
- const elementToRemove = document.getElementById("removeMe");
 
  elementToRemove.remove();

## DOM methods summary:
- |method                    | description             |
  |--------------------------|-------------------------|
  |getElementById()          | select elements by its ID|
  |getElementsByClassName(class)  |selects elements by class name |
  | getElementsBytagName(tag)  |  selects elements by tag name |
  | querySelector(selector)   | select the first matching element|
  |querySelectorAll(selector)  | selects all mathcing elements |
  | createElement(tagName)    | creates a new element|
  |appendChild(node)   |  appends a child node to a parent node |
  |removeChild(node)    |  Removes a child node from a parent node|


  ### events
  - mouse events
  - keyboard events
  - form events
  - window events

  #### mouse events:
  - click
  - db click
  - mousedown
  - nouseup
  - mouse over
  - mouse out

  ### keyboard vents:
  - key down wvwnts
  - key press
  - key up




  ### form events:
- submit
- reset
- change
- focus
- blur


### window events:
- window load
- resize
- scroll
- unload







  




