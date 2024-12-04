import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Tooltip } from "react-tooltip";

const Heatmap = ({ data }) => {
    const today = new Date();

    return (
        <div>
            <h2>Daily Spending Patterns</h2>
            <CalendarHeatmap
                startDate={new Date("2023-12-31")}
                endDate={today}
                values={data.map((item) => ({
                    date: item.date,
                    count: item.amount,
                    mostExpensiveItem: item.mostExpensiveItem,
                }))}
                classForValue={(value) => {
                    if (!value) return "color-empty";
                    const amount = value.count;
                    if (amount > 100) return "color-high";
                    if (amount > 40) return "color-medium";
                    return "color-low";
                }}
                tooltipDataAttrs={(value) => ({
                    "data-tooltip-id": "spending-tooltip",
                    "data-tooltip-content": value
                        ? `Date: ${value.date} | Amount: $${value.count} | Most Expensive: ${value.mostExpensiveItem}`
                        : null,
                })}
            />
            <Tooltip id="spending-tooltip" />
        </div>
    );
};

export default Heatmap;



