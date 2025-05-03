function copyToClipboard(elementId) {
    var copyText = document.querySelector(elementId);
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    alert("Code copied to clipboard!");
}
