var hiring = document.getElementById("hireme");
var meta = document.getElementsByClassName("module community-bulletin")[0];
var hot_network_qs = document.getElementById("hot-network-questions");
var chat = document.getElementById("chat-feature");

try {
    hiring.parentNode.removeChild(hiring);
} catch (e) {}
try {
    hot_network_qs.parentNode.removeChild(hot_network_qs);

} catch (e) {}
try {
    chat.parentNode.removeChild(chat);

} catch (e) {}
try {
    meta.parentNode.removeChild(meta);
} catch (e) {}