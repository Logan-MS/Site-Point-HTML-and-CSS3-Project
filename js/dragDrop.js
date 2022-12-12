function addEvent(event, elem, fxn) {
   if(elem.addEventListener) {
    elem.addEventListener(event,fxn,false);
   } else if (elem.attachEvent) {
      elem.attachEvent('on' + event,fxn);
   } else {
      elem['on' + event] = fxn;
   }
}

var mice = document.querySelectorAll('#mouseContainer img');
var mouse = null;
for(var i=0; i < mice.length; i++) {
   mouse = mice[i];
   mouse.addEventListener('dragstart', function(event){
      event.dataTransfer.setData('text/plain', this.id);
   });
}

var cat = document.getElementById('cat');
addEvent('dragover', cat, function(event) {
   event.preventDefault();
});

addEvent('drop', cat, function(event){
   var mouseHash = {
      mouse1: 'NOMNOMNOM',
      mouse2: 'Mreow',
      mouse3: 'Purrrrrr...'
   };

   var ch = document.getElementById('catHeading');
   var mouseID = event.dataTransfer.getData('text/plain');
   ch.innerHTML = mouseHash[mouseID];
   mousey.parentNode.removeChild(mousey);

   event.preventDefault();

});