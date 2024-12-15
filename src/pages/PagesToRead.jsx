import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { BookContext } from "../context/BookProvider";
import CustomBarShape from "../components/CustomBarShape";

const PagesToRead = () => {
  const { readBook } = useContext(BookContext);
  const chartData = readBook.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));
  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#8dd1e1"];
  return (
    <div className="container mx-auto py-20 -z-10 text-center">
      <h2 className="text-4xl font-semibold text-center border-b-2 border-sky-500 pb-2 inline-block">
        Read <span className="text-sky-500">Book </span> Chart
      </h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pages" fill="#8884d8" shape={<CustomBarShape />}>
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
