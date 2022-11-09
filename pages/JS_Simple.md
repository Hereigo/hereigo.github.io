### JavaScript base:

```javascript
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