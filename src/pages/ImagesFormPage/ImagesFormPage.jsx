import React, { Component } from "react";
import { Link } from 'react-router-dom';
import imageService from "../../utils/imageService";


class ImageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            name: "",
            description: "",
            price: 0,
            category: ""
        }
    }
    
    handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        imageService.uploadImage(this.state);
        this.props.history.push('/');
    }

    render() {
      
        return (
            
            <div>
                <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="file" className="form-control" value={this.state.image} name="image" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <textarea name="description" placeholder="description" cols="50" value={this.state.description} onChange={this.handleChange}/>  
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="number" className="form-control" placeholder="Price" value={this.state.price} name="price" onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="category" className="form-control" placeholder="Category" value={this.state.category} name="category" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            <button className="btn btn-dark" >Submit</button>&nbsp;&nbsp;
                            <Link to='/' className="btn btn-dark">Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

 export default ImageForm;