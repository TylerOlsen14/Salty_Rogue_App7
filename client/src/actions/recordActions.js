import axios from 'axios'
import { GET_RECORDS, ADD_RECORD, DELETE_RECORD, RECORDS_LOADING } from './types';

export const getRecords = () => dispatch => {
  dispatch(setRecordsLoading());
  axios
    .get('/api/items')
    .then(res => 
      dispatch({
        type: GET_RECORDS,
        payload: res.data
      })
      )
}
export const deleteRecord = (id) => {
  return {
    type: DELETE_RECORD,
    payload: id
  }
}
export const addRecord = record => {
  return {
    type: ADD_RECORD,
    payload: record
  }
}
export const setRecordsLoading = () => {
  return {
    type: RECORDS_LOADING
  }
}