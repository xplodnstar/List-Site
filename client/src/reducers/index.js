const initialState = {
  cats1: [],
  cats2: [],
  cats3: [],
  currCat: {},
  posts: [],
  post: {},
  locations: [],
  categories: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_CATS':
      return { ...state, cats1: action.cats1, cats2: action.cats2, cats3: action.cats3, categories: action.categories }
    case 'GET_CURR_CAT':
      return { ...state, currCat: action.payload }
    case 'GET_POSTS':
      return { ...state, posts: action.payload }
    case 'GET_POST':
      return { ...state, post: action.payload }
    case 'GET_LOC':
      return { ...state, locations: action.payload }
    default:
      return state
  }
}
