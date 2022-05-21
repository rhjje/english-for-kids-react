import { AppState } from './store';

export const reducer = (state: AppState) => state.reducer;

export const stateMenu = (state: AppState) => reducer(state).stateMenu;
export const stateGameMode = (state: AppState) => reducer(state).stateGameMode;
export const stateRepeat = (state: AppState) => reducer(state).stateRepeat;
export const mistakes = (state: AppState) => reducer(state).mistakes;
