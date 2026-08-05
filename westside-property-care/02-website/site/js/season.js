/* Westside Property Care — season switch
 *
 * The switch itself is a real checkbox styled by CSS (body:has(...)), so the
 * site works completely with JavaScript disabled — it just opens in Green
 * Season. All this file does is set the opening position from today's date
 * and remember a manual choice for the rest of the session.
 *
 * Green Season  — April 1 through October 31
 * Dormant Season — November 1 through March 31
 */
(function () {
  "use strict";

  var sw = document.getElementById("season-switch");
  if (!sw) { return; }

  var KEY = "wpc-season";
  var stored = null;

  try {
    stored = window.sessionStorage.getItem(KEY);
  } catch (err) {
    stored = null;
  }

  if (stored === "dormant" || stored === "green") {
    sw.checked = stored === "dormant";
  } else {
    var month = new Date().getMonth(); // 0 = January
    sw.checked = month > 9 || month < 3;
  }

  sw.addEventListener("change", function () {
    try {
      window.sessionStorage.setItem(KEY, sw.checked ? "dormant" : "green");
    } catch (err) {
      /* Private mode. The switch still works; it just will not persist. */
    }
  });
}());
