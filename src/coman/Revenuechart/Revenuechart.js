import React from "react";
import Chart from "react-apexcharts";

const Revenuechart = () => {
  const series = [
    {
      data: [21, 22, 10, 28, 16, 21, 13, 30],
    },
  ];
  const options = {
    chart: {
      height: 350,
      type: "bar",
      events: {
        click: function (chart, w, e) {
          // console.log(chart, w, e)
        },
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "45%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
  };
  return (
    <div>
      {" "}
      <Chart
        options={options}
        series={series}
        type="bar"
        width={"400px"}
        height={"300px"}
      />
    </div>
  );
};

export default Revenuechart;
