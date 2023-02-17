### JavaScript basics:
-----------------------------------------------
#### Standard ECMA-262 (1999):
https://www.ecma-international.org/wp-content/uploads/ECMA-262_3rd_edition_december_1999.pdf

#### HTML input with only Numbers allowed.
```ts
<input type="text" id="salary" name="salary" 
    oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" />
```

#### Array.splice(idx, remove, insert)
```typescript
var myObj = function (id, name) {
    this.Id = id;
    this.name = name;
}
var myArr = new Array();
// Fill Array with myObjects:
for (var i = 0; i < 3; i++) {
    myArr.push(new myObj(i, 'A' + i + i));
}
console.log(myArr[2]); // { id: 2, name: "A22" }

// SPLICE into Array:
myArr.splice(2, 0, new myObj(77, 'B77'));
console.log(myArr[2]); // { id: 77, name: "B77" }

// Get IDs of myObjects by MAP():
var objIds = myArr.map(function (item) {
    return item.Id;
});
console.log(objIds); // [ 0, 1, 77, 2 ]

// ... and than - Find myObj by Id:
console.log('Obj.Id=77 is -> myArray[', objIds.indexOf(77), ']')

// OR just FIND(elem, [idx, arr]);
console.log(myArr.find((elem) => elem.Id === 77));
```

#### someArray.reduce(someFunc) - Subtract the numbers in the array:
```typescript
var myArrReducer = function (buffer, n, idx, arr) {
    // init : buffer = arr[0];
    return buffer + n;
}
var myArr = [1, 2, 3, 4, 5];
var summary = myArr.reduce(myArrReducer);
console.log(summary); // 15
```

#### Function as a parameter:
```typescript
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
```

#### Function as parameter (Closures):
```typescript

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
```

#### CALL, APPLY, BIND :
```typescript
var objAlex = {
  name: 'Alex',
  age: 35,
  alexFunc: function (a, b) {
    console.log(
      a + b + ' My name is ' + this.name + '. I\'am ' + this.age);
  }
};
var objNika = {
  name: 'Nika',
  age: 22
}
objAlex.alexFunc('hi all', '!');
objAlex.alexFunc.call(objNika, 'whats up', '?');
objAlex.alexFunc.apply(objNika, ['hello', '!']); // params as array
// BIND generates the copy of a function with ability to store params!
var objNikaFirstParam = 
  objAlex.alexFunc.bind(objNika, 'hi'); // A param.
  
objNikaFirstParam('$'); // B only needed.
```

#### Events:
```typescript
document.addEventListener('keypress', function (event) {
  if (event.keyCode === 13 || event.witch === 13) {
    alert('ENTER was pressed!')
  }
});
```

#### Event Bubbling
```typescript
<div id="Target">
    <p>
        <input id="childInput" type="text">
    </p>
</div>

document.querySelector('#childInput').addEventListener('click', theChildClick);

var theChildClick = function (event) {
  // 'parentNode' TWICE included! (like xml) 
  console.log(event.target.parentNode.parentNode.id);
  // Target will removed with ALL Childs!
  event.target.parentNode.parentNode.remove();
}
```

#### App Modules:
```typescript
var logicController = (function () {
    // Constructor:
    var myObj = function (name) {
        this.name = name;
        this.time = (new Date()).toLocaleTimeString();
    }
    return {
        generateMyObj: function (dd) {
            return new myObj(dd);
        }
    }
})();

var uiController = (function () {
    var DOMnames = {
        myButton: '#myBtn',
        myInput: '#myInp',
        myDiv: '#myDiv'
    }
    return {
        insertToMyDiv: function (myObj) {
            var mySrc, htmlTempl, finalHtml;
            htmlTempl = '<div class="c1 c2"><b>%NAME%</b> - %TIME%.</div> <hr/>';
            finalHtml = htmlTempl.replace('%NAME%', myObj.name).replace('%TIME%', myObj.time);
            mySrc = document.querySelector(DOMnames.myDiv);
            mySrc.insertAdjacentHTML('beforeend', finalHtml);
        },
        getDOMnames: function () {
            return DOMnames;
        },
        getInputValue: function () {
            return {
                inpData: document.querySelector(DOMnames.myInput).value
            }
        }
    }
})();

var controller = (function (logic, ui) {
    // Private members:
    var internalStore = {
        rec1: [],
        rec2: []
    };
    var insertGeneratedData = function () {
        var inputData = ui.getInputValue();
        var newData = logic.generateMyObj(inputData.inpData);
        ui.insertToMyDiv(newData);
        // additional save:
        internalStore['rec1'].push(newData.name);
        console.log(internalStore['rec1']);
    };
    var processInputs = function () {
        var fields, fieldsArr;
        fields = document.querySelectorAll('.c1, c2');
        // fields.slice(); - TypeError: slice is not a on! so:
        fieldsArr = Array.prototype.slice.call(fields);
        fieldsArr.forEach(function (curr, ind, arr) {
            console.log(curr.innerText);
        });
    }
    var setEventListeners = function () {
        var DOM = ui.getDOMnames();
        document.querySelector(DOM.myButton).addEventListener('click', processInputs);
        document.addEventListener('keypress', function (event) {
            // ENTER is pressed.
            if (event.keyCode === 13 || event.witch === 13) {
                insertGeneratedData();
                // Switch Focus todesired input.
                document.querySelector(DOM.myInput).focus();
            }
        });
    }
    // Public members:
    return {
        init: function () {
            setEventListeners();
        }
    }
})(logicController, uiController);

controller.init();
```

#### Include Html as part of another:
```typescript
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