import { GET_RECORDS, ADD_RECORD, DELETE_RECORD } from './types';

export const getRecords = () => {
  return {
    type: GET_RECORDS
  }
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