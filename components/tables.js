import React from "react";

// Define your data array
const dataArray = [
  ["Outstanding", "★★★★★", "≥85"],
  ["Excellent", "☆★★★★", "≥70"],
  ["Very good", "☆☆★★★", "≥55"],
  ["Good", "☆☆☆★★", "≥55"],
  ["Pass", "☆☆☆☆★", "≥45"],
  ["Unclassified", "☆☆☆☆☆", "≥30"],
];

const Table = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr className="bg-secondary text-white font-semibold ">
          <th className="w-1/4 p-2 text-base">BREEAM</th>
          <th className="w-1/4 p-2 text-base">Rating</th>
          <th className="w-1/4 p-2 text-base">%Score</th>
        </tr>
      </thead>
      <tbody>
        {dataArray.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td className="w-1/4 p-3 text-sm border-2 border-r-0 font-semibold">
              {row[0]}
            </td>
            <td className="w-1/4 p-3 text-base border-2 font-semibold text-center text-secondary">
              {row[1]}
            </td>
            <td className="w-1/4 p-3 text-sm border-2 font-semibold">
              {row[2]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
