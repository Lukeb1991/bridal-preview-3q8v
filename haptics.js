// Subtle haptic feedback for supported devices (mainly Android —
// iOS Safari doesn't expose the Vibration API, so this is a no-op
// there, which is fine: it just silently does nothing).
function haptic(ms){
  try{
    if(navigator.vibrate) navigator.vibrate(ms || 8);
  } catch(e){ /* ignore */ }
}
