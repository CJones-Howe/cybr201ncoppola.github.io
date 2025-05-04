document.getElementById('runScriptButton').addEventListener('click', function() {
    // Create the table as an HTML string
    const tableHTML = `
        <table>
            <tr>
                <th colspan="2">Developed Documentation for Linux</th>
            </tr>
            <tr>
                <td><a href="5_min_plan.pdf">Linux 5 Minute Plan</a></td>
                <td><a href="iptables_Guide.pdf">IPTables Guide</a></td>
            </tr>
        </table>
    `;

    // Find or create a container for the table
    let container = document.getElementById('tableContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'tableContainer';
        document.body.appendChild(container);
    }

    // Insert the table into the container
    container.innerHTML = tableHTML;
});