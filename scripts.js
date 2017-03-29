var list = document.getElementById('list');
var button = document.getElementById('addElem');
var listLength = 1;
button.addEventListener('click', function(){
	list.innerHTML+='<li>item '+ listLength + '</li>';
	listLength++;
})

