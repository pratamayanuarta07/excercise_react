import React from 'react';
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
const Layout = () => {
    
    const listMenu = [
    
        {
            to:'user', 
            path:'/user', 
            name:'List Item',
          },
        
        {
          to:'usr', 
          path:'/usr', 
          name:'User',
        }
      ];
    
    
    
    return (
        <div className="container-fluid">
      
      <table className="container text-center">
        <tr>
      {listMenu &&
          listMenu.map((mn) => (
            <td>
            <Link to={`${mn.to}`}>
              <div
                className='container'
              >
                <p className="btn btn-sm btn-info">{mn.name}</p>
              </div>
            </Link>
            </td>
          ))}
      </tr>
      </table>
      <div className="container">
      <hr></hr>
      </div>
      <div>{<Outlet/>}</div>
      {/* <Home></Home> */}
    </div>
        
    );
}

export default Layout;
