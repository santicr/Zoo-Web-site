import React, { Component } from 'react';
import styles from'./AnimalCard.module.css';
import  { Link } from 'react-router-dom';
import { setAnimal } from '../actions/animal';
import { connect } from 'react-redux';

class AnimalCard extends Component {
  render() {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.animalContainer}>
          <img 
            src={this.props.animal.img} 
            className={styles.animalImage} 
            alt='imagen del animal' />
          <h3>{ this.props.animal.name }</h3>
          <p></p>

          <Link 
            className={styles.button}
            onClick={this.onAnimalCardSelect} 
            to={`/details/${this.props.animal.Id}`}>Ver más</Link>
            
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.onAnimalCardSelect = this.onAnimalCardSelect.bind(this);
  }

  onAnimalCardSelect() {
    this.props.setAnimal(this.props.animal);
  }
}

const mapStateToActions = {
  setAnimal
};

export default connect(
  null,
  mapStateToActions
)(AnimalCard);