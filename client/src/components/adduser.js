import React, { useState, useEffect} from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Adduser = () => {
    const [item, setItem] = useState({
        username: '',
        email: '',
        password: '',
        role: '',
      });
    const [test, setTest] = useState(false);
    
    const createHandler = (e) => {
        setItem({...item, [e.target.name]:e.target.value});
        //console.log(item);
    }
    
  
    const insert = async () => {
      try {
        const result = await axios({
        method: "POST",
        url: "http://localhost:3500/users/register",
        data:item
          });  
        setTest(!test);
      } catch (e) {
        
      }
      // const result = await axios({
      //   method: "POST",
      //   url: "http://localhost:3500/crtproduct",
      //   data:item
      // });

    }
    
    useEffect(() => {
           Swal.fire(
          "Create Data Berhasil!",
          "This is button handler",
          "success"
      )
    }, [test]);
    
   
    
    console.log(item);
    
    
    return (
        <div>
           <div>
           <div className="container">
            <h3>Create Data User</h3>
            <br></br>
        <form action="" onSubmit={() => insert()}>
          <div className="form-group mb-3">
          <label>Username :</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="username"
              onChange={(e) => createHandler(e)}
            />
          </div>
          <div className="form-group mb-3">
          <label>Email :</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="email"
              onChange={(e) => createHandler(e)}
            />
          </div>
          <div className="form-group mb-3">
          <label>Password :</label>
            <input
              type="text"
              name="password"
              className="form-control"
              placeholder="password"
              onChange={(e) => createHandler(e)}
            />
          </div>
          <div className="form-group mb-3">
          <label>Role :</label>
            <input
              type="text"
              name="role"
              className="form-control"
              placeholder="role"
              onChange={(e) => createHandler(e)}
            />
          </div>
          <button className="btn btn btn-primary mb-5" type="submit">
            Simpan
          </button>
        </form>
      </div> 
        </div> 
        </div>
    );
}

export default Adduser;
