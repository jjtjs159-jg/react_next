import * as userActions from 'actions/user';

interface Action {
  type: string;
  [key: string]: any;
}

const defaultState = {
  id: '',
};

export const user = (state = defaultState, action: Action) => {
  const { type } = action;

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
