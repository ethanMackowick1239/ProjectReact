import axios from "axios";
import React, { Component } from 'react'


export default class Product extends Component {
  constructor() {
    super();
    this.state = {
      productid:"",
      productname: "",
      category: "",
      description:"",
      expire:""
    };
  }
  
  //Handles Creation
  onSubmit = (e) => {
    e.preventDefault();
    console.log("Final state: " + JSON.stringify(this.state));
    const product = {
      productname: this.state.productname,
      category: this.state.category,
      description: this.state.description,
      expire: this.state.expire
    };
    axios
      .post("https://localhost:9050/api/auth/signin", product)
      .then((response) =>{ console.log(response.data)
      
      localStorage.setItem('data',JSON.stringify(response.data))
      })
      .catch((err) => console.log(err));
  };

  //Handles Update
  onUpdate = (e) => {
    e.preventDefault();
    console.log("Final state: " + JSON.stringify(this.state));
    const productUpdate = {
      productid: this.state.productid,
      productname: this.state.productname,
      category: this.state.category,
      description: this.state.description,
      expire: this.state.expire
    };
    axios
      .post("https://localhost:9050/api/auth/signin", productUpdate)
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

  //Handles Deletion
  handleDelete = event => {
    this.setState({ productid: event.target.value });
  }

  onDelete = event => {
    event.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.productid}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

 
  render() {
    return (
      <div className="Product">
        <div className ="p-3 mb-2 bg-dark text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Create a Product</h1>
                <form  onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Name" name="productname" required 
                      value={this.state.productname}
                      onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Category" name="category" value={this.state.category} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Description" name="description"  value={this.state.description} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input type="date" className="form-control form-control-lg" placeholder="Expiry Date" name="expire" value={this.state.expire} onChange={this.handleChange} />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>

                  <h1 className="display-3 mb-4">Delete a Product</h1>
                  <form  onSubmit={this.onDelete}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Name" name="productname" required 
                      value={this.state.productid}
                      onChange={this.handleDelete} />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>

                  <h1 className="display-3 mb-4"> Update a Product</h1>
                <form  onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Name" name="productid" required 
                      value={this.state.productid}
                      onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Name" name="productname" required 
                      value={this.state.productname}
                      onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Category" name="category" value={this.state.category} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Description" name="description"  value={this.state.description} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input type="date" className="form-control form-control-lg" placeholder="Expiry Date" name="expire" value={this.state.expire} onChange={this.handleChange} />
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
