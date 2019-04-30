const initialState = {
  cats1: [],
  cats2: [],
  cats3: [],
  currCat: {},
  posts: [],
  location: [],
  // posts: [],
  // postTitle: '',
  // postBody: '',
  // postPic: '',
  // postURL: '',
  // postTime: '',
  // postLoc: '',
  // postCat: '',
  // postID: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_CATS':
      return { ...state, cats1: action.cats1, cats2: action.cats2, cats3: action.cats3 }
    case 'GET_CURR_CAT':
      return { ...state, currCat: action.payload }
    case 'GET_POSTS':
      return { ...state, posts: action.payload }
    // case 'GET_POST':
    //   return {
    //     ...state,
    //     postTitle: action.postTitle,
    //     postBody: action.postBody,
    //     postPic: action.postPic,
    //     postURL: action.postURL,
    //     postTime: action.postTime,
    //     postLoc: action.postLoc,
    //     postCat: action.postCat,
    //     postID: action.postID,
    //   }

    // case 'GET_PICS':
    //   return {
    //     ...state,
    //     posts: action.posts
    //   }
    default:
      return state
  }
}