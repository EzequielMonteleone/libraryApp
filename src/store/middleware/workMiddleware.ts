import {AppMiddleware, AsyncThunkActionTypes} from '../../interfaces/store';

export const workMiddleware: AppMiddleware =
  _store => next => (action: any) => {
    if (!action.type.match('work/getWork/*')) {
      return next(action);
    }

    switch (action.type) {
      case AsyncThunkActionTypes.GETWORK_PENDING:
        return next(action);
      case AsyncThunkActionTypes.GETWORK_FULFILLED:
        return next(action);
      case AsyncThunkActionTypes.GETWORK_REJECTED:
        return next(action);
      default:
        return next(action);
    }
  };
