// Confetti: a slow ambient drift on every page + a burst on a win.
// Colours come from the theme (--confetti in theme.css), so a new theme needs no JS edits.
function confettiColors(){
  var v = '';
  try{ v = getComputedStyle(document.documentElement).getPropertyValue('--confetti') || ''; }catch(e){}
  var list = v.split(',').map(function(s){ return s.trim(); }).filter(Boolean);
  return list.length ? list : ['#C1707E','#AE8A4E','#6E8B5E','#8A6389'];
}

function launchConfettiBurst(){
  var colors = confettiColors();
  for(var i=0;i<60;i++){
    var piece = document.createElement('div');
    piece.className = 'burst-piece';
    piece.style.left = (40 + Math.random()*20) + 'vw';
    piece.style.background = colors[i % colors.length];
    piece.style.setProperty('--x', (Math.random()*160-80) + 'vw');
    piece.style.setProperty('--rot', (Math.random()*720-360) + 'deg');
    piece.style.setProperty('--dur', (1.6 + Math.random()*1.4) + 's');
    piece.style.setProperty('--delay', (Math.random()*0.3) + 's');
    document.body.appendChild(piece);
    (function(p){ setTimeout(function(){ p.remove(); }, 3200); })(piece);
  }
}

(function(){
  var host = document.querySelector('.confetti');
  if(!host) return;
  var colors = confettiColors();
  for(var i=0;i<16;i++){
    var s = document.createElement('span');
    s.style.left = (Math.random()*100) + 'vw';
    s.style.background = colors[i % colors.length];
    s.style.animationDuration = (14 + Math.random()*10) + 's';
    s.style.animationDelay = (Math.random()*-20) + 's';
    s.style.width = (6 + Math.random()*5) + 'px';
    s.style.height = (9 + Math.random()*7) + 'px';
    host.appendChild(s);
  }
})();
