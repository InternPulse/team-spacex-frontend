import dashbordicon from './assets/dashboard.svg';
import invoiceicon from './assets/invoice.svg';
import contacticon from './assets/contact.svg'
import settingsicon from './assets/setting.svg'
import invoicetracker from './assets/invoicetracker.svg'
import template from './assets/tabler_template.svg'

export const SidebarDB = [
  {
    path: "/",
    name: "Dashboard",
    icon: dashbordicon,
  },
  {
    path: "/invoice",
    name: "Invoice",
    icon: invoiceicon,
  },
  {
    path:"/template",
    name :"Template",
    icon: template,
  },
  {
    path: "/customer",
    name: "Customer",
    icon: contacticon,
  },
  {
    path: "/invoicetracker",
    name: "Invoice Tracker",
    icon: invoicetracker
  },
  {
    path: "/settings",
    name: "Settings",
    icon: settingsicon,
  },
];
