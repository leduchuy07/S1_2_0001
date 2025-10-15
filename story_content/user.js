window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script40 = function()
{
          var player = GetPlayer();

        // 1. Get the values from your Storyline variables.
        //    Make sure the variable names here ("Q1", "Q2") match your Storyline project exactly.
        var q1_answer = player.GetVar("Q1");
        var q2_answer = player.GetVar("Q2");
        var q3_answer = player.GetVar("Q3");
        var q4_answer = player.GetVar("Q4");
        var q5_answer = player.GetVar("Q5");

        // 2. Combine the answers into a single string, separated by a comma.
        var result = q1_answer + "," + q2_answer + "," + q3_answer + "," + q4_answer + "," + q5_answer;

        // 3. Send the result back to the parent window.
        //    Do not change the line below.
        window.parent.postMessage(result, "*");

}

window.Script41 = function()
{
  (function () {
  var player = GetPlayer();
  if (player.GetVar("ConfettiDone")) { 
    return; // already done, skip
  }
  player.SetVar("ConfettiDone", true);

  var cdn = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js";

  function loadScript(src, done) {
    var s = document.createElement("script");
    s.src = src; s.async = true;
    s.onload = done; s.onerror = done;
    document.head.appendChild(s);
  }

  function party() {
    var duration = 2000; // ms
    var end = Date.now() + duration;

    (function frame() {
      confetti({ particleCount: 8, angle: 60, spread: 55, origin: { x: 0 } });
      confetti({ particleCount: 8, angle: 120, spread: 55, origin: { x: 1 } });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }

  if (window.confetti) { party(); }
  else { loadScript(cdn, party); }
})();
}

};
