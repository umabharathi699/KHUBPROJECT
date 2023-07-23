import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import _ from 'lodash';

const ViewDataPage = () => {
  const [idcards, setIdcards] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8080/get-idcard');
        setIdcards(response.data.data.idcard);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  // Convert data for bar graph
  const barGraphData = idcards.map((idcard) => ({
    name: idcard.name,
    maths: idcard.maths,
    english: idcard.english,
    python:idcard.python,
  }));

  const groupedData = _.groupBy(barGraphData, 'name');
  const formattedData = Object.entries(groupedData).map(([name, data]) => ({
    name,
    maths: _.sumBy(data, 'maths'),
    english: _.sumBy(data, 'english'),
    python: _.sumBy(data, 'python'),
  }));

  return (
    <div>
      <h2>View Data Page</h2>
      <BarChart width={800} height={400} data={formattedData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="maths" fill="#8884d8" />
        <Bar dataKey="english" fill="#82ca9d" />
        <Bar dataKey="python" fill="#a52a2a" />
      </BarChart>
    </div>
  );
};

export default ViewDataPage;
