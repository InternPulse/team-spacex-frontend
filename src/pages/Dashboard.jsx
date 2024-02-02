// import React from "react";
import React from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { ChartDB } from "../ChartDB";
import "../styles/Dashboard.css";
import invoiceOutlineIcon from "../assets/Frame 109.svg";
import { IoIosHelpCircleOutline } from "react-icons/io";
import plusicon from "../assets/plusicon.svg";
import { useTable } from "react-table";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });
  const [chartOptions, setChartOptions] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isData, setIsData] = useState(null);
  // State to track loading state
  // const [loading, setLoading] = useState(true);
  // State to track errors, if any
  // const [error, setError] = useState(null);

  // useEffect(() => {
  // Function to fetch data from the API
  // const fetchData = async () => {
  // try {
  //   // Make a GET request to your API endpoint
  //   // const response = await axios.get('https://team-spacex-backend-mbhhb.ondigitalocean.app/swagger/?format=openapi#/definitions/NewCustomer');
  //   // console.log('Data from API:', response.data);
  //   // Set the fetched data to the state
  //   // setData(response.data);
  // } catch (error) {
  //   // Handle errors
  //   // setError(error);
  // } finally {
  //   // Set loading state to false once data is fetched or an error occurs
  //   // setLoading(false);
  // }
  // };

  // Call the fetchData function
  // fetchData();
  // }, []); // The empty dependency array ensures that the effect runs only once on mount

  // Render loading state
  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  // Render error state if an error occurs
  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }

  // Inside your Dashboard component

  const data = React.useMemo(
    () => [
      {
        period: "Today",
        sales: "NGN0.00",
        receipts: "NGN0.00",
        due: "NGN0.00",
      },
      {
        period: "This Week",
        sales: "NGN0.00",
        receipts: "NGN0.00",
        due: "NGN0.00",
      },
      {
        period: "This Month",
        sales: "NGN0.00",
        receipts: "NGN0.00",
        due: "NGN0.00",
      },
      {
        period: "This Quater",
        sales: "NGN0.00",
        receipts: "NGN0.00",
        due: "NGN0.00",
      },
      {
        period: "This Year",
        sales: "NGN0.00",
        receipts: "NGN0.00",
        due: "NGN0.00",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "period",
      },
      {
        Header: "SALES",
        accessor: "sales",
      },
      {
        Header: "RECEIPTS",
        accessor: "receipts",
      },
      {
        Header: "DUE",
        accessor: "due",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  useEffect(() => {
    const loadChartData = async () => {
      try {
        const apiData = await ChartDB();


      const currentYear = new Date().getFullYear();

      const labelsWithYear = apiData.labels.map(label => [label, currentYear.toString()]);

        const data = {
          labels: labelsWithYear,
          datasets: [
            {
              label: "Sales",
              data: apiData.sale,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
            {
              label: "Expenses",
              data: apiData.expenses,
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        };

        setChartData(data);
        setChartOptions({
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Sales and Expenses",
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1000,
                callback: function (value) {
                  return value / 1000 + "k";
                },
              },
              min: 0,
              max: 5000,
            },
          },
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadChartData();
  }, []);

  return (
    <div className="dashboard-container container mx-auto py-3 w-full">
      <main className="main-content">
        <div className="welcome-user">
          <span>
            <img src={invoiceOutlineIcon} alt="" />
            <p>Hello 👋 , John</p>
          </span>
          <button className="home-btn home-btn-blue accent">
            Create new Invoice
          </button>
        </div>
        <section className="receivables rounded-lg border mb-12">
          <div className="border-b bg-custom2">
            <div className="flex justify-between p-4">
              <div className="flex gap-1">
                <h2 className="font-bold text-xl">Total Receivables</h2>
                <div className="pt-2">
                  <IoIosHelpCircleOutline />
                </div>
              </div>
              <div className="flex gap-1">
                <div className="bg-custom1 plus-icon-body flex items-center justify-center">
                  <img src={plusicon} alt={plusicon} />
                </div>
                <p>New</p>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white">
            <p className="pb-3">
              Total Receivables <span>NGN 0.00</span>
            </p>
            <hr className="border-2 h-1 bg-custom3" />
          </div>
          <div className="flex border-t bg-white p-4 w-full">
            <div className="border-r w-[30%]">
              <h2>CURRENT</h2>
              <h2 className="font-bold text-lg mt-2">NGN0.00</h2>
            </div>
            <div className="w-full px-2">
              <div className="flex w-full justify-between gap-24">
                <div className="w-full">
                  <h2 className="mb-2">OVERDUE</h2>
                  <h2 className="font-bold text-lg mb-2">NGN0.00</h2>
                  <p>1-15days</p>
                </div>
                <div className="w-full pt-6">
                  <h2 className="font-bold text-lg mb-2 mt-2">NGN0.00</h2>
                  <p>1-15days</p>
                </div>
                <div className="w-full pt-6">
                  <h2 className="font-bold text-lg mb-2 mt-2">NGN0.00</h2>
                  <p>1-15days</p>
                </div>
                <div className="w-full pt-6">
                  <h2 className="font-bold text-lg mb-2 mt-2">NGN0.00</h2>
                  <p>1-15days</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sales-expenses w-full border rounded-lg p-4">
          <div className="border-b py-3 bg-custom2">
            <div className="flex justify-between items-center">
              <div className="flex gap-1">
                <p className="font-bold">Sales and Expenses</p>
                <div className="pt-1.5">
                  <IoIosHelpCircleOutline />
                </div>
              </div>
              <div>
                <select
                  name=""
                  id=""
                  className="border-0 outline-0 bg-custom2 pr-4 flex items-center"
                >
                  <option value="">This Fiscal Year</option>
                </select>
              </div>
            </div>
          </div>
          <div className="w-full">
            {/* {loading && (
              <p className="flex items-center justify-center h-10">
                loading......
              </p>
            )} */}
            <div className="flex w-full">
              <div className="w-full transition-all duration-300 ease-in">
                <Bar data={chartData} options={chartOptions} className="" />
              </div>
              <div className="border-l w-[250px]  p-4">
                <div className="font-bold">
                  <p>Total Sales</p>
                  <h2>NGN0.00</h2>
                </div>
                <div className="font-bold pt-16">
                  <p>Total Receipts</p>
                  <h2>NGN0.00</h2>
                </div>
                <div className="font-bold pt-16">
                  <p>Total Expenses</p>
                  <h2>NGN0.00</h2>
                </div>
              </div>
            </div>
            <p>
              * Sales value displayed is inclusive of tax and inclusive of
              credits.
            </p>
          </div>
        </section>
        <section>
          <div className="financial-summary w-full mt-6 border rounded-lg">
            <div className="flex gap-1 p-4 border-b bg-custom2 mb-3">
              <h3 className="text-bold">Sales, Receipts, and Dues</h3>
              <div className="pt-1">
                <IoIosHelpCircleOutline />
              </div>
            </div>
            <table {...getTableProps()} className="w-full p-4">
              <thead>
                {headerGroups.map((headerGroup, i) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    key={`headerGroup-${i}`}
                  >
                    {headerGroup.headers.map((column, j) => (
                      <th {...column.getHeaderProps()} key={`header-${j}`}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row, k) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} key={`row-${k}`}>
                      {row.cells.map((cell, l) => {
                        return (
                          <td {...cell.getCellProps()} key={`cell-${l}`}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
