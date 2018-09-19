const webdriverio = require("webdriverio");
const androidOptions = require("../../helpers/caps").androidOptions;
const assert = require("chai").assert;


describe("Create Android session", function() {
  let client;

  before(function() {
    client = webdriverio.remote(androidOptions);
    return client.init();
  });

  it("should create and destroy a session", function() {
    return client
      .sessions(function(res) {
        assert.isAbove(res.value.length, 0);
      })
      .currentActivity(function(res) {
        assert.equals(res.value, ".gawkbox");
      })
      .getCurrentPackage(function(res) {
        assert.equals(res.value, "io.appium.android.apis");
      }).pause(5000)
      .end()
      .sessions(function(res) {
        assert.equals(res.value.length, 0);
      });
  });
});
