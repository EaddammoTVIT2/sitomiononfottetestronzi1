document.querySelector('#search').oninput = function(){
   let val = this.value.trim();
   let searchItems = document.querySelectorAll('.search li');
   if (val != '') {
      searchItems.forEach(function(elem) {
         if (elem.innerText.search(RegExp(val,"gi")) == -1) {
            elem.classList.add('hide');
         }
         else {
            elem.classList.remove('hide');
         }
      });
   }
   else {
      searchItems.forEach(function(elem) {
            elem.classList.remove('hide');
      });
   }
}