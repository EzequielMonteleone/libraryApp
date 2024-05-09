import {AppMiddleware, AsyncThunkActionTypes} from '../../interfaces/store';

export const resultBooksSearchMiddleware: AppMiddleware =
  _store => next => (action: any) => {
    if (!action.type.match('resultBooksSearch/searchBook/*')) {
      return next(action);
    }

    switch (action.type) {
      case AsyncThunkActionTypes.SEARCHBOOK_PENDING:
        return next(action);
      case AsyncThunkActionTypes.SEARCHBOOK_FULFILLED:
        return next(action);
      case AsyncThunkActionTypes.SEARCHBOOK_REJECTED:
        return next(action);
      default:
        return next(action);
    }
  };
