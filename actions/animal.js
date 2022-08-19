import axios from 'axios';

export const setAnimal = (animal) => (dispatch) => {
  dispatch({
    type: 'SET_ANIMAL',
    payload: { animal }
  });
}

export const getAnimals = () => async (dispatch) => {
  axios.get('/animals').then((response) => {
    console.log(response);
    const animals = response.data.data;
    //console.log(animals);
    dispatch({
      type: 'SET_ANIMALS',
      payload: {animals}
    });
  });

}

//NEW

export const setAnimalDidMount = (animal) => (dispatch) => {
  axios.get('/animals/'+ animal).then((response) => {
    console.log(response);
    const animals = response.data.data;
    console.log(animals);
    dispatch({
      type: 'SET_ANIMALDidMount',
      payload: {animals}
    });
  });

}