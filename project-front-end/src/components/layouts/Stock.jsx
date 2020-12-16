import React, { Component } from "react";
import axios from "axios";

export default class Stock extends Component {
  constructor() {
    super();
    this.state = {
      stockid: "",
      productid: "",
      quantity:"",
      location:""
    };
  }
  
  //Handles Create
  onSubmit = (e) => {
    e.preventDefault();
    console.log("Final state: " + JSON.stringify(this.state));
    const stock = {
      productid: this.state.productif,
      quantity: this.state.quantity,
      location: this.state.location
    };
    axios
      .post("https://localhost:9050/api/auth/signin", stock)
      .then((response) =>{ console.log(response.data)
      
      localStorage.setItem('data',JSON.stringify(response.data))
      })
      .catch((err) => console.log(err));
  };

  //Handles Update
  onUpdate = (e) => {
    e.preventDefault();
    console.log("Final state: " + JSON.stringify(this.state));
    const stockUpdate = {
      stockid: this.state.stockid,
      productid: this.state.productif,
      quantity: this.state.quantity,
      location: this.state.location
    };
    axios
      .post("https://localhost:9050/api/auth/signin", stockUpdate)
      .then((response) =>{ console.log(response.data)
      
      localStorage.setItem('data',JSON.stringify(response.data))
      })
      .catch((err) => console.log(err));
  };

  //Handles Deletion
  ondelete = (e) => {
    e.preventDefault();
    console.log("Final state: " + JSON.stringify(this.state));
    const stockDelete = {
      stockid: this.state.stockid
    };
    axios
      .post("https://localhost:9050/api/auth/signin", stockDelete)
      .then((response) =>{ console.log(response.data)
      
      localStorage.setItem('data',JSON.stringify(response.data))
      })
      .catch((err) => console.log(err));
  };
  
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
                      <input type="text" className="form-control form-control-lg" placeholder="Product ID" name="productid" value={this.state.productid} onChange={this.handleChange}/>
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
                      onChange={this.handleChange} />
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
                      <input type="text" className="form-control form-control-lg" placeholder="Product ID" name="productid" value={this.state.productid} onChange={this.handleChange}/>
                    </div>
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