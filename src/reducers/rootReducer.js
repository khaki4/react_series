// Ducks: https://github.com/erikras/ducks-modular-redux
// https://deminoth.github.io/redux/recipes/reducers/BasicReducerStructure.html

// Actions
const BASE_PREFIX = 'blog_heroku_api/domain_posts/'
export const REQUEST_CONSEQUENT_INCREASE = `${BASE_PREFIX}REQUEST_CONSEQUENT_INCREASE`
export const INCREASE_COUNT1 = `${BASE_PREFIX}INCREASE_COUNT1`
export const INCREASE_COUNT2 = `${BASE_PREFIX}INCREASE_COUNT2`
export const INCREASE_COUNT3 = `${BASE_PREFIX}INCREASE_COUNT3`
export const SET_SHOWING_BTN = `${BASE_PREFIX}SET_SHOWING_BTN`

// Action Creators
export const requestConsequentIncrease = (num) => ({ type: REQUEST_CONSEQUENT_INCREASE })
export const increaseCount1 = (num) => ({ type: INCREASE_COUNT1, payload: num })
export const increaseCount2 = (num) => ({ type: INCREASE_COUNT2, payload: num })
export const increaseCount3 = (num) => ({ type: INCREASE_COUNT3, payload: num })
export const setShowingBtn = (showingBtnArray) => ({ type: SET_SHOWING_BTN, payload: showingBtnArray})

// Reducers
export const initState = {
  count1: 0,
  count2: 0,
  count3: 0,
  showingBtn: [true, false, false]
}
export default (state = initState, action) => {
  switch (action.type) {
    case INCREASE_COUNT1:
      return {
        ...state,
        count1: state.count1 + action.payload,
      }
    case INCREASE_COUNT2:
      return {
        ...state,
        count2: state.count2 + action.payload,
      }
    case INCREASE_COUNT3:
      return {
        ...state,
        count3: state.count3 + action.payload,
      }
    case SET_SHOWING_BTN:
      return {
        ...state,
        showingBtn: [...action.payload]
      }
    default:
      return state
  }
}