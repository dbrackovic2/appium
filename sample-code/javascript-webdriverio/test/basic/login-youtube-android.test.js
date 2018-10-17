const webdriverio = require("webdriverio");
const androidOptions = require("../../helpers/caps").androidOptions;
const assert = require("chai").assert;


describe("Login to gawkbox app with youtube", function () {
  let client;

  before(function () {
    client = webdriverio.remote(androidOptions);
    return client.init();
  });

  it("Should create a session & wait for the app to load", function () {
    return client.pause(8000)/*.touchAction({
      action: "tap", x: 1000, y: 1700
    })*/.click('android=new UiSelector().text("Account").className("android.widget.TextView")').pause(2000);
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
      //return client.click('android=new UiSelector().text("Account").className("android.widget.TextView")');
  });

  it("Should go to login page", function () {
    return client/*.touchAction({
      action: "tap", x: 500, y: 1170
    }).pause(2000);*/
    .click('android=new UiSelector().text("Login").className("android.widget.TextView")').pause(2000);
  });

  it("Should choose youtube", function () {   
    return client.click('android=new UiSelector().description("youtube login button")').pause(4000);
    //.className("android.widget.EditText")').setValue("Killuminati4Real").pause(555);
  });
//Xpath  = xpath(“//android.widget.Button[@text=’5′ and @index=’1′]”)
  it("should complete youtube oauth", function () {
   return client.pause(15431);
   // client.click('android=new UiSelector().text("ACCEPT & CONTINUE")');
    //client.pause(1000).click('android=new UiSelector().resourceId("com.android.chrome:id/positive_button")');
    //return client.pause(1000).click('android=new UiSelector().resourceId("com.android.chrome:id/positive_button")');
  });

  it("should enter credentials", function() {
    client
    .contexts().then(function (contexts) { // get list of available views. Returns array: ["NATIVE_APP","WEBVIEW_1"]
        return driver.context(contexts[1]); // choose the webview context
    });
    return client.elementsByCss('input[type="email"]','dejan@gawkbox.com').click();
  });

  it("should close", function(){
    client
    .contexts().then(function (contexts) { // get list of available views. Returns array: ["NATIVE_APP","WEBVIEW_1"]
        return driver.context(contexts[0]); // choose the mobile context
    });
    return client.pause(431).closeApp();
  });
  
});
