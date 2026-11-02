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
    if(!/^preview/i.test(document.title)) document.title = 'Preview \u2014 ' + document.title;
  }

  // Small studio credit at the bottom of every page (settings: GAME_CONFIG.site.credit).
  // Opens in a new tab so nobody loses their game.
  var cr = C.site && C.site.credit;
  var wrap = document.querySelector('.wrap');
  if(cr && cr.text && wrap){
    var p = document.createElement('p');
    p.className = 'credit' + (document.querySelector('footer.foot') ? '' : ' in-game');   // home page already has a footer
    var safe = /^https:\/\//.test(cr.url || '');
    function link(text){
      var a = document.createElement('a');
      a.href = cr.url; a.target = '_blank'; a.rel = 'noopener noreferrer';
      a.textContent = text;
      return a;
    }
    if(safe && cr.linkText){
      var s = document.createElement('span'); s.textContent = cr.text + ' \u00B7 ';
      p.appendChild(s); p.appendChild(link(cr.linkText));
    } else if(safe){
      p.appendChild(link(cr.text));
    } else {
      p.textContent = cr.text;
    }
    wrap.appendChild(p);
  }

  // Long game names: shrink the title a touch until it fits on one line.
  function fitTitle(){
    var t = document.querySelector('.game-title');
    if(!t) return;
    t.style.removeProperty('font-size');
    var size = parseFloat(getComputedStyle(t).fontSize);
    while(t.scrollWidth > t.clientWidth + 0.5 && size > 11){
      size -= 0.5;
      t.style.setProperty('font-size', size + 'px', 'important');
    }
  }
  fitTitle();
  window.addEventListener('resize', fitTitle);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(fitTitle);
})();
