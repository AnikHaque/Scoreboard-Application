// Define the Redux store
const initialState = {
    total: 120
  };
  
  function reducer(state = initialState, action) {
    switch(action.type) {
      case 'UPDATE_TOTAL':
        return {
          ...state,
          total: action.payload
        };
        case 'RESET_TOTAL':
      return {
        ...state,
        total: 0
      };
      default:
        return state;
    }
  }
  
  const store = Redux.createStore(reducer);
  
  // Define the event listener for the input element
  const inputElement = document.getElementById('input-element');
  inputElement.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const value = parseFloat(inputElement.value);
      const total = store.getState().total + value;
      store.dispatch({ type: 'UPDATE_TOTAL', payload: total });
      inputElement.value = '';
    }
  });
  const helloElement = document.getElementById('input-hello');
  helloElement.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      const value = parseFloat(helloElement.value);
      const total = store.getState().total - value;
      store.dispatch({ type: 'UPDATE_TOTAL', payload: total });
      helloElement.value = '';
    }
  });

  // Define the function to update the total element
  function updateTotalElement() {
    const totalElement = document.getElementById('total-element');
    totalElement.textContent = `Total: ${store.getState().total}`;
  }
  
  // Subscribe to updates from the Redux store and update the total element
  store.subscribe(updateTotalElement);
  updateTotalElement();
  
  // Define the event listener for the reset button
const resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', () => {
  store.dispatch({ type: 'RESET_TOTAL' });
});

const addButton = document.getElementById('add-input');
addButton.addEventListener('click', () => {
  const matchContainer = document.getElementById('match-container');
  const newMatch = document.createElement('div');
  newMatch.classList.add('match', 'input-row');
  newMatch.innerHTML = `
    <div class="wrapper">
        <button class="lws-delete">
            <img src="./image/delete.svg" alt="" />
        </button>
        <h3 class="lws-matchName">Match ${matchContainer.children.length + 1}</h3>
    </div>
    <div class="inc-dec">
        <div class="incrementForm">
            <h4>Increment</h4>
            <input
                type="number"
                name="increment"
                class="lws-increment"
            />
        </div>

        <div class="decrementForm">
            <h4>Decrement</h4>
            <input
                type="number"
                name="decrement"
                class="lws-decrement"
            />
        </div>
    </div>
    <div class="numbers">
        <h2 class="lws-singleResult">0</h2>
    </div>
  `;
  matchContainer.appendChild(newMatch);
});
