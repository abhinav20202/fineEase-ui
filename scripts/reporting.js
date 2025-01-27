$(document).ready(function () {
    // Handle form submission
    $("#reportFiltersForm").on("submit", function (e) {
        e.preventDefault();

        // Collect filter values
        const filters = {
            fromDate: $("#fromDate").val(),
            toDate: $("#toDate").val(),
            category: $("#categoryFilter").val(),
            afterBudget: $("#afterBudget").is(":checked"),
            inBudget: $("#inBudget").is(":checked"),
            highestSpentDay: $("#highestSpentDay").is(":checked"),
            lowestSpentDay: $("#lowestSpentDay").is(":checked"),
            averageSpent: $("#averageSpent").is(":checked"),
            spendingHabit: $("#spendingHabit").is(":checked"),
        };

        console.log("Filters applied:", filters);

        // You can now use AJAX to send the filters to the backend
        fetchReports(filters);
    });

    // Example function to simulate fetching reports
    function fetchReports(filters) {
        // Simulate AJAX request (Replace this with actual API call)
        console.log("Fetching reports with filters:", filters);

        // Update DOM with a loader
        const loaderHtml = `<p class="text-center">Fetching reports... Please wait.</p>`;
        $("#reportContainer").html(loaderHtml);

        // Simulate a delay to show reports
        setTimeout(() => {
            const reportHtml = `
                <div class="alert alert-success text-center">Reports generated successfully for the selected filters.</div>
            `;
            $("#reportContainer").html(reportHtml);
        }, 2000);
    }
});
