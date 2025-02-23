import React from "react";
import Heatmap from "./Heatmap";
import "./Heatmap.css";

const spendingData = [
    { date: "2024-01-11", amount: 33.99, mostExpensiveItem: "Medicine"},
    { date: "2024-01-16", amount: 2.50, mostExpensiveItem: "Drink" },
    { date: "2024-01-26", amount: 1.70, mostExpensiveItem: "Snacks" },
    { date: "2024-01-29", amount: 1.70, mostExpensiveItem: "Snacks" },
    { date: "2024-01-30", amount: 13.30, mostExpensiveItem: "Lunch" },
    { date: "2024-01-31", amount: 45.26, mostExpensiveItem: "MTA Card" },
    { date: "2024-02-01", amount: 5.10, mostExpensiveItem: "Drink" },
    { date: "2024-02-02", amount: 13.02, mostExpensiveItem: "Lunch" },
    { date: "2024-02-05", amount: 45.02, mostExpensiveItem: "Dinner" },
    { date: "2024-02-06", amount: 5.20, mostExpensiveItem: "Snack" },
    { date: "2024-02-07", amount: 7.60, mostExpensiveItem: "Snack" },
    { date: "2024-02-08", amount: 5.35, mostExpensiveItem: "Drink" },
    { date: "2024-02-14", amount: 29.37, mostExpensiveItem: "Amazon Package" },
    { date: "2024-02-15", amount: 3.40, mostExpensiveItem: "Snack" },
    { date: "2024-02-16", amount: 2.60, mostExpensiveItem: "Drink" },
    { date: "2024-02-21", amount: 9.30, mostExpensiveItem: "Snack" },
    { date: "2024-02-22", amount: 8.40, mostExpensiveItem: "Drink" },
    { date: "2024-02-23", amount: 1.70, mostExpensiveItem: "Snack" },
    { date: "2024-02-26", amount: 2.50, mostExpensiveItem: "Drink" },
    { date: "2024-02-28", amount: 3.40, mostExpensiveItem: "Snack" },
    { date: "2024-02-29", amount: 33.20, mostExpensiveItem: "MTA Card" },
    { date: "2024-03-04", amount: 13.46, mostExpensiveItem: "Breakfast" },
    { date: "2024-03-05", amount: 2.95, mostExpensiveItem: "Drink" },
    { date: "2024-03-06", amount: 1.70, mostExpensiveItem: "Snack" },
    { date: "2024-03-07", amount: 1.70, mostExpensiveItem: "Snack" },
    { date: "2024-03-08", amount: 10.15, mostExpensiveItem: "Drink" },
    { date: "2024-03-12", amount: 5.95, mostExpensiveItem: "Drink" },
    { date: "2024-03-13", amount: 3.40, mostExpensiveItem: "Snack" },
    { date: "2024-03-14", amount: 5.35, mostExpensiveItem: "Snack" },
    { date: "2024-03-15", amount: 9.20, mostExpensiveItem: "Drink" },
    { date: "2024-03-18", amount: 27.73, mostExpensiveItem: "Birthday Gift" },
    { date: "2024-03-20", amount: 2.50, mostExpensiveItem: "Drink" },
    { date: "2024-03-21", amount: 56.36, mostExpensiveItem: "Dinner" },
    { date: "2024-03-27", amount: 9.20, mostExpensiveItem: "Drink" },
    { date: "2024-03-28", amount: 5.90, mostExpensiveItem: "Snack" },
    { date: "2024-03-29", amount: 54.83, mostExpensiveItem: "Zelle" },
    { date: "2024-04-02", amount: 4.30, mostExpensiveItem: "Snack" },
    { date: "2024-04-03", amount: 5.90, mostExpensiveItem: "Snack" },
    { date: "2024-04-04", amount: 8.40, mostExpensiveItem: "Snack" },
    { date: "2024-04-05", amount: 7.50, mostExpensiveItem: "Drink" },
    { date: "2024-04-08", amount: 38.16, mostExpensiveItem: "Zelle" },
    { date: "2024-04-10", amount: 7.60, mostExpensiveItem: "Snack" },
    { date: "2024-04-11", amount: 2.50, mostExpensiveItem: "Drink" },
    { date: "2024-04-12", amount: 14.20, mostExpensiveItem: "Snack" },
    { date: "2024-04-16", amount: 3.11, mostExpensiveItem: "Groceries" },
    { date: "2024-04-17", amount: 12.60, mostExpensiveItem: "Snack" },
    { date: "2024-04-18", amount: 7.00, mostExpensiveItem: "Snack" },
    { date: "2024-04-23", amount: 9.00, mostExpensiveItem: "Zelle" },
    { date: "2024-05-06", amount: 116.34, mostExpensiveItem: "Zelle" },
    { date: "2024-05-13", amount: 17.55, mostExpensiveItem: "Fish" },
    { date: "2024-05-14", amount: 5.00, mostExpensiveItem: "Snack" },
    { date: "2024-05-15", amount: 6.25, mostExpensiveItem: "Snack" },
    { date: "2024-05-16", amount: 6.25, mostExpensiveItem: "Snack" },
    { date: "2024-05-28", amount: 25.01, mostExpensiveItem: "Amazon Package" },
    { date: "2024-06-03", amount: 99.75, mostExpensiveItem: "Lunch" },
    { date: "2024-06-04", amount: 36.65, mostExpensiveItem: "Movies" },
    { date: "2024-06-05", amount: 29.00, mostExpensiveItem: "MTA Card" },
    { date: "2024-06-07", amount: 16.00, mostExpensiveItem: "Zelle" },
    { date: "2024-06-13", amount: 6.00, mostExpensiveItem: "Zelle" },
    { date: "2024-06-17", amount: 2.17, mostExpensiveItem: "Play Store App" },
    { date: "2024-06-24", amount: 11.00, mostExpensiveItem: "Doctor Office" },
    { date: "2024-06-27", amount: 21.67, mostExpensiveItem: "Movies" },
    { date: "2024-07-09", amount: 64.03, mostExpensiveItem: "Movies" },
    { date: "2024-07-10", amount: 25.25, mostExpensiveItem: "Movies" },
    { date: "2024-07-15", amount: 35.16, mostExpensiveItem: "Amazon Package" },
    { date: "2024-07-19", amount: 13.05, mostExpensiveItem: "Amazon Package" },
    { date: "2024-07-22", amount: 5.00, mostExpensiveItem: "Zelle" },
    { date: "2024-07-29", amount: 48.46, mostExpensiveItem: "Museum of the Bible Washington Ticket" },
    { date: "2024-07-31", amount: 41.76, mostExpensiveItem: "Movies" },
    { date: "2024-08-01", amount: 8.08, mostExpensiveItem: "Drink" },
    { date: "2024-08-02", amount: 42.25, mostExpensiveItem: "Movies" },
    { date: "2024-08-05", amount: 54.83, mostExpensiveItem: "Dinner" },
    { date: "2024-08-09", amount: 35.61, mostExpensiveItem: "Dinner" },
    { date: "2024-08-12", amount: 35.64, mostExpensiveItem: "Smorgasburg Food Fair" },
    { date: "2024-08-13", amount: 14.50, mostExpensiveItem: "MTA Card" },
    { date: "2024-08-26", amount: 19.33, mostExpensiveItem: "Smorgasburg Food Fair" },
    { date: "2024-08-28", amount: 24.50, mostExpensiveItem: "Smorgasburg Food Fair" },
    { date: "2024-08-30", amount: 6.65, mostExpensiveItem: "Snack" },
    { date: "2024-09-03", amount: 42.07, mostExpensiveItem: "Sight and Sound" },
    { date: "2024-09-05", amount: 2.65, mostExpensiveItem: "Drink" },
    { date: "2024-09-06", amount: 11.94, mostExpensiveItem: "Snack" },
    { date: "2024-09-10", amount: 4.00, mostExpensiveItem: "Snack" },
    { date: "2024-09-11", amount: 17.27, mostExpensiveItem: "Dinner" },
    { date: "2024-09-12", amount: 5.80, mostExpensiveItem: "MTA Card" },
    { date: "2024-09-13", amount: 11.59, mostExpensiveItem: "Snack" },
    { date: "2024-09-16", amount: 8.45, mostExpensiveItem: "MTA Card" },
    { date: "2024-09-18", amount: 5.97, mostExpensiveItem: "Drink" },
    { date: "2024-09-23", amount: 2.65, mostExpensiveItem: "Snack" },
    { date: "2024-09-30", amount: 34.36, mostExpensiveItem: "Dinner" },
    { date: "2024-10-02", amount: 5.97, mostExpensiveItem: "Drink" },
    {date: "2024-10-02", amount: 21.67, mostExpensiveItem: "Movies" },
    {date: "2024-10-07", amount: 98.00, mostExpensiveItem: "Dinner" },
    {date: "2024-10-09", amount: 2.60, mostExpensiveItem: "Snack" },
    {date: "2024-10-10", amount: 21.38, mostExpensiveItem: "Lunch" },
    
];

function App() {
    return (
        <div className="App">
            <h1>Spending Heatmap</h1>
            <Heatmap data={spendingData} />
        </div>
    );
}

export default App;
