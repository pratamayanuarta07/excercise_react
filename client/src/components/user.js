import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from "axios";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { Modal, Button } from 'react-bootstrap';

const User = () => {
    const [items, setItems] = useState([]);

  const [iscreate, setcreate] = useState(false);
  const [iscreate2, setcreate2] = useState(false);
  const [isdelete, setdelete] = useState(false);

  const [item, setItem] = useState({
    id: '',
    name: '',
    price: '',
    stock: '',
    type: '',
  });

  // const getItems = () => {
  //   axios({
  //     method: "GET",
  //     url: "http://localhost:3000/items",
  //   })
  //     .then((result) => {
  //       setItems(result.data);
  //       // console.log(result.data)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const createHandler = (e) => {
      setItem({...item, [e.target.name]:e.target.value});
      //console.log(item);
  }

  const insert = async () => {
    const result = await axios({
      method: "POST",
      url: "http://localhost:3000/items",
      data:item
    });
    Swal.fire(
      "Good Job!",
      "This is button handler",
      "success"
    )
    setcreate2(true);
    setcreate(!iscreate);
  }


  const getItems2 = async () => {
    const result = await axios({
      method: "GET",
      url: "http://localhost:3500/users",
    });
    console.log(result.data);
    setItems(result.data);
  };

  const handleRedirect = (id) => {
    // Menggunakan navigate untuk mengarahkan pengguna ke halaman lain
    navigate(`/edtusr/${id}`);
  };
  const handleRedirect2 = () => {
    // Menggunakan navigate untuk mengarahkan pengguna ke halaman lain
    navigate(`/addusr`);
  };

  //console.log(item);
  const deleteHandler = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios({
            method: "DELETE",
            url: `http://localhost:3500/items/delete/${id}`,
          });
          setdelete(!isdelete);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getItems2();
  }, []);
    
    
    
    
    
    return (
        <div className="container">
      <h3>List Item</h3>
      <br></br>
      <Button variant="primary" onClick={()=>handleRedirect2()}>
        Tambah User
      </Button>
      <br></br>
      <br></br>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const { id, username, email, role, stock } = item;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td>
                  <button
                    onClick={() => deleteHandler(id)}
                    className="btn btn-sm btn-danger"
                  >
                    <MdDeleteOutline className="me-1" />
                    Delete
                  </button>
                  <button className="btn btn-sm btn-info" onClick={()=>handleRedirect(id)}>
                    <MdOutlineModeEdit className="me-1" />
                    Update
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    );
}

export default User;
