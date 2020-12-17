import React, { Component } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default class Price extends Component {
    constructor() {
        super();
        this.state = {
          priceid:"",
          productid: "",
          pricevalue: ""
        };
      }
      
      //Handles Creation
      onSubmit = (e) => {
        e.preventDefault();
        console.log("Final state: " + JSON.stringify(this.state));
        const priceCreate = {
          productid: this.state.productid,
          pricevalue: this.state.pricevalue
        };
        axios
          .post("http://localhost:9021/microservices/price", priceCreate)
          .then((response) =>{ console.log(response.data)
          
          localStorage.setItem('data',JSON.stringify(response.data))
          toast.dark("Price added !", {
            position: "top-center",
            autoClose: 5000,
          });
          })
          .catch((err) => toast.error("Error!!", {
            position: "top-center",
            autoClose: 5000,
          }));
      };

      handleDelete = event => {
        this.setState({ priceid: event.target.value });
      }
    
      onDelete = event => {
        event.preventDefault();
    
        axios.delete(`http://localhost:9021/microservices/price/${this.state.priceid}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }

      onUpdate = (e) => {
        e.preventDefault();
        console.log("Final state: " + JSON.stringify(this.state));
        const priceUpdate = {
          priceid: this.state.productid,
          productid: this.state.productid,
          pricevalue: this.state.pricevalue
        };
        axios.put(`http://localhost:9021/microservices/price/${this.state.priceid}`, priceUpdate)
          .then((response) =>{ console.log(response.data)
          
          localStorage.setItem('data',JSON.stringify(response.data))
          toast.dark("Price Updated !", {
            position: "top-center",
            autoClose: 5000,
          });
          })
          .catch((err) =>toast.error("Error!", {
            position: "top-center",
            autoClose: 5000,
          }))
      };
      
      handleChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value,
        });
      };
      render() {
        return (
          <div className="Product">
            <div className ="p-3 mb-2 bg-dark text-white">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h1 className="display-3 mb-4"> Create a New Price</h1>
                    <form  onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="Product ID" name="productid" required 
                          value={this.state.productid}
                          onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="Price Value" name="pricevalue" value={this.state.pricevalue} onChange={this.handleChange}/>
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                      </form>

                      <h1 className="display-3 mb-4"> Delete a Price</h1>
                      <form  onSubmit={this.onDelete}>
                        <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="ID" name="priceid" required 
                          value={this.state.priceid}
                          onChange={this.handleDelete} />
                        </div>
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                      </form>

                      <h1 className="display-3 mb-4">Update a Price</h1>
                      <form  onSubmit={this.onUpdate}>
                      <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="ID" name="priceid" required 
                          value={this.state.priceid}
                          onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="Product ID" name="productid" required 
                          value={this.state.productid}
                          onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <input type="text" className="form-control form-control-lg" placeholder="Price Value" name="pricevalue" value={this.state.pricevalue} onChange={this.handleChange}/>
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
    
