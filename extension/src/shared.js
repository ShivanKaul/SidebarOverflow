const options = [
  "enableSidebarOverflow",
  "hideSidebarOverflowMeta",
  "hideSidebarOverflowChat",
  "hideSidebarOverflowHqs",
  "hideSidebarOverflowHire",
];

function getOptions(onThen) {
  chrome.storage.sync.get(
    {
      enableSidebarOverflow: true,
      hideSidebarOverflowMeta: true,
      hideSidebarOverflowChat: true,
      hideSidebarOverflowHire: true,
      hideSidebarOverflowHqs: true,
    },
    (items) => onThen(items)
  );
}
