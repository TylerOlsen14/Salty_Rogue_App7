import uuid from 'uuid';
import { GET_RECORDS, ADD_RECORD, DELETE_RECORD } from '../actions/types';

const initialState = {
  records: [
    { id: uuid(), ClientName: 'Tyler', ClientPhoneNumber: 8, ClientNotes: 'We talked' },
    { id: uuid(), ClientName: 'Chloe', ClientPhoneNumber: 5, ClientNotes: 'We laughed' },
    { id: uuid(), ClientName: 'Carter', ClientPhoneNumber: 6, ClientNotes: 'We drank' },
    { id: uuid(), ClientName: 'Laurel', ClientPhoneNumber: 7, ClientNotes: 'We ate' },
  ]

}

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_RECORDS:
      return{
        ...state
      }
    default: 
      return state;
  }
}