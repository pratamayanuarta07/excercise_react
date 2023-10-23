import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { MdDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { Modal, Button } from 'react-bootstrap';


const Edit = () => {
    
    const [items, setItems] = useState([]);

    const [iscreate, setcreate] = useState(false);
    const [iscreate2, setcreate2] = useState(false);
    const [isdelete, setdelete] = useState(false);
    const [id, setId] = useState(0);
    const [item, setItem] = useState({
      UserId: '',
      name: '',
      price: '',
      stock: '',
      type: '',
    });

    const [show, setShow] = useState(false);
    const [test, setTest] = useState(false);
    const handleShow = (idu) => {
      setId(idu);
      setShow(true);}
    
    const handleClose = () => setShow(false);

    const createHandler = (e) => {
      setItem({...item, [e.target.name]:e.target.value});
      //console.log(item);
      }

      const getItems2 = async () => {
        const result = await axios({
          method: "GET",
          url: "http://localhost:3500/items",
        });
        console.log(result.data);
        setItems(result.data);
      };
      
      const editdt = async () =>
      {
        try {
            
            await axios({
                method: "PUT",
                url: `http://localhost:3500/items/update/${id}`,
                data:item
              });
              setTest(!test);
        } catch (e) {
            
        }
      }

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
        Swal.fire(
          "Create Data Berhasil!",
          "This is button handler",
          "success"
      );

        getItems2();
      }, [iscreate, isdelete]);

    
    

    return (
        <div className="container">
        <h3>List Item</h3>
        
        <div className="container">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Id : {id}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="container">
          <form action="" onSubmit={() => editdt()}>
            <div className="form-group mb-3">
              <input
                type="text"
                name="UserId"
                className="form-control"
                placeholder='User Id'
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="name"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="price"
                className="form-control"
                placeholder="price"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="stock"
                className="form-control"
                placeholder="stock"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="category"
                className="form-control"
                placeholder="category"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <button className="btn btn btn-primary mb-5" type="submit">
              Simpan
            </button>
          </form>
        </div>
          </Modal.Body>
        </Modal>
      </div>
  
  
  
  
        {/* <div className="container">
          <form action="" onSubmit={() => insert()}>
            <div className="form-group mb-3">
              <input
                type="text"
                name="id"
                className="form-control"
                placeholder="id"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="name"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="price"
                className="form-control"
                placeholder="price"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="stock"
                className="form-control"
                placeholder="stock"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="text"
                name="type"
                className="form-control"
                placeholder="type"
                onChange={(e) => createHandler(e)}
              />
            </div>
            <button className="btn btn btn-primary mb-5" type="submit">
              Simpan
            </button>
          </form>
        </div> */}
  
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const { id, name, type, price, stock } = item;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{name}</td>
                  <td>
                  <button
                    onClick={() => deleteHandler(id)}
                    className="btn btn-sm btn-danger"
                  >
                    <MdDeleteOutline className="me-1" />
                    Delete
                  </button>
                    
                    
                    <button className="btn btn-sm btn-info" onClick={()=>handleShow(id)} onChange={()=>setId(id)}>
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

export default Edit;
