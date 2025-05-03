
function copyCode() {
    const codeSnippet = document.getElementById("code-snippet").innerText;
    navigator.clipboard.writeText(codeSnippet).then(() => {
        alert("Code copied to clipboard!");
    }).catch(err => {
        console.error("Failed to copy text: ", err);
    });
}
function copyCode(button) {
    const codeBox = button.previousElementSibling;
    const textArea = document.createElement("textarea");
    textArea.value = codeBox.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
    button.textContent = "Copied!";
    setTimeout(() => { button.textContent = "Copy"; }, 1500);
}
