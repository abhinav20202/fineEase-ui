document.addEventListener("DOMContentLoaded", () => {
    // Fetch accounts dynamically
    fetchAccounts();

    function fetchAccounts() {
        // Dummy accounts for now
        const accounts = [
            { id: 1, name: "Savings Account" },
            { id: 2, name: "Checking Account" },
            { id: 3, name: "Credit Card" },
        ];

        const accountsList = document.getElementById("accountsList");
        accounts.forEach(account => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<a class="dropdown-item" href="#">${account.name}</a>`;
            accountsList.appendChild(listItem);
        });
    }

    // Populate Charts (using Chart.js)
    const transactionsChart = new Chart(document.getElementById("transactionsChart"), {
        type: "line",
        data: {
            labels: ["Apr 01", "Apr 02", "Apr 03", "Apr 04", "Apr 05"],
            datasets: [
                { label: "Income", data: [500, 800, 400, 700, 1200], borderColor: "#4caf50", fill: false },
                { label: "Expenses", data: [300, 600, 200, 500, 900], borderColor: "#f44336", fill: false },
            ],
        },
    });

    const categoriesChart = new Chart(document.getElementById("categoriesChart"), {
        type: "pie",
        data: {
            labels: ["Rent", "Utilities", "Groceries", "Entertainment"],
            datasets: [
                {
                    data: [40, 20, 25, 15],
                    backgroundColor: ["#ff7043", "#42a5f5", "#66bb6a", "#ab47bc"],
                },
            ],
        },
    });
});
