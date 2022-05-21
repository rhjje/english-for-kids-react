import { ActionType } from './types';

export const setMenu = (payload: boolean) => ({
  type: ActionType.SetMenu as const,
  payload,
});

export const setGameMode = (payload: boolean) => ({
  type: ActionType.SetGameMode as const,
  payload,
});

export const setRepeat = (payload: boolean) => ({
  type: ActionType.SetRepeat as const,
  payload,
});

export const addMistake = () => ({
  type: ActionType.AddMistake as const,
});

export const resetMistakes = () => ({
  type: ActionType.ResetMistakes as const,
});

export type Action = ReturnType<
  | typeof setMenu
  | typeof setGameMode
  | typeof setRepeat
  | typeof addMistake
  | typeof resetMistakes
>;
