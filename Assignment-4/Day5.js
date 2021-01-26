// Question-1

// There are 5 ways we can access elements in DOM. They are below as follows:

// This element returns the specified tag name element.
// Here, it returns a collection of items mathes tag name h1 element.
// Since here we have only one h1 tag element so it returns,
// HTMLCollection [h1] 
var tagName = document.getElementsByTagName("h1");
console.log(tagName);

// This element returns the specified class name element.
// This element is similar to tag name except here we use class name and the value given to class in our HTML file.
// Since here we have used div tag and gave class name as selectors so it returns,
// HTMLCollection [div.selectors]
var className = document.getElementsByClassName("selectors");
console.log(className);

// Here, the selection is based on id name.
// Similar to class name & tag name, but the difference is here we used id name and gave the value to id in out HTML file.
// Since here we have used div tag and gave id name as element so it returns,
// <div id="element">getElementById()</div>
var idName = document.getElementById("element");
console.log(idName);

// This returns the first element that matches the tagname or the attribute which we want.
// Here, it returns the first element that matches the div tag name. 
// Remaining elements are ignored, so it returns,
// <div>getElementsByTagName()</div>
var query = document.querySelector("div");
console.log(query);

// Here, it returns the first element that matches the id -> #item . 
// Remaining elements are ignored, so it returns,
//<div id="item">querySelector()</div>
var query = document.querySelector(".selectors");
console.log(query);

// This returns all the elements that match the class name or id name.
// Here, it returns a list of all elements that contain id -> #item.
var query = document.querySelectorAll("#item");
console.log(query);


// Question-2

function add() {
        var a, b, c;
        a = Number(document.getElementById("firstNum").value);
        b = Number(document.getElementById("secondNum").value);
        c = a + b;
        document.getElementById("result").value = c;
}