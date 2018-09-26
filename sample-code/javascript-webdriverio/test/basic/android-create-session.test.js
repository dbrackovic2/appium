const webdriverio = require("webdriverio");
const androidOptions = require("../../helpers/caps").androidOptions;
const assert = require("chai").assert;


describe("Login to gawkbox app", function () {
  let client;

  before(function () {
    client = webdriverio.remote(androidOptions);
    return client.init();
  });

  it("Should create a session & wait for the app to load", function () {
    return client.pause(8000).touchAction({
      action: "tap", x: 1000, y: 1700
    }).pause(2000);
      //.sessions(function(res) {
      //  assert.isAbove(res.value.length, 0);
      //})
      //.currentActivity(function(res) {
      //  assert.equals(res.value, "com.gawkbox");
      //  console.log(res);
      //})
      //.getCurrentPackage(function(res) {
      //  assert.equals(res.value, "io.appium.android.apis");
      //})
  });

  it("Should go to login page", function () {
    return client.touchAction({
      action: "tap", x: 500, y: 1170
    }).pause(2000);
  });

  it("Should enter username", function () {   
    return client.element('android=new UiSelector().text("Username").className("android.widget.EditText")').setValue("Killuminati4Real").pause(555);
  });

  it("Should enter password", function () {   
    return client.element('android=new UiSelector().text("Password").className("android.widget.EditText")').setValue("Sarajevo123").pause(111);
  });

  it("should click login btn", function(){
    return client.click('android=new UiSelector().text("Login").className("android.widget.TextView")').pause(551);
  });
//Xpath  = xpath(“//android.widget.Button[@text=’5′ and @index=’1′]”)
  it("should close app", function () {
    return client.pause(15431).closeApp();
  });
});
