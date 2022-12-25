const ADD_DATA = "ADD_DATA";
const REMOVE_DATA = "RMV_DATA";
const UPDATE_DATA = "UPDATE_DATA";

export const Add = (iteams) => {
  return {
    type: ADD_DATA,
    payload: iteams,
  };
};

export const Remove = (id) => {
  return {
    type: REMOVE_DATA,
    payload: id,
  };
};

export const Update_data = (iteams, id) => {
  return {
    type: UPDATE_DATA,
    payload: iteams,
    id: id,
  };
};
