import React from "react";
import { useParams } from "react-router-dom";

export default function District() {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-peach-700">District: {id}</h2>
      <p className="mt-2 text-gray-700">Top 10 places in this district will be listed here.</p>
    </div>
  );
}
