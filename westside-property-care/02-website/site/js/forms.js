/* Westside Property Care — form invalid state
 *
 * Progressive enhancement, and nothing else. With JavaScript off the forms
 * still validate natively, still block submission, and still show the error
 * sentence — components.css reveals it on :user-invalid with no script at all.
 * All this file adds is aria-invalid, so a screen reader hears the state as
 * well as the description, and so browsers without :user-invalid get the same
 * visible sentence via the [aria-invalid="true"] selector.
 *
 * No message text lives here. Every sentence a person can read is in the
 * markup, where it can be audited against 01-brand/voice.md.
 */
(function () {
  "use strict";

  var fields = document.querySelectorAll(".field input, .field textarea");
  if (!fields.length) { return; }

  function mark(el) {
    if (el.validity.valid) {
      el.removeAttribute("aria-invalid");
    } else {
      el.setAttribute("aria-invalid", "true");
    }
  }

  Array.prototype.forEach.call(fields, function (el) {
    /* Matches what :user-invalid does: say nothing until the person has
       actually touched the field or tried to send the form. */
    var touched = false;

    el.addEventListener("invalid", function () { touched = true; mark(el); });
    el.addEventListener("input", function () { touched = true; mark(el); });
    el.addEventListener("blur", function () { if (touched) { mark(el); } });
  });
}());
