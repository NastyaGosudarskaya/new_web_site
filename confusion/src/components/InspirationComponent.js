import React, { Component } from 'react';
import { Media, Row, Button, Col } from 'reactstrap';
import './../App.css';

class Inspiration extends Component{
    constructor(props){
        super(props);
    }
    RenderInspiration({inspiration}){
        return (
            <div key={inspiration.id} className="col-12 mt-5">
               <Media tag="li">
                <Media left middle>
                    <Media object src={inspiration.image} alt={inspiration.name} />
                </Media>
                <div className="back">{inspiration.name}</div>
                <Media body className="ml-5">
                    <Media heading>{inspiration.name}</Media>
                    <p>{inspiration.description}</p>
                </Media>
            </Media>
            </div>
          );
    }
    render(){
        const inspirations = this.props.inspirations.map((inspiration) =>{
            return(
                <this.RenderInspiration inspiration = {inspiration}/>
            ); 
        });
        return(
            <div className="container-fluid note">
                    <div className="container">
                        <h2>Photos for inspiration</h2>
                    </div>
                    <div className="col-12">
                        <Media list>
                            {inspirations}
                        </Media>
                    </div>
                    <Button type="submit" color="primary">
                                    <strong>Add place</strong>
                    </Button>
            </div>
        );
    }
}

export default Inspiration;