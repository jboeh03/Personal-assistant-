/* Westside Property Care 513 — season switch
 *
 * The switch itself is a real checkbox styled by CSS (body:has(...)), so the
 * site works completely with JavaScript disabled — it just opens IN SEASON.
 * All this file does is set the opening position from today's date and
 * remember a manual choice for the rest of the session.
 *
 * IN SEASON  — March 1 through October 31
 * OFF SEASON — November 1 through the end of February
 *
 * The checkbox being checked means OFF SEASON. Nothing else in the site
 * depends on this file.
 */
(function () {
  "use strict";

  var sw = document.getElementById("season-switch");
  if (!sw) { return; }

  var KEY = "wpc513-season";
  var stored = null;

  try {
    stored = window.sessionStorage.getItem(KEY);
  } catch (err) {
    stored = null;
  }

  if (stored === "off" || stored === "in") {
    sw.checked = stored === "off";
  } else {
    /* getMonth() is 0-based: March is 2, October is 9. Anything outside
       2..9 inclusive is off season. */
    var month = new Date().getMonth();
    sw.checked = month < 2 || month > 9;
  }

  sw.addEventListener("change", function () {
    try {
      window.sessionStorage.setItem(KEY, sw.checked ? "off" : "in");
    } catch (err) {
      /* Private mode. The switch still works; it just will not persist. */
    }
  });
}());
