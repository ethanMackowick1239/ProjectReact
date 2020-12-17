import axios from "axios";
import React, { Component } from 'react'


export default class ReviewGet extends Component {
  //   constructor(props){
  //     super(props);
  //     this.state = {
  //       productId: "",
  //       posts:"",
  //     };
  //   }
  //   submitForm = (e) =>{
  //     e.preventDefault();
  //     axios
  //     .get(
  //       "htpp://localhost:9021/microservices/" + parseInt(this.state.productId),
  //       {
  //         headers:{
  //           "Access-Control-Allow-Origin": "*"
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       this.setState( state: {
  //         posts: res.data,
  //       });
  //     });
  //   };
      
  // handleNameChange() = (e) => {
  //   this.setState(state:{
  //     productId: parseInt(e.target.value),
  //   });
  // }


  render() {
    return (
      <div className="Product">
        <div className ="p-3 mb-2 bg-dark text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">


                  <h1 className="display-3 mb-4"> Get All  Products </h1>
                    <form  onSubmit={this.onGetAllProducts}>
                    <div className="form-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Name" name="productid" required 
                      value={this.state.productid}
                      onChange={this.handleChange} />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
                  <ul>
                     { this.state.review.map(review => <li>{review.username} </li>)}
                  </ul>

                 <h1 className="display-3 mb-4"> Get Product By ID  </h1>
                     <form  onSubmit={this.getReviewByProductId}>
                    <div className="form-group">
                       <input type="text" className="form-control form-control-lg" placeholder="Name" name="productid" required 
                      value={this.state.productid}
                    //   onChange={this.handleChange} 
                    />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                  </form>
                  <ul>
                     { this.state.review.map(review => <li>{review.username}</li>)}
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
