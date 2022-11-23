import React from "react";
import Appbar from "./Appbar";
import Chats from "./Chats";
import Search from "./Search";
const Sidebar = () => {
    return ( 
        <div>
            <Appbar/>
            <Search/>
            <Chats/>
        </div>
     );
}
 
export default Sidebar;