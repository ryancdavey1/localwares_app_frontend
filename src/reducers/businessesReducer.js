

const businessesReducer = (state = [], action) => {
  //debugger
  switch(action.type) {
    case "SET_BUSINESSES":
      return action.businesses
    case "CLEAR_BUSINESSES":
      return []
    case "ADD_BUSINESS":
      return state.concat(action.business)
    // case "UPDATE_BUSINESS":
    //   return state.map(business => business.id === action.business.id ? action.business : business)
    // case "DELETE_BUSINESS":
    //   return state.filter(business => business.id === action.businessId ? false : true)
    default:
      return state
  }
}

export default businessesReducer;