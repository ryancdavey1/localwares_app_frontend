// synchronous actions
export const updateBusinessForm = (name, value) => {
  const formData = { name, value }
  console.log(name, value)
  console.log("ACTION FIRED");
  return {
    type: "UPDATE_NEW_BUSINESS_FORM",
    formData
  }
}

export const resetBusinessForm = () => {
  return {
    type: "RESET_NEW_BUSINESS_FORM",
  }
}

export const setFormDataForEdit = business => {
  console.log(business);
  const businessFormData = {
    name: business.attributes.name,
    description: business.attributes.description,
    open_hours: business.attributes.open_hours,
    email: business.attributes.email,
    phone_number: business.attributes.phone_number,
    website: business.attributes.website,
    address1: business.attributes.address1,
    city: business.attributes.city,
    state: business.attributes.state,
    postal_code: business.attributes.postal_code,
    category_id: business.attributes.category_id
  }
  return { 
    type: "SET_FORM_DATA_FOR_EDIT",
    businessFormData
  }
}