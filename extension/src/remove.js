var hiring = document.getElementById("hireme");
var meta = document.getElementsByClassName("module community-bulletin");
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
    delete_all(meta);

} catch (e) {}

// Delete all matched nodes + their children
function delete_all(collection) {
    for (var i = 0; i < collection.length; i++) {
        // Delete all children (so sad)
        while (collection[i].firstChild) {
            collection[i].removeChild(collection[i].firstChild);
        }
    }
}
