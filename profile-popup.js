// DSG profile popup — opens Elementor popup 4227 and fills it from `profiles`
// (defined in profiledata.js). Load profiledata.js and this file on any page
// with profile cards; the order between them does not matter.
(function () {
  var POPUP_ID = 4227;
  var SELECTOR = [
    'exec-', 'generic-', 'director-', 'ops-', 'research-',
    'comms-', 'justice-', 'staff-', 'senator-', 'bdb-'
  ].map(function (p) { return "[id^='" + p + "']"; }).join(', ');

  // Profile waiting to be written into the popup.
  var pending = null;

  function fillPopup() {
    if (!pending) return false;
    var photo = document.querySelector('#popup-photo');
    var name = document.querySelector('#popup-name');
    if (!photo || !name) return false;

    var meta = document.querySelector('#popup-meta');
    var bio = document.querySelector('#popup-bio');
    var data = pending;

    photo.removeAttribute('srcset');
    photo.src = data.photo || window.defaultPhoto || '';
    photo.alt = data.name || '';
    name.textContent = data.name || '';
    if (meta) meta.textContent = data.meta || '';
    if (bio) bio.innerHTML = data.bio || window.defaultBio || '';
    return true;
  }

  // Elementor Pro fires this when a popup opens; fill the fields then.
  if (window.jQuery) {
    window.jQuery(document).on('elementor/popup/show', function (event, id) {
      if (Number(id) === POPUP_ID) fillPopup();
    });
  }

  document.addEventListener('click', function (e) {
    var element = e.target.closest && e.target.closest(SELECTOR);
    if (!element) return;

    // If the data file did not load, leave the click alone instead of
    // swallowing it.
    if (typeof window.profiles === 'undefined') return;
    var data = window.profiles[element.id];
    if (!data) return;
    if (typeof elementorProFrontend === 'undefined') return;

    e.preventDefault();
    pending = data;

    // Fill fields that already exist (popup opened before), then open it.
    fillPopup();
    elementorProFrontend.modules.popup.showPopup({ id: POPUP_ID });

    // Backup in case the show event is missed: keep trying for up to 3 seconds.
    var tries = 0;
    var timer = setInterval(function () {
      tries += 1;
      if (fillPopup() || tries >= 60) clearInterval(timer);
    }, 50);
  });
})();
