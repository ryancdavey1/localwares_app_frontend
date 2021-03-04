// synchronous actions
export const updateNewBusinessForm = (name, value) => {
  //const formData = { name, value }
  console.log(name, value)
  console.log("ACTION FIRED");
  return {
    type: "UPDATE_NEW_BUSINESS_FORM",
    formData: { name, value }
  }
}

export const resetNewBusinessForm = () => {
  return {
    type: "RESET_NEW_BUSINESS_FORM",
  }
}

//export const updateNewBusinessForm