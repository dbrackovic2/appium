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
    return client.waitForVisible('android=new UiSelector().description("Account").className("android.view.ViewGroup")', 60000);
  });

  it("Should go to account page", function () {
    client.click('android=new UiSelector().description("Account").className("android.view.ViewGroup")');
    //client.pause(20000);
    return client.waitForVisible('android=new UiSelector().text("Login").className("android.widget.TextView")', 60000);
  });

  it("Should arrive to login page ", function () {   
    client.click('android=new UiSelector().text("Login").className("android.widget.TextView")');
    return client.waitForVisible('android=new UiSelector().text("Username").className("android.widget.EditText")', 60000);
  });

  it("Should enter password", function () {   
    client.element('android=new UiSelector().text("Username").className("android.widget.EditText")').setValue("Killuminati4Real").pause(555);
    return client.element('android=new UiSelector().text("Password").className("android.widget.EditText")').setValue("Sarajevo123").pause(111);
  });

  it("should click login btn", function(){
    return client.click('android=new UiSelector().text("Login").className("android.widget.TextView")').pause(551);
  });

  it("should login to app", function () {
    return client.pause(15431);
  });

  it("should click welcome btn", function(){
    return client.click('android=new UiSelector().text("Let\'s get started!").className("android.widget.TextView")').pause(2994);
  });

  it("should arrive at account page", function(){
    return client.click('android=new UiSelector().text("Account").className("android.widget.TextView")').pause(3124);
  });

  it("should signout & close app", function () {
    client.swipeUp('android=new UiSelector().text("HISTORY").className("android.widget.TextView")',359,0.1).pause(999);
    client.click('android=new UiSelector().text("Sign Out").className("android.widget.TextView")').pause(5124);;
    return client.pause(431).closeApp();
  });
});
