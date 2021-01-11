getOptions(function (items) {
  if (items.enableSidebarOverflow) removeSidebars(items);
});

function removeSidebars(options) {
  let hiring = document.getElementById("hireme");
  let meta = document.querySelector('[data-tracker="cb=1"]');
  let hot_network_qs = document.getElementById("hot-network-questions");
  let chat = document.getElementsByClassName("js-sidebar-zone");
  if (options.hideSidebarOverflowHire && hiring) {
    hiring.parentNode.removeChild(hiring);
  }
  if (options.hideSidebarOverflowMeta && meta) {
    meta.parentNode.removeChild(meta);
  }
  if (options.hideSidebarOverflowHqs && hot_network_qs) {
    hot_network_qs.parentNode.removeChild(hot_network_qs);
  }
  if (options.hideSidebarOverflowChat && chat.length) {
    chat.item(0).parentNode.removeChild(chat.item(0));
  }
}
