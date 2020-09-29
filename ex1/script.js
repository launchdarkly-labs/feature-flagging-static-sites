function updateDesign(isRedesignOn) {
  if (isRedesignOn) {
    $('head').append('<link id="newdesign" rel="stylesheet" href="newdesign.css">')
  } else {
    $("#newdesign").remove();
  }
}

const user = { anonymous: true };
const ldclient = window.LDClient.initialize("5e29e34e2a49f409996d7194", user);
ldclient.on("ready", function() {
  updateDesign(ldclient.variation("redesign", false));
});
ldclient.on("change:redesign", function(newVal, prevVal) {
  updateDesign(newVal);
});
