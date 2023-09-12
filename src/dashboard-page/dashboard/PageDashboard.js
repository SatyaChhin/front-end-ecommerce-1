import React from "react";
import { Chart } from "react-google-charts";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const data1 = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  title: "My Daily Activities",
  is3D: true,
};

export const options1 = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export default function PageDashboard() {
  return (
    <Row>
      <Col sm={6}>
          <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"400px"}
          />
      </Col>
      <Col>
          <Chart
            chartType="Bar"
            width="100%"
            height="400px"
            data={data1}
            options={options1}
          />
      </Col>
    </Row>
  );
}
