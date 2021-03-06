// see https://medium.com/@vickdayaram/using-chart-js-with-react-324b7fac8ee6
import React from "react";
import { Bar } from "react-chartjs-2";
import "./AnswerGraph.scss";
import "../../../styles/_variables.scss";

const AnswerGraph = props => {
  const { a, b, c, d } = props.answers;
  const data = {
    labels: ["", "", "", ""],
    datasets: [{
      label: false,
      backgroundColor: ['#24c6dc', '#edde5d', '#71b280','#ed4264'],
      borderColor: 'white',
      data: [a, b, c, d ],
    }]
}
  const options = {
    responsive: false,
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem) {
          return tooltipItem.yLabel;
        },
      }
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            stepSize: 1
          }
        }
      ]
    }
  };
  return (
    <div className="chart-parent">
      <Bar data={data} options={options} height={300} width={550} />
    </div>
  );
};

export default AnswerGraph;
