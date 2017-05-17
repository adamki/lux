//@flow
import * as types from './actions';

const initialState = {
  notes: {},
  openNoteId: null,
  setLoading: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
  case types.CREATE_NOTE: {
    if (!action.id) {
      return {
        ...state,
        setLoading: true
      };
    }
    const newNote = {
      id: action.id,
      content: ''
    };
    return {
      ...state,
      setLoading: false,
      openNoteId: action.id,
      notes: {
        ...state.notes,
        [action.id]: newNote
      }
    };
  }
  case types.UPDATE_NOTE: {
    const {id, content} = action;
    const editedNote = {
      ...state.notes[id],
      content
    };
    return {
      ...state,
      notes: {
        ...state.notes,
        [id]: editedNote
      }
    };
  }
  case types.OPEN_NOTE: {
    return {
      ...state,
      openNoteId: action.id
    };
  }
  case types.CLOSE_NOTE: {
    return {
      ...state,
      openNoteId: null
    };
  }
  default:
    return state;
  }
};
