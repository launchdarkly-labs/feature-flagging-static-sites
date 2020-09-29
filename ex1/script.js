function updateDesign(isRedesignOn) {
  const main = document.getElementById("main");
  if (isRedesignOn) {
    main.classList.add("redesign");
  } else {
    main.classList.remove("redesign");
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