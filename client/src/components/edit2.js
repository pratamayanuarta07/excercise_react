import React, { useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Edit2 = () => {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const { id } = useParams();
    const [item, setItem] = useState({
        UserId: '',
        name: '',
        price: '',
        stock: '',
        category: '',
      });
      const editdt = async () =>
      {
        try {
            
            await axios({
                method: "PUT",
                url: `http://localhost:3500/items/update/${id}`,
                data:item
              });
        } catch (e) {
            
        }
      }
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

    useEffect(() => {
      getItems2();
    }, []);

console.log(item);
    return (
        <div>
            {/* <p>{id}</p>
            <p>dfsdsfseesf</p> */}
            <div>
           <div className="container">
            <h3>Update Data</h3>
            <br></br>
        <form action="" onSubmit={() => editdt()}>
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
        </div>
    );
}

export default Edit2;
