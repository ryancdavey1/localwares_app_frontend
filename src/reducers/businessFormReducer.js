const initialState = {
  name: "",
  description: "",
  open_hours: "",
  email: "",
  phone_number: "",
  delivery: "",
  category_id: null,
  website: "",
  address1: "",
  city: "",
  state: "",
  postal_code: ""
}

const businessFormReducer = (state = initialState, action) => {
  switch(action.type) {
    case "UPDATE_NEW_BUSINESS_FORM":
      return {
          ...state,
          [action.formData.name]: action.formData.value
        }
    case "RESET_NEW_BUSINESS_FORM":
      return initialState
    case "SET_FORM_DATA_FOR_EDIT":
      return action.businessFormData
    default:
      return state
  }
}

export default businessFormReducer; 