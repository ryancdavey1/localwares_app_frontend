// synchronous action creators
// export const setCategories = categories => {
//   return {
//     type: "SET_CATEGORIES",
//     categories
//   }
// }

// //asynchronous action creators
// export const getCategories = () => {
//   console.log("GETTING CATEGORIES")
//   return dispatch => {
//     return fetch("http://localhost:3001/api/v1/categories", {
//       credentials: "include",
//       method: "GET",
//       headers: {
//         "content-type": "application/json"
//       }
//     })
//       .then(res => res.json())
//       .then(response => {
//         console.log(response);
//         if (response.error) {
//           alert(response.error)
//         } else {
//           dispatch(setCategories(response.data))
//         }
//       })
//   }
// }