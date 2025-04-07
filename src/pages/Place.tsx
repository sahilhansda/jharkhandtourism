import React from "react";
import { useParams } from "react-router-dom";
import { DistrictDetail } from '@/pages/DistrictDetail';

export default function Place() {
  const { id } = useParams();
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-peach-700">Place: {id}</h2>
      <p className="mt-2 text-gray-700">Details about this tourist place will appear here.</p>
    </div>
  );
}
