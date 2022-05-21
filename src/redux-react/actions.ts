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

export const setMistakes = (payload: number) => ({
  type: ActionType.SetMistakes as const,
  payload,
});

export type Action = ReturnType<
  typeof setMenu | typeof setGameMode | typeof setRepeat | typeof setMistakes
>;
