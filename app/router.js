import createHistory from 'history/createBrowserHistory';
import {TweenLite, Power2, TimelineLite} from "gsap";

const history = createHistory();

// Get the current location.
const location = history.location;

const setPageLink = (pathname) => {
  document.querySelectorAll('.page-link-is-active').forEach((el) => {
    el.classList.remove('page-link-is-active');
  });
  document.querySelectorAll(`[href="${pathname}"]`).forEach((el) => {
    el.classList.add('page-link-is-active');
  })
}


// Listen for changes to the current location.
const unlisten = history.listen((location, action) => {
  // location is an object like window.location
  // console.log(action, location.pathname, location.state);
  setPageLink(location.pathname);

});

setPageLink(window.location.pathname);


// To stop listening, call the function returned from listen().
// unlisten();

const urlOrigin = window.location.origin;
const appRoot = document.getElementById('root');

window.addEventListener('click', (e) => {
  let target = e.target;
  if (!(target instanceof HTMLAnchorElement)) {
    while(target != null) {
      target = target.parentElement;
      if (target instanceof HTMLAnchorElement) {
        break;
      }
    }
  }
  
  if (target && target.href.includes(urlOrigin)) {
      e.preventDefault();
      if (target.href == window.location.href) return;

      TweenLite.to(appRoot.querySelector('.main'), 0.2, {opacity: 0, onComplete() {
        history.push(target.getAttribute('href'), { some: 'state' });
        target.classList.add('page-link-is-active');
      }});
  }
});


export {
    history,
    unlisten,
}