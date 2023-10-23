import React, { useState, useEffect} from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { useParams } from 'react-router-dom';
const Editusr = () => {
    const { id } = useParams();
    console.log(id);
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


    const editdt = async () =>
      {
        try {
            
            await axios({
                method: "PUT",
                url: `http://localhost:3500/users/update/${id}`,
                data:item
              });
        } catch (e) {
            
        }
      }

    
    useEffect(() => {
        Swal.fire(
       "Create Data Berhasil!",
       "This is button handler",
       "success"
   )
 }, [test]);
    
    
    return (
        <div>
           <div>
           <div className="container">
            <h3>Update Data User</h3>
            <br></br>
        <form action="" onSubmit={() => editdt()}>
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

export default Editusr;
