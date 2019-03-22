import { createStore } from 'redux'

const initialState = {
  stage: 1,
}

function reducer(state = initialState, action) {
  switch (action.type) {

  }
  return state
}

export default createStore(reducer)
