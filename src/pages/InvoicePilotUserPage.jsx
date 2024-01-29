import Sidebar from "../components/Sidebar";
import "../styles/InvoicePilotUserPage.css";
import searchIcon from "../assets/wpf_search.svg";
import arrowDownIcon from "../assets/formkit_down.svg";
import userProfileIcon from "../assets/Ellipse 3.svg";
import notificationIcon from "../assets/Frame 95.svg";
import plusIcon from "../assets/ic_outline-plus.svg";
// import invoiceOutlineIcon from "../assets/Frame 109.svg";

const InvoicePilotUserPage = () => {
  return (
    <section className="invoice-pilot-user-page">
      <Sidebar />
      <div className="client-page">
        <div className="user-page">
          <nav>
            <div className="search-field">
              <input type="search" name="" id="" placeholder="Search" />
              <img src={searchIcon} alt="" />
              <img src={arrowDownIcon} alt="" />
            </div>
            <div className="user-profile">
              <img src={plusIcon} alt="" />
              <img src={notificationIcon} alt="" />
              <img src={userProfileIcon} alt="" />
            </div>
          </nav>
          {/* <div className="welcome-user">
            <span>
              <img src={invoiceOutlineIcon} alt="" />
              <p>Hello 👋 , John</p>
            </span>
            <button className="home-btn home-btn-blue accent">
              Create new Invoice
            </button>
          </div> */}
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          aliquam quia sunt fuga nulla repudiandae pariatur voluptate rerum
          incidunt animi optio dignissimos hic deleniti assumenda atque ex nam
          voluptatem, similique magnam suscipit qui? Aut ab, dolor, sequi beatae
          repudiandae amet quis totam reiciendis explicabo reprehenderit iusto
          veritatis quo temporibus cumque.
        </div>
      </div>
    </section>
  );
};

export default InvoicePilotUserPage;
