const initialState = {
  name: "",
  description: "",
  open_hours: "",
  email: "",
  phone_number: "",
  delivery: "",
  category: null,
  website: "",
  address1: "",
  city: "",
  state: "",
  postal_code: ""
}

const newBusinessFormReducer = (state = initialState, action) => {
  switch(action.type) {
    case "UPDATE_NEW_BUSINESS_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      }
      
    case "RESET_NEW_BUSINESS_FORM":
      return initialState
    default:
      return state
  }
}

export default newBusinessFormReducer; 