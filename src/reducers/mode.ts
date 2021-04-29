import { ModeState, ModeAction } from 'actions/mode';

const defaultState: ModeState = {
    mode: 'shoot',
    videoURL: '',
    extension: '',
};

export const mode = (state: ModeState = defaultState, action: ModeAction): ModeState => {
    switch (action.type) {
        case 'mode/CHANGE_MODE': {
            return Object.assign({}, state, {
                mode: action.payload.mode,
            });
        }
        case 'mode/SET_VIDEO': {
            return Object.assign({}, state, {
                videoURL: action.payload.videoURL,
                extension: action.payload.extension,
            });
        }
        default: {
            return state;
        }
    }
};
