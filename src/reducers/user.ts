import * as userActions from 'actions/User';

interface Action {
    type: string;
    [key: string]: any;
}

const defaultState = {
    id: '',
};

export const user = (state = defaultState, action: Action) => {
    const { type } = action;
    console.log(action);
    switch (type) {
        case userActions.GET:
            return Object.assign({}, state, {
                ...state,
                id: '테스트',
            });
        default:
            return state;
    }
};
