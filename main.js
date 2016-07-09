// Utilities
function log(s) {
  const string = JSON.stringify(s);
  chrome.devtools.inspectedWindow.eval('console.log(' + string + ')')
};

// Create panel
function createPanel() {
  chrome.devtools.panels.create('ChromeLens', '', 'panel.html', function(panel) {
    log(Date.now())

    var backgroundPageConnection = chrome.runtime.connect();
    backgroundPageConnection.onMessage.addListener(function (message) {
      // Handle responses from the background page, if any
    });
    panel.onShown.addListener(function(window) {
      log('panel open')
    });
    panel.onHidden.addListener(function() {
      log('panel hide')
    });
  })
}

createPanel();
