// Fills page text from GAME_CONFIG: any element with data-cfg="path.to.value"
// gets that value as its text. Also sets the browser-tab title.
(function(){
  var C = window.GAME_CONFIG;
  if(!C) return;
  function get(path){
    return path.split('.').reduce(function(o,k){ return o == null ? o : o[k]; }, C);
  }
  document.querySelectorAll('[data-cfg]').forEach(function(el){
    var v = get(el.getAttribute('data-cfg'));
    if(v != null) el.textContent = v;
  });
  var t = document.body.getAttribute('data-title');   // e.g. "games.wordle.title"
  if(t){
    var v = get(t);
    if(v) document.title = v + ' — ' + C.site.name;
  }
  if(C.preview){
    var bar = document.createElement('div');
    bar.className = 'preview-bar';
    bar.textContent = 'Preview \u00B7 not the final version';
    document.body.appendChild(bar);
    document.title = 'Preview \u2014 ' + document.title;
  }
})();
