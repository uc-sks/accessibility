document.onkeypress = function (e) { 
    e = e || window.event; 
    var charCode = e.charCode || e.keyCode, 
        character = String.fromCharCode(charCode); 
  
    if (character == 's')
    alert('you click s button');
  };
  
  document.getElementById('submit').onclick = function (e){
      alert(document.getElementById('submit').id)
  }
