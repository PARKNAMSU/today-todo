import React, { useState } from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {
  TTButton,
  TodoContainer,
  TodoBox,
  TodoContainerHorizen,
} from "../../style/styleModules";
import { useNavigate } from "react-router-dom";
import MarkdownView from "react-showdown";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Achievement Rate",
    },
  },
  scales: {
    yAxis: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 100,
        callback: (value, index, values) => {
          return value + "%";
        },
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "my achievement rate",
      data: labels.map(() => Math.random() * (100 - 0) + 0),
      borderColor: "#74513e",
      backgroundColor: "inherit",
    },
  ],
};
const LineDiv = styled.div``;
const SelectDiv = styled.div`
  justify-content: ${(props) => (props.isLeft ? "start" : "end")};
`;
const TodoListBox = styled(TodoBox)`
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  @media screen and (max-width: 968px) {
    width: 100%;
  }
  & > h1 {
    margin-bottom: 15px;
  }
  & > div {
  }
  ${LineDiv} {
    width: 100%;
    height: 80%;
    display: flex;
  }
  ${SelectDiv} {
    width: 100%;
    display: flex;

    & > p {
      font-size: 15px;
      padding: 1.2em 1em;
    }
    & > select {
      border: none;
      color: #b2876f;
      font-size: 15px;
    }
    & > input {
      width: 16%;
      border: 2px solid #b2876f;
      border: none;
      color: #b2876f;
      font-size: 15px;
      @media screen and (max-width: 968px) {
        width: 30%;
      }
    }
  }
`;
const DetailDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  & > div {
    width: 45%;

    & > table {
      & > thead {
        & > tr {
          & > th {
            font-size: 15px;
            background-color: #f0b495;
          }
        }
      }
      & > tbody {
        & > tr {
          & > td {
            font-size: 15px;
          }
          & > td:first-child {
            background-color: #f0b495;
          }
        }
      }
    }
  }
`;

const Stats = () => {
  let [howVisible, setHowVisible] = useState("y");
  const selectHowVisibleHandle = (e) => {
    setHowVisible(e.target.value);
  };
  const dateSelectHandle = (e) => {
    console.log(e.target.value);
  };
  return (
    <TodoContainerHorizen>
      <TodoListBox width={"75%"} height={"100%"} bgColor={"#f5f3ef"}>
        <h1>Achievement Rate Chart</h1>
        <SelectDiv isLeft={false}>
          {howVisible === "m" ? (
            <input type="month" onChange={dateSelectHandle}></input>
          ) : howVisible === "w" ? (
            <input type="week" onChange={dateSelectHandle}></input>
          ) : (
            <select>
              {[2022, 2021, 2020, 2019, 2018, 2017, 2016].map((item) => (
                <option value={item}>{item}</option>
              ))}
            </select>
          )}
        </SelectDiv>
        <SelectDiv isLeft={true}>
          <p>how show:</p>
          <select onChange={selectHowVisibleHandle}>
            <option value={"y"}>Year</option>
            <option value={"m"}>Month</option>
            <option value={"w"}>Week</option>
          </select>
        </SelectDiv>
        <LineDiv>
          <Line data={data} options={options}></Line>
        </LineDiv>
      </TodoListBox>
      <br />
      <TodoListBox
        width={"75%"}
        height={"100%"}
        marginTop={"3em"}
        marginBottom={"3em"}
        bgColor={"#f5f3ef"}
      >
        <h1>세부 통계</h1>
        <DetailDiv>
          <div>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>all</th>
                  <th>complete</th>
                  <th>incomplete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>all</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>high</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>mid</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>low</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
        </DetailDiv>
      </TodoListBox>
    </TodoContainerHorizen>
  );
};

export default Stats;
