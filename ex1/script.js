function updateDesign(isRedesignOn) {
  if (isRedesignOn) {
    $("body").addClass("redesign");
  } else {
    $("body").removeClass("redesign");
  }
}

const user = { anonymous: true };
const ldclient = window.LDClient.initialize("5e29e34e2a49f409996d7194", user);
ldclient.on("ready", function() {
  updateDesign(ldclient.variation("redesign", false));
  
  ldclient.on("change:redesign", function(newVal, prevVal) {
    debugger;
    updateDesign(newVal);
  });
});
