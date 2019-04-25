const initialState = {

}

export default function (state = initialState, action) {
  switch (action.type) {
    // case 'GET_PERSON':
    //   return {
    //     ...state,
    //     first: action.person.name.first,
    //     last: action.person.name.last,
    //     email: action.person.email,
    //     phone: action.person.phone,
    //     age: action.person.dob.age,
    //     picture: action.person.picture.large,
    //     thumbnail: action.person.picture.thumbnail,
    //   }
    // case 'GET_CAROUSEL':
    //   return {
    //     ...state,
    //     carousel: action.carousel
    //   }
    // case 'GET_SANCTUARY':
    //   return {
    //     ...state,
    //     sanctuary: action.sanctuary
    //   }
    default:
      return state
  }
}