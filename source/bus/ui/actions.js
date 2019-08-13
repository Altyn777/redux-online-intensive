// Types
import { types } from './types';
// import { error } from 'util';

export const uiActions = {
    startFethcing: () => {
        return {
            type: types.START_FETCHING,
        };
    },
    stopFethcing: () => {
        return {
            type: types.STOP_FETCHING,
        };
    },
    emitError: (error, meta = null) =>{
        return{
            type: types.EMIT_ERROR,
            payload: error,
            error: true,
            meta,
        }
    }
};
