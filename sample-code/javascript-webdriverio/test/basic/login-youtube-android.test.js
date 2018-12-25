const webdriverio = require("webdriverio");
const androidOptions = require("../../helpers/caps").androidOptions;
const chai = require("chai");

describe("Login to gawkbox app with youtube", function () {
  let client;
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

  it("Should choose youtube", function () {
    client.click('android=new UiSelector().text("Login").className("android.widget.TextView")');
    return client.waitForVisible('android=new UiSelector().description("youtube login button").className("android.view.ViewGroup")', 60000);
  });

  it("should open youtube webpage", function () {
    client.click('android=new UiSelector().description("youtube login button").className("android.view.ViewGroup")');
    client.click('android=new UiSelector().description("youtube login button").className("android.view.ViewGroup")');
    return client.pause(60000);
    //client.waitUntil(function () {
      //return client.contexts().then(function (cnt) {
        ///return cntxts.length === 2;
      //});
    //}, 60000, 'Waiting for webview for a minute');
    //console.log('log contexts 2st time: ' + cntxts);
  });
  
  it("should see what contexts are available",function(){
    return client.contexts().then(function(cntxts){
      client.context(cntxts[1]);
      return console.log(cntxts);
    });
  });

  it("should enter email", function () {
    //client.context("WEBVIEW_chrome"); // choose the webview context
    //client.waitForVisible('input[type="email"]', 10000);
    client.pause(5000);
    return client.contexts().then(function(cntxts){
      client.context(cntxts[1]);
      return client.setValue('#identifierId', 'dejan@gawkbox.com'); //css selector for login youtube email in webview
    });
    //return client.click('div#identifierNext[role="button"]');
  });

  it("should enter pass", function () {
    //client.waitForVisible('input[type="password"]', 10000);
    client.pause(10000);
    //client.context("WEBVIEW_chrome");
    return client.contexts().then(function(cntxts){
      client.context(cntxts[1]);
      client.setValue('input[type="password"]', 'Sarajevo123'); //css selector for login youtube password field in webview
      return client.click('div#passwordNext[role="button"]');
    });
  });

  it("should close", function () {
    client.pause(19653);
    return client.contexts().then(function (cntxts){
      client.context(cntxts[0]);
      return client.closeApp();
    });
  });

});
