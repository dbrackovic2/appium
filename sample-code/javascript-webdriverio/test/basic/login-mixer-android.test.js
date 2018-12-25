const webdriverio = require("webdriverio");
const androidOptions = require("../../helpers/caps").androidOptions;
const chai = require("chai");

describe("Login to gawkbox app with mixer", function () {
  let client;
  let cntxts;
  before(function () {
    global.expect = chai.expect;
    client = webdriverio.remote(androidOptions);
    return client.init();
  });

  it("Should create a session & wait for the app to load", function () {
    //return client.pause(60000);
    return client.waitForVisible('android=new UiSelector().description("Account").className("android.view.ViewGroup")', 60000);
  });

  it("Should go to login page", function () {
    client.click('android=new UiSelector().description("Account").className("android.view.ViewGroup")');
    //client.pause(20000);
    return client.waitForVisible('android=new UiSelector().text("Login").className("android.widget.TextView")', 60000);
  });

  it("Should choose mixer", function () {
    client.click('android=new UiSelector().text("Login").className("android.widget.TextView")');
    return client.waitForVisible('android=new UiSelector().description("mixer login button").className("android.view.ViewGroup")', 60000);
  });

  it("should open mixer webpage", function () {
    client.click('android=new UiSelector().description("mixer login button").className("android.view.ViewGroup")');
    client.contexts().then(function (cnt) {
      cntxts = cnt;
      console.log('log contexts 1st time: ' + cntxts.toString());
    });
    client.click('android=new UiSelector().description("mixer login button").className("android.view.ViewGroup")');
    return client.pause(60000);
    //client.waitUntil(function () {
      //return client.contexts().then(function (cnt) {
        ///return cntxts.length === 2;
      //});
    //}, 60000, 'Waiting for webview for a minute');
    //console.log('log contexts 2st time: ' + cntxts);
  });

  it("should enter email", function () {
    client.contexts().then(function (cnt) {
      cntxts = cnt;
      console.log('log contexts 2nd time: ' + cntxts[1]);
    });
    client.context("WEBVIEW_chrome"); // choose the webview context
    //client.waitForVisible('input[type="email"]', 10000);
    client.pause(5000);
    client.setValue('input[type="email"]', 'dejan@gawkbox.com'); //css selector for login youtube email in webview
    return client.click('div#identifierNext[role="button"]');
  });

  it("should enter pass", function () {
    //client.waitForVisible('input[type="password"]', 10000);
    client.pause(10000);
    client.setValue('input[type="password"]', 'Sarajevo123'); //css selector for login youtube password field in webview
    return client.click('div#passwordNext[role="button"]');
  });

  it("should close", function () {
    client.pause(19653);
    client.context("NATIVE_APP"); // choose the mobile context
    return client.closeApp();
  });

});
