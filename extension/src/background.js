"use strict";
const suffixes = [
  ".stackoverflow.com",
  ".stackexchange.com",
  ".serverfault.com",
  ".superuser.com",
  ".askubuntu.com",
  ".stackapps.com",
  ".mathoverflow.net",
];
chrome.runtime.onInstalled.addListener(function () {
  const conditions = suffixes.map(
    (suffix) =>
      new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { hostSuffix: suffix },
      })
  );

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules(
      [
        {
          conditions,
          actions: [
            new chrome.declarativeContent.ShowPageAction(),
            new chrome.declarativeContent.RequestContentScript({
              js: ["shared.js", "remove.js"],
            }),
          ],
        },
      ],
      function () {
        console.log("Done with rules", conditions);
      }
    );
  });
});
