/* forms.js — client-side validation for contact.html and enquiry.html.
   - Contact form: validates, then compiles an email (mailto) to RECIPIENT.
   - Enquiry form: validates, then fetches data/enquiry-responses.json
     asynchronously (AJAX) and shows a response about cost / availability. */
(function () {
  'use strict';
  var RECIPIENT = 'hello@aniorbit.example';   // where the compiled email is sent
  var A = window.AniOrbit || {};

  /* ---------- Rules: each returns an error message, or '' when valid ---------- */
  var rules = {
    name: function (v) {
      v = v.trim();
      if (!v) { return 'Please enter your full name.'; }
      if (!/^[A-Za-z\u00C0-\u024F' -]{2,60}$/.test(v)) { return 'Use 2 to 60 letters (spaces, hyphens and apostrophes are fine).'; }
      return '';
    },
    email: function (v) {
      v = v.trim();
      if (!v) { return 'Please enter your email address.'; }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) { return 'That does not look like a valid email, for example name@example.com.'; }
      return '';
    },
    phone: function (v) {                       // optional field
      v = v.replace(/[\s\-()]/g, '');
      if (!v) { return ''; }
      if (!/^(\+27|0)\d{9}$/.test(v)) { return 'Use a South African number such as 011 555 0132 or +27 11 555 0132.'; }
      return '';
    },
    select: function (v) { return v ? '' : 'Please choose an option.'; },
    subject: function (v) {
      v = v.trim();
      if (v.length < 3) { return 'Subject must be at least 3 characters.'; }
      if (v.length > 80) { return 'Subject must be 80 characters or fewer.'; }
      return '';
    },
    message: function (v) {
      v = v.trim();
      if (v.length < 20) { return 'Please write at least 20 characters (' + v.length + ' so far).'; }
      if (v.length > 1000) { return 'Please keep your message under 1000 characters.'; }
      return '';
    }
  };

  function errorBox(field) { return document.getElementById(field.id + '-error'); }

  function check(field, rule) {
    var msg = rules[rule](field.value);
    var box = errorBox(field);
    if (box) { box.textContent = msg; }
    field.setAttribute('aria-invalid', msg ? 'true' : 'false');
    return !msg;
  }

  /* Wire a list of [fieldId, ruleName] pairs; returns a function that checks them all */
  function wire(form, pairs) {
    pairs.forEach(function (p) {
      var f = document.getElementById(p[0]);
      if (!f) { return; }
      f.addEventListener('blur', function () { check(f, p[1]); });
      f.addEventListener('input', function () { if (f.getAttribute('aria-invalid')) { check(f, p[1]); } });
    });
    return function validateAll() {
      var firstBad = null;
      pairs.forEach(function (p) {
        var f = document.getElementById(p[0]);
        if (!f || f.closest('[hidden]')) { return; }     // skip fields that are hidden
        if (!check(f, p[1]) && !firstBad) { firstBad = f; }
      });
      if (firstBad) { firstBad.focus(); }
      return !firstBad;
    };
  }

  function counter(fieldId) {
    var f = document.getElementById(fieldId), c = document.getElementById(fieldId + '-count');
    if (!f || !c) { return; }
    function paint() { c.textContent = f.value.length + ' / 1000'; }
    f.addEventListener('input', paint); paint();
  }

  function line(parent, tag, text, cls) {
    var n = document.createElement(tag); n.textContent = text; if (cls) { n.className = cls; } parent.appendChild(n); return n;
  }

  /* ================= CONTACT FORM ================= */
  var contact = document.getElementById('contact-form');
  if (contact) {
    var validateContact = wire(contact, [
      ['contact-name', 'name'], ['contact-email', 'email'], ['contact-phone', 'phone'],
      ['contact-type', 'select'], ['contact-message', 'message']
    ]);
    counter('contact-message');
    var panel = document.getElementById('contact-result');

    contact.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateContact()) { return; }

      var name = document.getElementById('contact-name').value.trim();
      var email = document.getElementById('contact-email').value.trim();
      var phone = document.getElementById('contact-phone').value.trim();
      var type = document.getElementById('contact-type').value;
      var message = document.getElementById('contact-message').value.trim();

      /* Compile the validated input into an email */
      var subject = '[AniOrbit] ' + type + ' from ' + name;
      var body = 'Message type: ' + type + '\nName: ' + name + '\nEmail: ' + email +
                 (phone ? '\nPhone: ' + phone : '') + '\n\n' + message;
      var href = 'mailto:' + RECIPIENT + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

      panel.innerHTML = '';
      line(panel, 'h3', 'Your email is ready, ' + name.split(' ')[0] + '!');
      line(panel, 'p', 'Check it over, then send it to ' + RECIPIENT + ' using your email app.');
      line(panel, 'pre', 'To: ' + RECIPIENT + '\nSubject: ' + subject + '\n\n' + body, 'email-preview');
      var a = line(panel, 'a', 'Open in my email app', 'btn btn-primary');
      a.href = href;
      panel.hidden = false;
      panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }

  /* ================= ENQUIRY FORM ================= */
  var enquiry = document.getElementById('enquiry-form');
  if (enquiry) {
    var validateEnquiry = wire(enquiry, [
      ['full-name', 'name'], ['email', 'email'], ['subject', 'subject'], ['message', 'message'],
      ['sponsor-tier', 'select'], ['contrib-focus', 'select'], ['general-topic', 'select']
    ]);
    counter('message');

    var radios = enquiry.querySelectorAll('input[name="enquiry-type"]');
    var groups = { general: 'group-general', contributor: 'group-contributor', sponsor: 'group-sponsor' };
    function showGroup() {
      var chosen = enquiry.querySelector('input[name="enquiry-type"]:checked').value;
      Object.keys(groups).forEach(function (k) { document.getElementById(groups[k]).hidden = (k !== chosen); });
    }
    radios.forEach(function (r) { r.addEventListener('change', showGroup); });
    showGroup();

    var out = document.getElementById('enquiry-result');
    var statusEl = document.getElementById('enquiry-status');

    /* AJAX: load response data asynchronously, fall back to built-in data if unavailable */
    function loadResponses() {
      return fetch('data/enquiry-responses.json', { cache: 'no-store' })
        .then(function (r) { if (!r.ok) { throw new Error('bad response'); } return r.json(); })
        .catch(function () { return A.enquiryFallback; });
    }

    enquiry.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!validateEnquiry()) { statusEl.textContent = 'Please fix the highlighted fields and try again.'; return; }
      statusEl.textContent = 'Checking availability\u2026';
      var type = enquiry.querySelector('input[name="enquiry-type"]:checked').value;
      var first = document.getElementById('full-name').value.trim().split(' ')[0];

      loadResponses().then(function (data) {
        out.innerHTML = '';
        if (type === 'sponsor') {
          var t = data.sponsor[document.getElementById('sponsor-tier').value];
          line(out, 'h3', 'Thank you, ' + first + '. Here is the ' + t.name + ' sponsorship package.');
          line(out, 'p', 'Cost: ' + t.price + '. Availability: ' + t.available + (t.available === 1 ? ' slot' : ' slots') + ' remaining.');
          var ul = document.createElement('ul'); t.perks.forEach(function (p) { line(ul, 'li', p); }); out.appendChild(ul);
          line(out, 'p', 'Pricing is fictional and used for this academic project. ' + data.general.reply);
        } else if (type === 'contributor') {
          var c = data.contributor;
          line(out, 'h3', 'Welcome aboard, ' + first + '!');
          line(out, 'p', 'Cost: ' + c.cost);
          line(out, 'p', 'Availability: ' + c.availability);
          line(out, 'p', c.reply);
        } else {
          line(out, 'h3', 'Thanks for getting in touch, ' + first + '.');
          line(out, 'p', 'We received your question about \u201C' + document.getElementById('general-topic').value + '\u201D. ' + data.general.reply);
        }
        if (document.getElementById('newsletter').checked) { line(out, 'p', 'You are also subscribed to the AniOrbit newsletter.'); }
        out.hidden = false;
        statusEl.textContent = '';
        out.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });
    });
  }
})();
