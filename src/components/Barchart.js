import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as Chartjs} from 'chart.js/auto'

const Barchart = ({chartData}) => {
  return <Bar  data={chartData}  />
};

export default Barchart;
