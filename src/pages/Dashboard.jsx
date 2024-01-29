import React from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js'
import { useEffect, useState } from 'react';
import { ChartDB } from '../ChartDB';
import DashboardNavbar from '../layouts/DashboardNavbar';
import '../styles/Dashboard.css'

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

    const [data, setData] = useState(null);
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

    useEffect(() => {
      const loadChartData = async () => {
        try {
          const apiData = await ChartDB();
    
          const data = {
            labels: apiData.labels,
            datasets: [
              {
                label: "Sales",
                data: apiData.sales,
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
        <DashboardNavbar/>
        <header className="header">
          <div className="greeting">
            <h1>Hello, John</h1>
          </div>
          <div className="new-invoice">
            <button>Create new invoice</button>
          </div>
        </header>
        <section className="receivables">
          
        </section>
 <section className="sales-expenses w-full">
  <div className=' '>
    {loading && <p className='flex items-center justify-center h-10'>loading......</p>}
  <Bar data={chartData} options={chartOptions} />
  </div>
</section> 
     
      </main>
    </div>
    );
};

export default Dashboard;