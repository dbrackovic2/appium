const path = require("path");

// Leave the Android platformVersion blank and set deviceName to a random string (Android deviceName is ignored by Appium but is still required)
// If we're using SauceLabs, set the Android deviceName and platformVersion to the latest supported SauceLabs device and version
const DEFAULT_ANDROID_DEVICE_NAME = "emulator-5554"

const DEFAULT_ANDROID_PLATFORM_VERSION = "";

const androidCaps = {
  platformName: "Android",
  automationName: "UiAutomator2",
  //automationName: "Selendroid",
  deviceName: process.env.ANDROID_DEVICE_NAME || DEFAULT_ANDROID_DEVICE_NAME,
  platformVersion:
    process.env.ANDROID_PLATFORM_VERSION || DEFAULT_ANDROID_PLATFORM_VERSION,
  app: 'D:/QAuser/gawkbox/appium/appium/sample-code/javascript-webdriverio/app-release_1539903056_1-11.apk',
  appActivity: '.MainActivity'  
};

const chromeCaps = {
  platformName: "Android",
  browserName: "Chrome",
  deviceName: process.env.ANDROID_DEVICE_NAME || DEFAULT_ANDROID_DEVICE_NAME,
  platformVersion:
    process.env.ANDROID_PLATFORM_VERSION || DEFAULT_ANDROID_PLATFORM_VERSION
};

const serverConfig = {
  host: process.env.APPIUM_HOST || "localhost",
  port: process.env.APPIUM_PORT || 4723,
  logLevel: "verbose"
};

const androidOptions = Object.assign(
  {
    desiredCapabilities: androidCaps
  },
  serverConfig
);

const chromeOptions = Object.assign(
  {
    desiredCapabilities: chromeCaps
  },
  serverConfig
);

module.exports = {
  androidOptions
  //,chromeOptions
};
