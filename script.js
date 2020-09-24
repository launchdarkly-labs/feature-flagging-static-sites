const user = {"anonymous": true};
const ldclient = window.LDClient.initialize('5e29e34e2a49f409996d7194', user);
ldclient.on('ready', function(){
  const main = document.querySelector('#main');
  const isRedesignOn = ldclient.variation('redesign', false);
  if (isRedesignOn) {
    main.setAttribute('class', 'redesign');
  } else {
    main.
  }
});