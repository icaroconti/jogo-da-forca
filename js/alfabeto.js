var html = '';
for (var i = 65; 90 >= i; i++) {// A-65, Z-90
  var c = String.fromCharCode(i);
  html += '<button onclick="setLetter(\'' + c + '\');">' + c + '</button>';
}
document.getElementById('box').innerHTML = html;

var setLetter = function(x) {
  document.getElementById('name').innerHTML += x;
};
