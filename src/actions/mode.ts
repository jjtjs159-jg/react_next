export type Mode = 'shoot' | 'video';
export interface ModeState {
  mode: Mode;
  videoURL?: string;
  extension?: string;
}

export type ModeAction = ReturnType<typeof changeMode> | ReturnType<typeof setVideo>;

export const CHANGE_MODE = 'mode/CHANGE_MODE' as const;
export const SET_VIDEO = 'mode/SET_VIDEO' as const;

interface ChangeMode {
  mode: Mode;
  videoURL: string;
  extension: string;
}

export const changeMode = (params: ChangeMode) => ({
  type: CHANGE_MODE,
  payload: {
    ...params,
  },
});

interface SetVideo {
  videoURL: string;
  extension: string;
}

export const setVideo = (params: SetVideo) => ({
  type: SET_VIDEO,
  payload: {
    ...params,
  },
});
