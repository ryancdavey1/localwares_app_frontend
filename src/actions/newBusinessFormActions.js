// synchronous actions
export const updateNewBusinessForm = (name, value) => {
  const formData = { name, value }
  console.log(name, value)
  console.log("ACTION FIRED");
  return {
    type: "UPDATE_NEW_BUSINESS_FORM",
    formData
  }
}

export const resetNewBusinessForm = () => {
  return {
    type: "RESET_NEW_BUSINESS_FORM",
  }
}

export const setFormDataForEdit = business => {
  console.log(business);
  // const businessFormData = {
  //   name: trip.attributes.name,
  //   startDate: trip.attributes.start_date,
  //   endDate: trip.attributes.end_date
  // }
  // return { 
  //   type: "SET_FORM_DATA_FOR_EDIT",
  //   businessFormData
  // }
}