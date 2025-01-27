// document.getElementById("applyFiltersBtn").addEventListener("click", function () {
//     const fromDate = document.getElementById("fromDate").value;
//     const toDate = document.getElementById("toDate").value;
//     const expenseCategory = document.getElementById("expenseCategory").value;

//     const reportData = [
//         {
//             category: "Food",
//             totalSpent: "$300",
//             highestSpent: "$50",
//             lowestSpent: "$10",
//             averageSpent: "$30",
//         },
//         {
//             category: "Travel",
//             totalSpent: "$500",
//             highestSpent: "$100",
//             lowestSpent: "$20",
//             averageSpent: "$50",
//         },
//         {
//             category: "Shopping",
//             totalSpent: "$200",
//             highestSpent: "$70",
//             lowestSpent: "$15",
//             averageSpent: "$35",
//         },
//     ];

//     const reportTableBody = document.getElementById("reportTableBody");
//     reportTableBody.innerHTML = "";

//     reportData.forEach((data) => {
//         if (expenseCategory === "all" || expenseCategory.toLowerCase() === data.category.toLowerCase()) {
//             const row = document.createElement("tr");
//             row.innerHTML = `
//                 <td>${data.category}</td>
//                 <td>${data.totalSpent}</td>
//                 <td>${data.highestSpent}</td>
//                 <td>${data.lowestSpent}</td>
//                 <td>${data.averageSpent}</td>
//             `;
//             reportTableBody.appendChild(row);
//         }
//     });

//     document.getElementById("reportSection").style.display = "block";
// });
document.addEventListener("DOMContentLoaded", () => {
    const applyFiltersBtn = document.getElementById("applyFiltersBtn");
    const reportSection = document.getElementById("reportSection");
    const reportTableBody = document.getElementById("reportTableBody");
    const totalExpenseCard = document.getElementById("totalExpenseCard");

    // Dummy data for the report table
    const reportData = [
        {
            category: "Food",
            totalSpent: 300,
            highestSpent: 50,
            lowestSpent: 10,
            averageSpent: 30,
        },
        {
            category: "Travel",
            totalSpent: 500,
            highestSpent: 120,
            lowestSpent: 20,
            averageSpent: 50,
        },
        {
            category: "Shopping",
            totalSpent: 400,
            highestSpent: 70,
            lowestSpent: 15,
            averageSpent: 40,
        },
        {
            category: "Entertainment",
            totalSpent: 200,
            highestSpent: 60,
            lowestSpent: 10,
            averageSpent: 25,
        },
        {
            category: "Utilities",
            totalSpent: 250,
            highestSpent: 80,
            lowestSpent: 30,
            averageSpent: 35,
        },
        {
            category: "Rent",
            totalSpent: 1000,
            highestSpent: 1000,
            lowestSpent: 1000,
            averageSpent: 1000,
        },
    ];

    // Function to populate the report table
    function populateReportTable(data) {
        reportTableBody.innerHTML = ""; // Clear the table body
        data.forEach((item) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.category}</td>
                <td>$${item.totalSpent.toFixed(2)}</td>
                <td>$${item.highestSpent.toFixed(2)}</td>
                <td>$${item.lowestSpent.toFixed(2)}</td>
                <td>$${item.averageSpent.toFixed(2)}</td>
            `;
            reportTableBody.appendChild(row);
        });
    }

    // Function to calculate the total expenses
    function calculateTotalExpenses(data) {
        return data.reduce((sum, item) => sum + item.totalSpent, 0);
    }

    // Event listener for the "Apply Filters" button
    applyFiltersBtn.addEventListener("click", () => {
        // Display the report section
        reportSection.style.display = "block";

        // Populate the table and calculate total expenses
        populateReportTable(reportData);
        const totalExpenses = calculateTotalExpenses(reportData);
        totalExpenseCard.innerHTML = `<h5 class="text-center">Total Expenses: $${totalExpenses.toFixed(2)}</h5>`;
    });

    document.getElementById("downloadReportBtn").addEventListener("click", function () {
        // Show a confirmation dialog
        const userChoice = confirm("Do you want to download the report as Excel? Click 'Cancel' to download as PDF.");
        if (userChoice) {
            // User chose Excel
            downloadExcel();
        } else {
            // User chose PDF
            downloadPDF();
        }
     });
     function downloadExcel() {
        alert("Downloading Excel file...");
        // Implement the logic to generate and download an Excel file here
     }
     function downloadPDF() {
        alert("Downloading PDF file...");
        // Implement the logic to generate and download a PDF file here
     }
});
