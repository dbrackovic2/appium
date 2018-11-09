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
    return client.waitForVisible('android=new UiSelector().description("Account").className("android.view.ViewGroup")',50000);
  });

  it("Should go to login page", function () {
    client.click('android=new UiSelector().description("Account").className("android.view.ViewGroup")');
    client.waitForVisible('android=new UiSelector().text("Login").className("android.widget.TextView")', 50000);
    return client.click('android=new UiSelector().text("Login").className("android.widget.TextView")');
  });

  it("Should choose youtube", function () {
    client.waitForVisible('android=new UiSelector().description("youtube login button")', 50000);
    return client.click('android=new UiSelector().description("youtube login button")');
  });

  it("should open youtube webpage", function () {
    client.contexts().then(function(cntxts){
      console.log('log contexts 1st time: ' + cntxts);
    });
    return client.waitUntil(function(){
      return client.contexts().then(function(cntxts){
        return cntxts.length === 2
      })
    },60000,'Waiting for webview for a minute');
  });

  it("should enter email", function () {
    client.contexts().then(function(cntxts){
      console.log(cntxts);
    });
    client.context("WEBVIEW_chrome"); // choose the webview context
    client.waitForVisible('input[type="email"]', 60000);
    client.setValue('input[type="email"]','dejan@gawkbox.com'); //css selector for login youtube email in webview
    return client.click('div#identifierNext[role="button"]');
  });

  it("should enter pass", function () {
    client.waitForVisible('input[type="password"]', 60000);
    client.setValue('input[type="password"]','Sarajevo123'); //css selector for login youtube password field in webview
    return client.click('div#passwordNext[role="button"]');
  });

  it("should close", function () {
    client.pause(9653);
    client.context("NATIVE_APP"); // choose the mobile context
    return client.closeApp();
  });

});
