import {AppMiddleware, AsyncThunkActionTypes} from '../../interfaces/store';

export const authorMiddleware: AppMiddleware =
  _store => next => (action: any) => {
    if (!action.type.match('author/getAuthor/*')) {
      return next(action);
    }

    switch (action.type) {
      case AsyncThunkActionTypes.GETAUTHOR_PENDING:
        return next(action);
      case AsyncThunkActionTypes.GETAUTHOR_FULFILLED:
        return next(action);
      case AsyncThunkActionTypes.GETAUTHOR_REJECTED:
        return next(action);
      default:
        return next(action);
    }
  };
