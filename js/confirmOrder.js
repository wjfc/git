import { createAction } from 'redux-actions'

export const initConfirmOrder = createAction('confirmOrder/INIT')
export const postConfirmOrderRequested = createAction('confirmOrder/POST_REQUESTED')
export const postConfirmOrderSucceeded = createAction('confirmOrder/POST_SUCCEEDED')
export const postConfirmOrderFailed = createAction('confirmOrder/POST_FAILED')
