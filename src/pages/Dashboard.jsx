import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = () => {

    const [data, setData] = useState(null);
    // State to track loading state
    const [loading, setLoading] = useState(true);
    // State to track errors, if any
    const [error, setError] = useState(null);
  
    useEffect(() => {
      // Function to fetch data from the API
      const fetchData = async () => {
        try {
          // Make a GET request to your API endpoint
          const response = await axios.get('https://team-spacex-backend-mbhhb.ondigitalocean.app/swagger/?format=openapi#/definitions/NewCustomer');
          console.log('Data from API:', response.data);
          // Set the fetched data to the state
          setData(response.data);
        } catch (error) {
          // Handle errors
          setError(error);
        } finally {
          // Set loading state to false once data is fetched or an error occurs
          setLoading(false);
        }
      };
  
      // Call the fetchData function
      fetchData();
    }, []); // The empty dependency array ensures that the effect runs only once on mount
  
    // Render loading state
    if (loading) {
      return <p>Loading...</p>;
    }
  
    // Render error state if an error occurs
    if (error) {
      return <p>Error: {error.message}</p>;
    }
  

    return (
        <div>
            <h1>Dashboard page</h1>
        </div>
    );
};

export default Dashboard;