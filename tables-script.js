// Function to Sort Table
function sortTable(columnIndex) {
    let table = document.querySelector(".styled-table tbody");
    let rows = Array.from(table.rows);

    let sortedRows = rows.sort((rowA, rowB) => {
        let cellA = rowA.cells[columnIndex].textContent.trim().toLowerCase();
        let cellB = rowB.cells[columnIndex].textContent.trim().toLowerCase();
        
        return cellA.localeCompare(cellB);
    });

    table.innerHTML = "";
    sortedRows.forEach(row => table.appendChild(row));
}

// Copy Code Function
function copyCode() {
    let codeText = document.getElementById("sample-code").innerText;
    navigator.clipboard.writeText(codeText).then(() => {
        alert("Code copied to clipboard!");
    });
}
