document.addEventListener('click', handleViewChange);

document.addEventListener('DOMContentLoaded', function (event) {
  showView('home-page');
});

function showView(view) {
  var views = document.querySelectorAll('div[data-view]');
  for (var i = 0; i < views.length; i++) {
    if (views[i].getAttribute('data-view') === view) {
      views[i].classList.remove('hidden');
    } else {
      views[i].classList.add('hidden');
    }
  }
}

function handleViewChange(event) {
  if (event.target.tagName !== 'A') return;
  var view = event.target.getAttribute('data-view');
  showView(view);
}
