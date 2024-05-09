import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from '../../store';

/**
 * @type {TypedReducerWithPayload} - Provides reducer 'state' and 'dispatch' type
 * parameters.
 *
 * @param State The reducers state that is being modified
 * @param Payload The reducers action.payload type.
 *
 * @description Allows typing the expected reducers dispatch state and payload(if present)
 * parameters for easy manipulation.
 *
 * @note The 'any' default prevents the payload type from being required.
 */
export type TypedReducerWithPayload<State, Payload = any> = CaseReducer<
  State,
  PayloadAction<Payload>
>;

export type AsyncThunkConfig = {
  dispatch: AppDispatch;
  state: RootState;
};
