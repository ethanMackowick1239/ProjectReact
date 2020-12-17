import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Stock extends Component {
  constructor() {
    super();
    this.state = {
      stockid: "",
      productId: "",
      quantity:"",
      location:""
    };
  }
  
  //Handles Create
  onSubmit = (e) => {
    e.preventDefault();
    console.log("Final state: " + JSON.stringify(this.state));
    const stock = {
      productId: this.state.productId,
      quantity: this.state.quantity,
      location: this.state.location
    };
    axios
      .post("http://localhost:9021/microservices/stock", stock)
      .then((response) =>{ console.log(response.data)
      
      localStorage.setItem('data',JSON.stringify(response.data))
      toast.dark("Stock added !", {
        position: "top-center",
        autoClose: 5000,
      });
      })
      .catch((err) => toast.error("Error!!", {
        position: "top-center",
        autoClose: 5000,
      }));
  };

  //Handles Update
  onUpdate = (e) => {
    e.preventDefault();
    console.log("Final state: " + JSON.stringify(this.state));
    const stockUpdate = {
      stockid: this.state.stockid,
      productId: this.state.productif,
      quantity: this.state.quantity,
      location: this.state.location
    };
    axios
    .put(`http://localhost:9021/microservices/stock/${this.state.stockid}`, stockUpdate)
    .then((response) =>{ console.log(response.data)
      
      localStorage.setItem('data',JSON.stringify(response.data))
      toast.dark("Stock Updated !", {
        position: "top-center",
        autoClose: 5000,
      });
      })
      .catch((err) => toast.error("Error!!", {
        position: "top-center",
        autoClose: 5000,
      }));
  };

  //Handles Deletion
  handleDelete = event => {
    this.setState({ stockid: event.target.value });
  }

  onDelete = event => {
    event.preventDefault();

    axios.delete(`http://localhost:9021/microservices/stock/${this.state.stockid}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      toast.dark("Stock Deleted !", {
        position: "top-center",
        autoClose: 5000,
      });
  }

  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div className="Stock">
        <div className ="p-3 mb-2 bg-dark text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4"> Stock Service</h1>
                <form  onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Product ID" name="productId" value={this.state.productId} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Quantity" name="quantity"  value={this.state.quantity} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Location of Stock" name="location" value={this.state.location} onChange={this.handleChange} />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>

                  <h1 className="display-3 mb-4">Delete a Stock </h1>
                  <form  onSubmit={this.onDelete}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Stock ID" name="stockid" required 
                      value={this.state.stockid}
                      onChange={this.handleDelete} />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>

                  <h1 className="display-3 mb-4">Update a Stock </h1>
                  <form  onSubmit={this.onUpdate}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Stock ID" name="stockid" required 
                      value={this.state.stockid}
                      onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Product ID" name="productId" value={this.state.productId} onChange={this.handleChange}/>
                    </div>
                    <ToastContainer />
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Quantity" name="quantity"  value={this.state.quantity} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Location of Stock" name="location" value={this.state.location} onChange={this.handleChange} />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}