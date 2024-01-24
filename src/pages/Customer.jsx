import { useEffect,useState } from 'react';
import axios from 'axios';
import '../styles/Customer.css'
import dropdown from '../assets/dropdowm.svg'
import search from '../assets/search.svg'
import notification from '../assets/notification.svg'
import customericon from '../assets/customer-image.svg'
import plusicon from '../assets/plusicon.svg'

const Customer = () => {
    const [data, setData] = useState([]);
    const [selctedOption, setSelectedOption] = useState('')

   

  useEffect(() => {
    const getFetchData = async () => {
      try {
        const fetchedUrl = await axios.get('https://team-spacex-backend-mbhhb.ondigitalocean.app/api/customers/')
        setData(fetchedUrl.data);
        console.log(fetchedUrl.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getFetchData();
  }, []);

  const handleChange = event => {
    setSelectedOption(event.target.value);
  };

  function handlePost(e){
    e.preventDefault();
    axios.post('https://team-spacex-backend-mbhhb.ondigitalocean.app/api/customers/',{})
  }
  
    return (
        <div className='container mx-auto mt-3 mb-3 customer-main'>
            <div className='flex justify-between'>
                <div className='search-body'>
                <input type="search" placeholder='search' className='search-input'/>
                <div className='flex search-images gap-1'>
                    <img src={search} alt="" />
                    <img src={dropdown} alt="" />
                </div>
                </div>
                <div className='flex gap-9'>
                    <div className='flex items-center justify-center'>
                    <div className='plus-icon-holder'>
                        <img src={plusicon} alt="" />
                    </div>
                    </div>
                    <img src={notification} alt="" />
                    <img src={customericon} alt="" />
                </div>
            </div>
            <h2 className="customer-header pt-6">New Customer</h2>
            <div className='mt-10 mx-6 customer-form-body'>
                <div>
                    {data.map((datum)=>{
                        let {id,customer_type,primary_contact_first_name,primary_contact_last_name,company_name,currency,customer_email,customer_phone_work,customer_phone_mobile,user} = datum;
                        return(
                            <div key={id}>
                                <div>
                                    <div className='flex'>
                                        <label htmlFor="current-type">Current Type <span>&#9432</span></label>
                                        <div>
                                            <p>{customer_type}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) 
                    })}
                </div>
            </div>
                {/* <button onClick={handleSubmit}>Save</button> */}
                <button>Cancel</button>
        </div>
    );
};

export default Customer;