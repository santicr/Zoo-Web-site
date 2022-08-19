import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAnimalDidMount } from '../actions/animal';
import styles from './AnimalDetails.css';

class AnimalDetails extends Component {
  render() {
    return(
      <div id = "escritorio">
        <div class="card">
          <img id = "an" class="card-img-top" src={this.props.animal.img} alt="Card image cap"/>
          <div class="card-body">
            <h5 class="card-title">{this.props.animal.name}</h5>
            <p class="card-text">{this.props.animal.description}</p>
            <a href="http://localhost:5000/" class="btn btn-primary">Ver otros animales</a>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.setAnimalDidMount(id);
    console.log(id);
    
  }
}

const mapStateToProps = (state) => {
  console.log("2");
    console.log(state.animal.animals);
  return {
    animal: state.animal.animals
  };
}

const mapStateToActions = {setAnimalDidMount} 

export default connect(mapStateToProps, mapStateToActions)(AnimalDetails);