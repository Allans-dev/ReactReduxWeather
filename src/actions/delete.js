
export const DELETE_LOCATION = "DELETE_LOCATION";

export function deleteLocation (name) {
  return {
    type: DELETE_LOCATION,
    payload: name
  };
}
