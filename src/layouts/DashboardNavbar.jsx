import dropdown from "../assets/dropdowm.svg";
import search from "../assets/search.svg";
import notification from "../assets/notification.svg";
import customericon from "../assets/customer-image.svg";
import plusicon from "../assets/plusicon.svg";
import '../styles/DashboardNavbar.css'

export default function DashboardNavbar() {
  return (
    <div>
        <div className="flex justify-between">
        <div className="search-body">
          <div className="">
          <input type="search" placeholder="search" className="search-input" />
          </div>
          <div className="flex search-images input-container gap-1">
            <img src={search} alt="" />
            <img src={dropdown} alt="" />
          </div>
        </div>
        <div className="flex gap-9">
          <div className="flex items-center justify-center">
            <div className="plus-icon-holder">
              <img src={plusicon} alt="" />
            </div>
          </div>
          <img src={notification} alt="" />
          <img src={customericon} alt="" />
        </div>
      </div>
    </div>
  )
}
