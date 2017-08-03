
export const DELETE_LOCATION = "DELETE_LOCATION";

// passes name of location to reducer
export function deleteLocation (countryId) {
  return {
    type: DELETE_LOCATION,
    payload: countryId
  };
}
