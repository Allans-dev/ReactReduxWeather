
const DELETE_LOCATION = "DELETE_LOCATION";

export function deleteLocation (index) {
  return (
    type: DELETE_LOCATION,
    payload: index
  );
}
