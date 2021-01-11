// Saves options to chrome.storage
function save_options() {
  const values = options.map((o) => document.getElementById(o).checked);
  const settings = values.reduce(function (result, val, index) {
    result[options[index]] = val;
    return result;
  }, {});
  chrome.storage.sync.set(settings, function () {
    // Update status to let user know options were saved.
    const status = document.getElementById("status");
    status.textContent = "Options saved.";
    setTimeout(function () {
      status.textContent = "";
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  getOptions(function (items) {
    for (const option of options) {
      document.getElementById(option).checked = items[option];
    }
  });
}

document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
