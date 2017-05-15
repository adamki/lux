import * as types from './actions';

const initialState = {
  nextNodeId: 1,
  notes: {},
  openNoteId: null
};

export const reducer = (state = initialState, action) => {


  switch(action.type) {
    case types.ADD_NOTE:
      const id = state.nextNodeId;
      const newNote = {
        id,
        content: ''
      };
      return {
        ...state,
        nextNodeId: id + 1,
        openNoteId: id,
        notes: {
          ...state.notes,
          [id]: newNote
        }
      };
    case types.OPEN_NOTE:
      return {
        ...state,
        openNoteId: action.id
      };
    case types.CLOSE_NOTE:
      return {
        ...state,
        openNoteId: null
      };
    case types.UPDATE_NOTE:
      const editedNote = {
        ...state.notes[action.id],
        content: action.content
      };
      return {
        ...state,
        notes: {
          ...state.notes,
          [action.id]: editedNote
        }
      };
    default:
      return state;
  }
};
