import React from 'react'
import faker from "faker";
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

function MainBar({report, year }) {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );
        const options = {
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: `Data Kunjungan Tahun ${year.year} Pada BPS Kota Banjarmasin`,
              color : 'gray',
              font: {
                size: 17
            }
            },
            legend: {
              display: true,
              position: "bottom",
              labels: {
                fontColor: "gray",
                fontSize: 15
              }}
          }
        };
        
        const labels = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Okt",
          "Nov",
          "Des"
        ];
        
        const data = {
          labels,
          datasets: [
            {
              label: "Total Kunjungan perbulan",
              data: report.map((n) => n),
              backgroundColor: "rgba(99,99,99)",
              borderColor: "rgba(255, 99, 132, 1)",
            }
          ]
        };
    return (
        
        <Bar
            options={options}
            data={data}
        />
     
    )
}

export default MainBar
