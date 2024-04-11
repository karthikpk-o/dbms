import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
  } from "@material-tailwind/react";
  import {
    InboxIcon,
    PowerIcon,
    DocumentTextIcon,
  } from "@heroicons/react/24/solid";

  import { useState } from "react";
import { Link } from "react-router-dom";
   
  export function AdminSidebar() {

    const [selectedItem, setSelectedItem] = useState(1);

    const handleItemClick = (index) => {
      setSelectedItem(index);
    };
    return (
      <Card className="h-full w-100% p-4 shadow-xl shadow-blue-gray-900/5 bg-gray-300">
        <div>
            <h1 className="my-7 px-7 text-4xl font-bold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-black">
                Menu
            </h1>
        </div>
        <List>
          <Link to="/admin/applied">
            <ListItem className={selectedItem === 2 ? "bg-gray-400" : "bg-gray-300"} onClick={() => handleItemClick(2)}>
              <ListItemPrefix>
                <InboxIcon className="h-5 w-5 m-5" />
              </ListItemPrefix>
              Applied Student List
            </ListItem>
          </Link>
          <Link to="/admin/vacancy">
          <ListItem className={selectedItem === 3 ? "bg-gray-400" : "bg-gray-300"} onClick={() => handleItemClick(3)}>
            <ListItemPrefix>
                <DocumentTextIcon className="h-5 w-5 m-5" />
              </ListItemPrefix>
            Vacancy Report
          </ListItem>
          </Link>
          <Link to="/admin/occupancy">
          <ListItem className={selectedItem === 3 ? "bg-gray-400" : "bg-gray-300"} onClick={() => handleItemClick(3)}>
            <ListItemPrefix>
                <DocumentTextIcon className="h-5 w-5 m-5" />
              </ListItemPrefix>
            Occupancy Report
          </ListItem>
          </Link>
          <Link to="/signin" onClick={()=>localStorage.clear()}>
            <ListItem className={selectedItem === 4 ? "bg-gray-400" : "bg-gray-300"} onClick={() => handleItemClick(4)}>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5 m-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </Link>
        </List>
      </Card>
    );
  }
  