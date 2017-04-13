
import { createAction } from 'redux-actions'

export const getAccountDetailRequested = createAction('accountDetail/GET_REQUESTED')
export const getAccountDetailSucceeded = createAction('accountDetail/GET_SUCCEEDED')
export const getAccountDetailFailed = createAction('accountDetail/GET_FAILED')
