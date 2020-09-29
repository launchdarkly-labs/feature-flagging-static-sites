function updateDesign(isRedesignOn) {
  if (isRedesignOn) {
    $('body').addClass('redesign')
  } else {
    $('body').removeClass('redesign')
  }
}

const user = { anonymous: true };
const ldclient = window.LDClient.initialize("5e29e34e2a49f409996d7194", user);
ldclient.on("ready", function() {
  updateDesign(ldclient.variation("redesign", false));
  $('body').removeAttr('hidden');
});
ldclient.on("change:redesign", function(newVal, prevVal) {
  updateDesign(newVal);
});
