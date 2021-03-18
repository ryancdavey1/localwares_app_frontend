import { resetBusinessForm } from './businessFormActions'

// synchronous action creators
export const setBusinesses = businesses => {
  return {
    type: "SET_BUSINESSES",
    businesses
  }
}

export const addBusiness = business => {
  return {
    type: "ADD_BUSINESS",
    business
  }
}

export const updateBusinessSuccess = business => {
  return {
    type: "UPDATE_BUSINESS",
    business
  }
}

export const clearBusinesses = () => {
  return {
    type: "CLEAR_BUSINESSES"
  }
}

export const deleteBusinessSuccess = businessId => {
  return {
    type: "DELETE_BUSINESS",
    businessId
  }
}

// asynchronous action creators 
export const getBusinesses = () => {
  console.log("GETTING BUSINESSES")
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/businesses", {
      credentials: "include",
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        console.log(response);
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setBusinesses(response.data))
        }
      })
  }
}

export const createBusiness = (businessData, history) => {
  console.log("CREATING BUSINESS")
  //debugger
  return dispatch => {
    const sendableBusinessData = {
      name: businessData.name,
      description: businessData.description,
      open_hours: businessData.open_hours,
      email: businessData.email,
      phone_number: businessData.phone_number,
      website: businessData.website,
      address1: businessData.address1,
      city: businessData.city,
      state: businessData.state,
      postal_code: businessData.postal_code,
      category_id: businessData.category_id,
      user_id: businessData.userId
    }
    return fetch("http://localhost:3001/api/v1/businesses", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableBusinessData)
    })
      .then(r => r.json())
      .then(resp => {
        console.log(resp.data)
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(addBusiness(resp.data))
          dispatch(resetBusinessForm())
          history.push(`/businesses/${resp.data.id}`)
        }
      })
      .catch(console.log)

  }
}

export const updateBusiness = (businessData, history) => {
  console.log("UPDATING BUSINESS")
  console.log(businessData);
  return dispatch => {
    const sendableBusinessData = {
      name: businessData.name,
      description: businessData.description,
      open_hours: businessData.open_hours,
      email: businessData.email,
      phone_number: businessData.phone_number,
      website: businessData.website,
      address1: businessData.address1,
      city: businessData.city,
      state: businessData.state,
      postal_code: businessData.postal_code,
      category_id: businessData.category_id,
      user_id: businessData.userId
    }
    return fetch(`http://localhost:3001/api/v1/businesses/${businessData.businessId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableBusinessData)
    })
      .then(r => r.json())
      .then(resp => {
        console.log(resp.data)
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(updateBusinessSuccess(resp.data))
          //dispatch(resetBusinessForm())
          history.push(`/businesses/${resp.data.id}`)
          
        }
      })
      .catch(console.log)

  }
}

export const deleteBusiness = (businessId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/v1/businesses/${businessId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteBusinessSuccess(businessId))
          history.push(`/businesses`)
        }
      })
      .catch(console.log)

  }
}