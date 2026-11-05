import Sidebar from "../Sidebar";
import "../Workspace.css";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import { useState, useEffect } from "react";
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

function formatMonth(month: string) {
  // The API returns YYYY-MM; use a fixed day to avoid timezone shifts.
  const date = new Date(`${month}-01T00:00:00`);
  return Number.isNaN(date.getTime())
    ? month
    : date.toLocaleDateString("en-US", { month: "long" });
}

function StatisticsPage() {
  const [chartData, setChartData] = useState<ChartData[]>([]);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get<ChartData[]>(
          "http://localhost:5277/chart",
          { withCredentials: true },
        );

        setChartData(response.data);
      } catch (error) {
        console.error("Error fetching chart data:", error);
        setChartData([]);
      }
    };

    fetchChartData();
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
                <div className="category-row">
                  <span
                    className="cat-dot"
                    style={{ background: "var(--sage-deep)" }}
                  ></span>
                  <span className="cat-name">groceries</span>
                  <span className="cat-amount">$310</span>
                </div>
                <div className="category-row">
                  <span
                    className="cat-dot"
                    style={{ background: "var(--amber)" }}
                  ></span>
                  <span className="cat-name">dining out</span>
                  <span className="cat-amount">$180</span>
                </div>
                <div className="category-row">
                  <span
                    className="cat-dot"
                    style={{ background: "var(--blue)" }}
                  ></span>
                  <span className="cat-name">transport</span>
                  <span className="cat-amount">$95</span>
                </div>
                <div className="category-row">
                  <span
                    className="cat-dot"
                    style={{ background: "var(--purple)" }}
                  ></span>
                  <span className="cat-name">subscriptions</span>
                  <span className="cat-amount">$42</span>
                </div>
                <div className="category-row">
                  <span
                    className="cat-dot"
                    style={{ background: "var(--coral)" }}
                  ></span>
                  <span className="cat-name">other</span>
                  <span className="cat-amount">$65</span>
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
      </div>
    </>
  );
}

export default StatisticsPage;
