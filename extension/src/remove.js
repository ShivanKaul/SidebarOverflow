var hiring = document.getElementById("hireme");
var meta = document.getElementById("sidebar").children[1];
var hot_network_qs = document.getElementById("hot-network-questions");
var chat = document.getElementById("chat-feature");
var starred_posts = document.getElementById("starred-posts");

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
if (starred_posts) {
    starred_posts.parentNode.removeChild(starred_posts);
}
