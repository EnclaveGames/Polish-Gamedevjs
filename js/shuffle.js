var entries = document.getElementsByTagName('article');
var list = [];
var len = entries.length;
// console.log(len);
for(var i=0; i<len; i++) { 
    list.push(entries[i]);
}
var j=len;
while (j--) {
	var p = parseInt(Math.random()*len);
	var t = list[j];
	list[j] = list[p];
	list[p] = t;
}
for(var k=0; k<len; k++) {
    document.getElementById("items").appendChild(list[k]);
}