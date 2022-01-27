import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as Chartjs} from 'chart.js/auto'

const Piechart = ({chartData}) => {
  return <Pie  data={chartData}  />
};

export default Piechart;