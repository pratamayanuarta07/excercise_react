import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import axios from "axios";
import { MdDeleteOutline, MdOutlineModeEdit, MdVerticalAlignBottom } from "react-icons/md";
import { Modal, Button } from 'react-bootstrap';

const Home = () => {
  // const buttonHandler = () => {
  //     console.log("Button handler")
  //     Swal.fire(
  //         "Good Job!",
  //         "This is button handler",
  //         "success"
  //     )
  // }
  const [items, setItems] = useState([]);

  const [iscreate, setcreate] = useState(false);
  const [iscreate2, setcreate2] = useState(false);
  const [isdelete, setdelete] = useState(false);
  sessionStorage.setItem('key', 0);
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
      url: "http://localhost:3500/items",
    });
    console.log(result.data);
    setItems(result.data);
  };

  const handleRedirect = (id) => {
    // Menggunakan navigate untuk mengarahkan pengguna ke halaman lain
    navigate(`/edit2/${id}`);
  };
  const handleRedirect2 = () => {
    // Menggunakan navigate untuk mengarahkan pengguna ke halaman lain
    navigate(`/add`);
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
    if (iscreate2 === true) {
           
      Swal.fire(
      "Good Job!",
      "This is button handler",
      "success"
  )
  iscreate2(false);
}
    getItems2();
  }, [iscreate, isdelete]);

  // getItems();
console.log(items);
  return (
    <div className="container">
      <h3>List Item</h3>
      <br></br>
      <Button variant="primary" onClick={()=>handleRedirect2()}>
        Tambah Item
      </Button>
      <br></br>
      <br></br>
      {/* <div className="container">
      <Button variant="primary" onClick={handleShow}>
        Tampilkan Modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Insert Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="container">
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
      </div>
        </Modal.Body>
      </Modal>
    </div> */}




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
            <th>Type</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const { id, name, category, price, stock } = item;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{category}</td>
                <td>Rp. {price}</td>
                <td>{stock} pcs</td>
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
};

export default Home;



