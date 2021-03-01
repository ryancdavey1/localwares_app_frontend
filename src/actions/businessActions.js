// synchronous action creators
export const setBusinesses = businesses => {
  return {
    type: "SET_BUSINESSES",
    businesses
  }
}

export const createBusiness = business => {
  return {
    type: "CREATE_BUSINESS",
    business
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