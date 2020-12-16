import axios from "axios";
import React, { Component } from "react";

export default class Review extends Component {
    constructor() {
        super();
        this.state = {
            id: "",
            comment: "",
            rating: "",
            productId: "",
            username:"", 
        };
      }
      
      onSubmit = (e) => {
        e.preventDefault();
        console.log("Final state: " + JSON.stringify(this.state));
        const review = {
          comment: this.state.comment,
          rating: this.state.rating,
          productId: this.state.productId,
          username: this.state.username
        };
        axios
          .post("http://localhost:9050/api/auth/signin", review)
          .then((response) =>{ console.log(response.data)
          
          localStorage.setItem('data',JSON.stringify(response.data))
          })
          .catch((err) => console.log(err));
      };

      handleDelete = event => {
        this.setState({ id: event.target.value });
      }
    
      onDelete = event => {
        event.preventDefault();
    
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
          .then(res => {
            console.log(res);
            console.log(res.data);
          })
      }
    

      onUpdate = (e) => {
        e.preventDefault();
        console.log("Final state: " + JSON.stringify(this.state));
        const reviewUpdate = {
          id: this.state.id,
          comment: this.state.comment,
          rating: this.state.rating,
          productId: this.state.productId,
          username: this.state.username
        };
        axios
          .post("http://localhost:9050/api/auth/signin", reviewUpdate)
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
        <div className="Product">
        <div className ="p-3 mb-2 bg-dark text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Create a Review</h1>
                <form  onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Comment" name="comment" required 
                      value={this.state.comment}
                      onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Rating" name="rating" value={this.state.rating} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="ProductId" name="productId"  value={this.state.productId} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>

                  <h1 className="display-3 mb-4"> Delete a Review </h1>
                 <form  onSubmit={this.onDelete}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Id" name="id" required 
                      value={this.state.id}
                      onChange={this.handleDelete} />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>

                  <h1 className="display-3 mb-4"> Update a Review</h1>
                <form  onSubmit={this.onUpdate}>
                <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Id" name="id" required 
                      value={this.state.id}
                      onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Comment" name="comment" required 
                      value={this.state.comment}
                      onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Rating" name="rating" value={this.state.rating} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="ProductId" name="productId"  value={this.state.productId} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} />
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
