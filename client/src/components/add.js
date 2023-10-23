import React, { useState, useEffect} from "react";
import Swal from "sweetalert2";
import axios from "axios";

const Add = () => {
    
  const [items, setItems] = useState([]);
  const [test2, settest2] = useState(0);
    const [item, setItem] = useState({
        UserId: '',
        name: '',
        price: '',
        stock: '',
        category: '',
      });
    const [test, setTest] = useState(false);
    
    const createHandler = (e) => {
        setItem({...item, [e.target.name]:e.target.value});
        //console.log(item);
    }
    
    const getItems2 = async () => {
      const result = await axios({
        method: "GET",
        url: "http://localhost:3500/users",
      });
      console.log(result.data);
      setItems(result.data);
    };

    const insert = async () => {
      try {
        sessionStorage.setItem('key', 1);
        const result = await axios({
        method: "POST",
        url: "http://localhost:3500/items/create",
        data:item
          });  
        setTest(!test);
      } catch (e) {
        
      }
      
      // axios({
      //   method: "POST",
      //   url: "http://localhost:3500/items/create",
      //   data:item
      //     })
      //     .then(response => {
      //       // Tampilkan pesan sukses menggunakan SweetAlert
      //       sessionStorage.setItem('key', 1);
      //     })
      // .catch((e)=>{

      // })

    }
    
    useEffect(() => {
      if (+sessionStorage.getItem('key') !== 0) {
        console.log('aaaa');
        Swal.fire(
          "Create Data Berhasil!",
          "This is button handler",
          "success"
      );
      sessionStorage.setItem('key', 0);
      }     
      
    }, [test, test2]);
    
    useEffect(() => {
      getItems2();
    }, []);
    //sessionStorage.setItem('key', 1);
    console.log(sessionStorage.getItem('key'));
    
    return (
        <div>
           <div className="container">
            <h3>Create Data</h3>
            <br></br>
        <form action="" onSubmit={() => insert()}>
          <div className="form-group mb-3">
          <label>Pilih User : </label>
            <select className="form-control" name='UserId' onChange={(e) => createHandler(e)}>
              {items.map((x) => {
                return(
                  <option value={x.id} >{x.username}</option>
                );
              })}
            </select>
          </div>
          <div className="form-group mb-3">
          <label>Nama Item :</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="name"
              onChange={(e) => createHandler(e)}
            />
          </div>
          <div className="form-group mb-3">
          <label>Harga Item :</label>
            <input
              type="text"
              name="price"
              className="form-control"
              placeholder="price"
              onChange={(e) => createHandler(e)}
            />
          </div>
          <div className="form-group mb-3">
          <label>Stock Item :</label>
            <input
              type="text"
              name="stock"
              className="form-control"
              placeholder="stock"
              onChange={(e) => createHandler(e)}
            />
          </div>
          <div className="form-group mb-3">
          <label>Category Item :</label>
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
        </div>
    );
}

export default Add;
