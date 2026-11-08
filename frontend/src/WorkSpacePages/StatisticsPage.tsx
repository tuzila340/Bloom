import Sidebar from "../Sidebar";
import "../Workspace.css";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { useEffect, useState } from "react";
import axios from "axios";

const chartConfig = {
  expenses: {
    label: "Expenses",
    color: "#97c459",
  },
  incomes: {
    label: "Incomes",
    color: "#c0dd97",
  },
} satisfies ChartConfig;

type ChartData = {
  month: string;
  expenses: number;
  incomes: number;
};

type StatData = {
  categoryId: number;
  categoryName: string;
  amountSpent: number;
};

function formatMonth(month: string) {
  // The API returns YYYY-MM; use a fixed day to avoid timezone shifts.
  const date = new Date(`${month}-01T00:00:00`);
  return Number.isNaN(date.getTime())
    ? month
    : date.toLocaleDateString("en-US", { month: "long" });
}

function StatisticsPage() {
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [statData, setStatData] = useState<StatData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [chartResponse, statResponse] = await Promise.all([
          axios.get<ChartData[]>("http://localhost:5277/chart", {
            withCredentials: true,
          }),
          axios.get<StatData[]>("http://localhost:5277/stat", {
            withCredentials: true,
          }),
        ]);

        setChartData(chartResponse.data);
        setStatData(statResponse.data);
      } catch (error) {
        console.error("Error fetching statistics data:", error);
        setChartData([]);
        setStatData([]);
      }
    };

    void fetchData();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="main">
        {/* <!-- STATISTICS --> */}
        <div className="page-block visible" id="page-statistics">
          <div className="page-head">
            <h1>statistics</h1>
          </div>

          <div className="two-col">
            <div className="card chart-card">
              <p
                className="label"
                style={{ fontSize: 13, color: "var(--gray)", marginBottom: 4 }}
              >
                spending, last 6 months
              </p>
              <div className="chart-bars">
                <ChartContainer
                  config={chartConfig}
                  className="max-h-[175px] w-full"
                >
                  <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => formatMonth(String(value))}
                    />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar
                      dataKey="expenses"
                      fill="var(--color-expenses)"
                      radius={4}
                    />
                    <Bar
                      dataKey="incomes"
                      fill="var(--color-incomes)"
                      radius={4}
                    />
                  </BarChart>
                </ChartContainer>
              </div>
            </div>

            <div className="card">
              <p
                className="label"
                style={{ fontSize: 13, color: "var(--gray)", marginBottom: 14 }}
              >
                by category
              </p>
              <div className="category-list">
                {statData.map((category) => (
                  <div className="category-row" key={category.categoryId}>
                    <span
                      className="cat-dot"
                      style={{ background: "var(--sage-pale)" }}
                    />
                    <span className="cat-name">{category.categoryName}</span>
                    <span className="cat-amount">{category.amountSpent} $</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="stat-grid" style={{ marginTop: 20 }}>
          <div className="card">
            <p className="label">avg. daily spend</p>
            <p className="value">$55.30</p>
          </div>
          <div className="card">
            <p className="label">vs. last month</p>
            <p className="value" style={{ color: "var(--sage-deep)" }}>
              -12%
            </p>
          </div>
          <div className="card">
            <p className="label">top category</p>
            <p className="value">groceries</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatisticsPage;
