document.addEventListener("DOMContentLoaded", () => {
    const transactionsTableBody = document.getElementById("transactionsTableBody");
    const searchInput = document.getElementById("searchInput");

    // Transactions array to track data
    let transactions = [];
    let editIndex = null; // Track the index of the transaction being edited

    // Fetch and populate transactions
    async function fetchTransactions() {
        try {
            const response = await fetch("/api/transactions");
            if (response.ok) {
                transactions = await response.json();
                populateTransactionsTable(transactions);
            } else {
                console.error("Failed to fetch transactions.");
            }
        } catch (error) {
            console.error("Error fetching transactions:", error);
        }
    }

    // Populate transactions table
    function populateTransactionsTable(transactions) {
        transactionsTableBody.innerHTML = ""; // Clear previous rows
        transactions.forEach((transaction, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${transaction.date}</td>
                <td>${transaction.category}</td>
                <td>${transaction.payee}</td>
                <td class="text-${transaction.amount > 0 ? "success" : "danger"}">$${transaction.amount.toFixed(2)}</td>
                <td>${transaction.account}</td>
                <td>
                    <button class="btn btn-sm btn-outline-primary" onclick="editTransaction(${index})">Edit</button>
                    <button class="btn btn-sm btn-outline-danger" onclick="deleteTransaction(${index})">Delete</button>
                </td>
            `;
            transactionsTableBody.appendChild(row);
        });
    }

    // Add or update transaction
    document.getElementById("addTransactionForm").addEventListener("submit", (e) => {
        e.preventDefault();
        const date = document.getElementById("transactionDate").value;
        const category = document.getElementById("transactionCategory").value;
        const payee = document.getElementById("transactionPayee").value;
        const amount = parseFloat(document.getElementById("transactionAmount").value);
        const account = document.getElementById("transactionAccount").value;

        const transaction = { date, category, payee, amount, account };

        if (editIndex !== null) {
            // Update the existing transaction
            transactions[editIndex] = transaction;
            editIndex = null; // Reset editIndex after updating
        } else {
            // Add a new transaction
            transactions.push(transaction);
        }

        populateTransactionsTable(transactions);

        const addTransactionModal = bootstrap.Modal.getInstance(document.getElementById("addNewTransactionModal"));
        addTransactionModal.hide();
        e.target.reset();
    });

    // Edit transaction functionality
    window.editTransaction = (index) => {
        const transaction = transactions[index];
        editIndex = index; // Set the index of the transaction being edited

        // Populate the form with the existing transaction data
        document.getElementById("transactionDate").value = transaction.date;
        document.getElementById("transactionCategory").value = transaction.category;
        document.getElementById("transactionPayee").value = transaction.payee;
        document.getElementById("transactionAmount").value = transaction.amount;
        document.getElementById("transactionAccount").value = transaction.account;

        // Show modal
        const addTransactionModal = new bootstrap.Modal(document.getElementById("addNewTransactionModal"));
        addTransactionModal.show();
    };

    // Delete transaction functionality
    window.deleteTransaction = (index) => {
        if (confirm("Are you sure you want to delete this transaction?")) {
            transactions.splice(index, 1);
            populateTransactionsTable(transactions);
        }
    };

    // Import transactions from CSV
    document.getElementById("importBtn").addEventListener("click", () => {
        document.getElementById("importFile").click();
    });

    document.getElementById("importFile").addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const rows = event.target.result.split("\n").slice(1); // Skip header row
                rows.forEach((row) => {
                    const [date, category, payee, amount, account] = row.split(",");
                    if (date && category && payee && amount && account) {
                        transactions.push({
                            date: date.trim(),
                            category: category.trim(),
                            payee: payee.trim(),
                            amount: parseFloat(amount),
                            account: account.trim(),
                        });
                    }
                });
                populateTransactionsTable(transactions);
            };
            reader.readAsText(file);
        }
    });

    // Search functionality
    document.getElementById("searchButton").addEventListener("click", () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredTransactions = transactions.filter((transaction) => {
            return (
                transaction.date.toLowerCase().includes(searchTerm) ||
                transaction.category.toLowerCase().includes(searchTerm) ||
                transaction.payee.toLowerCase().includes(searchTerm) ||
                transaction.account.toLowerCase().includes(searchTerm) ||
                transaction.amount.toString().toLowerCase().includes(searchTerm)
            );
        });
        populateTransactionsTable(filteredTransactions);
    });

    // Initial fetch
    fetchTransactions();
});
