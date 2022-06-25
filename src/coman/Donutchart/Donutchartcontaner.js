import React from "react";
import Donutchart from "./Donutchart";
const Donutchartcontaner = ({ options, labels, series }) => {
  //   const options = {
  //     series: [5, 2, 4],
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     legend: {
  //       show: false,
  //     },
  //     plotOptions: {
  //       pie: {
  //         donut: {
  //           size: "80px",
  //           labels: {
  //             show: true,
  //             total: {
  //               show: true,
  //               // showAlways: true,
  //             },
  //           },
  //         },
  //       },
  //     },
  //   };
  console.log("labelsdc", labels);
//   const data = {
//     series: [5, 2, 4],
//     dataLabels: {
//       enabled: false,
//     },
//     labels: ["Daskops", "Tablets", "Mobiles"],

//     plotOptions: {
//       pie: {
//         donut: {
//           size: "80px",
//           labels: {
//             show: true,
//             SessionDevice: {
//               show: true,
//               showAlways: true,
//             },
//           },
//         },
//       },
//     },
//   };
  //   const series = [5, 2, 4];
  const dataseries = [0, 0, 0];
  return (
    <div>
      <Donutchart options={options} series={series} labels={labels} />
    </div>
  );
};

export default Donutchartcontaner;
