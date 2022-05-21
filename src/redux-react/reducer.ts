import { Action } from './actions';
import { ActionType } from './types';

interface ReducerState {
  stateMenu: boolean;
  stateGameMode: boolean;
  stateRepeat: boolean;
  mistakes: number;
}

const initialState: ReducerState = {
  stateMenu: false,
  stateGameMode: false,
  stateRepeat: false,
  mistakes: 0,
};

export const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.SetMenu:
      return { ...state, stateMenu: action.payload };
    case ActionType.SetGameMode:
      return { ...state, stateGameMode: action.payload };
    case ActionType.SetRepeat:
      return { ...state, stateRepeat: action.payload };
    case ActionType.SetMistakes:
      return { ...state, mistakes: action.payload };
    default:
      return state;
  }
};
