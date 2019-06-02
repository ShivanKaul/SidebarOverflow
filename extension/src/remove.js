var hiring = document.getElementById("hireme");
var meta = document.getElementById("sidebar").children[1];
var hot_network_qs = document.getElementById("hot-network-questions");
var chat = document.getElementById("chat-feature");

if (hiring) {
    hiring.parentNode.removeChild(hiring);
}
if (meta) {
    meta.parentNode.removeChild(meta);
}
if (hot_network_qs) {
    hot_network_qs.parentNode.removeChild(hot_network_qs);
}
if (chat) {
    chat.parentNode.removeChild(chat);
}
