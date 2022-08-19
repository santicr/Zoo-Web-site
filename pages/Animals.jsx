import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getAnimals } from '../actions/animal.js'
import AnimalCard from '../components/AnimalCard';
import styles from './Animals.css';

class Animals extends Component {
  render() {
    return(
      <div className='test'>
        <h1 className='titulo'>Animales</h1>
        <div className='row justify-content-center' id='r'>
          {
            this.props.animals.map(animal => {
              return <div className='col-sm-4-fluid' key={animal.Id} id='card'>
                <AnimalCard animal={animal} />
                <br />
              </div>
            })
          }
        </div>
      </div>
    );
  }
  componentDidMount(){
    this.props.getAnimals();
  }
}
const mapActionToProps = {getAnimals};

const mapStoreToProps = (state) => {
  return {
    animals: state.animal.animals
  };
}

export default connect(mapStoreToProps, mapActionToProps)(Animals);