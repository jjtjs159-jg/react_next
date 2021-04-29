import * as actions from 'actions/mode';
import { ModeState, CHANGE_MODE } from 'actions/mode';
import { put, takeLatest } from 'redux-saga/effects';

interface SagaParams {
    type: string;
    payload: ModeState;
}

function* changeModeSaga(params: SagaParams) {
    const { payload } = params;

    if (payload.mode === 'video') {
        yield put(
            actions.setVideo({
                videoURL: payload.videoURL || '',
                extension: payload.extension || '',
            }),
        );
    }
}

export function* watchMode() {
    yield takeLatest(CHANGE_MODE, changeModeSaga);
}
