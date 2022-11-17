### JavaScript base:

```typescript
// Function as parameter: ---------------------
var arr = ['aaa','bbb','ccc'];

function arrModify(arr, fn){
  var arrNew = [];
  for(var i=0;i<arr.length;i++){
    arrNew.push(fn(arr[i]));
  }
  return arrNew;
}

function toUp(x){
  return x.toUpperCase();
}

var rez = arrModify(arr, toUp);

// Function as parameter (Closures): ---------------------
function createRepeater(countNum) {
  var insideDelimiter = '-';
  return function (charToRepeat) {
    console.log( // Array Filled and Joined to single String:
      Array(countNum).fill(charToRepeat).join(insideDelimiter));
  }
}
var sevenRepeaterFor = createRepeater(7);
sevenRepeaterFor('A');
createRepeater(5)('B');
// insideDelimiter - is still accessible here!
// ...

// CALL, APPLY, BIND : -------------------------------------
      var objA = {
        name: 'Alex',
        age: 35,
        oaFunc: function (greeting, mark) {
          console.log(
            greeting + mark +' My name is ' + this.name + '. I\'am ' + this.age);
        }
      };
      var objB = {
        name: 'Sandra',
        age: 22
      }
      objA.oaFunc('hi all', '!');
      objA.oaFunc.call(objB, 'whats up', '?');
      objA.oaFunc.apply(objB, ['hello', '!']); // params as array
      // BIND generates the copy of a function!

// --------------------------------------------------------
// Include Html as part of another.
// using:  -  <div include-html="a-content.html"></div>
//            <script>includeHTML();</script>
function includeHTML() {
      var z, i, elmnt, file, xhttp;
      /* Loop through a collection of all HTML elements: */
      z = document.getElementsByTagName("*");
      for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            /*search for elements with a certain atrribute:*/
            file = elmnt.getAttribute("include-html");
            if (file) {
                  /* Make an HTTP request using the attribute value as the file name: */
                  xhttp = new XMLHttpRequest();
                  xhttp.onreadystatechange = function () {
                        if (this.readyState == 4) {
                              if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                              if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                              /* Remove the attribute, and call this function once more: */
                              elmnt.removeAttribute("include-html");
                              includeHTML();
                        }
                  }
                  xhttp.open("GET", file, true);
                  xhttp.send();
                  /* Exit the function: */
                  return;
            }
      }
}
```