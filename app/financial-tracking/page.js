'use client';

import React, { useEffect, useState } from 'react';
import FinancialTrackingTable from '../components/FinancialTrackingTable';
const FinancialTrackingPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/sampleData.json')
      .then((response) => response.json())
      .then((data) => setData(data.financialTracking));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Financial Tracking</h2>
      {data ? (
        <FinancialTrackingTable data={data} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default FinancialTrackingPage;
