import { resetLoginForm } from '../actions/loginFormActions';
import { getBusinesses }  from '../actions/businessActions'
// synchronous action creators
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// asynchronous action creators
export const login = credentials => {
  console.log(credentials);
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
      .then(res => res.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user.data))
          dispatch(resetLoginForm())
        }
      })
      .catch(console.log)
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser());
    return fetch("http://localhost:3001/api/v1/logout", {
      credentials: "include",
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
  }
}

export const getCurrentUser = () => {
  console.log("DISPATCH GET CURRENT USER")
  return dispatch => {
    return fetch("http://localhost:3001/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "content-type": "application/json"
      },
    })
      .then(res => res.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(getBusinesses())
        }
      })
      .catch(console.log)
  }
}

