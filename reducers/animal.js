let initialState = {
  animal: {},
  animals: []
    
};

const animalReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SET_ANIMALS':
      return {
        ...state,
        animals: action.payload.animals
      };

    case 'SET_ANIMALDidMount':
      // const n = state.animals.filter(animal => {return animal.name === action.payload.animal} )[0]
      console.log(action.payload.animals);
      return{
        ...state,
        animals: action.payload.animals[0]
      };
    default:
      return state;
  }
}

export default animalReducer;