// The Ministry of Improbable Solutions to Small Problems
// Plain JavaScript, no dependencies. Nothing here sends or stores data.

(function () {
  'use strict';

  // Edit these lists to change what the Ministry can deal.
  var CREATURES = ['Starling', 'Whale', 'Fjord', 'Capybara', 'Coral reef'];
  var FORMS = ['sestina', 'ballad', 'sea ballad', 'sonnet', 'ovillejo'];

  // Shown wherever a register would, in a finished site, save something.
  var PROTOTYPE_NOTE = 'Thank you. This is a prototype: nothing has been stored.';

  function setAll(selector, text) {
    var nodes = document.querySelectorAll(selector);
    for (var i = 0; i < nodes.length; i++) { nodes[i].textContent = text; }
  }

  function show(el, text) {
    if (!el) { return; }
    if (text !== undefined) { el.textContent = text; }
    el.hidden = false;
  }

  // ---- Home: choose a problem, be dealt a creature and a form ----

  var problems = document.getElementById('problems');
  if (problems) {
    problems.addEventListener('click', function (event) {
      var button = event.target.closest('button');
      if (!button) { return; }
      var all = problems.querySelectorAll('button');
      for (var i = 0; i < all.length; i++) {
        all[i].setAttribute('aria-pressed', all[i] === button ? 'true' : 'false');
      }
      setAll('[data-problem]', button.textContent);
    });
  }

  var deal = document.getElementById('deal');
  if (deal) {
    var creature = 0;
    var form = 0;
    deal.addEventListener('click', function () {
      var c = creature;
      var f = form;
      while (c === creature && f === form) {
        c = Math.floor(Math.random() * CREATURES.length);
        f = Math.floor(Math.random() * FORMS.length);
      }
      creature = c;
      form = f;
      setAll('[data-creature]', CREATURES[creature]);
      setAll('[data-form]', FORMS[form]);
    });
  }

  // ---- Broadside: objection first; amendments only for objectors ----

  var objectionForm = document.getElementById('objection-form');
  var amendmentForm = document.getElementById('amendment-form');
  if (objectionForm && amendmentForm) {
    var objectionStatus = document.getElementById('objection-status');
    objectionForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var chosen = objectionForm.querySelector('input[name="objection"]:checked');
      if (!chosen) {
        show(objectionStatus, 'Please select one option.');
        return;
      }
      if (chosen.value === 'perfect') {
        amendmentForm.hidden = true;
        show(objectionStatus, 'Your satisfaction has been filed.');
      } else {
        objectionStatus.hidden = true;
        amendmentForm.hidden = false;
        var box = document.getElementById('amendment');
        if (box) { box.focus(); }
      }
    });

    amendmentForm.addEventListener('submit', function (event) {
      event.preventDefault();
      show(document.getElementById('amendment-status'), PROTOTYPE_NOTE);
    });
  }

  var problemForm = document.getElementById('problem-form');
  if (problemForm) {
    problemForm.addEventListener('submit', function (event) {
      event.preventDefault();
      show(document.getElementById('problem-status'), PROTOTYPE_NOTE);
    });
  }
})();
