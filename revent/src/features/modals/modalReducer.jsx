import { MODAL_CLOSE, MODAL_OPEN } from './modalConstants';
import { createReducer } from '../../app/common/util/reducerUtil';

// We set this to null because when our application opens we want no modals open
const initialState = null;

export const openModal = (state, payload )