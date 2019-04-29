import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getRecords } from '../actions/recordActions';
import PropTypes from 'prop-types';

class RecordList extends Component{
  state= {
    records: [
      { id: uuid(), ClientName: 'Tyler', ClientPhoneNumber: 8, ClientNotes: 'We talked' },
      { id: uuid(), ClientName: 'Chloe', ClientPhoneNumber: 5, ClientNotes: 'We laughed' },
      { id: uuid(), ClientName: 'Carter', ClientPhoneNumber: 6, ClientNotes: 'We drank' },
      { id: uuid(), ClientName: 'Laurel', ClientPhoneNumber: 7, ClientNotes: 'We ate' },
    ]
  }

  render() {
    const { records } = this.state;
    return(
      <Container>
        <Button
          color="dark"
          style={{marginBottom: '2rem'}}
          onClick={() => {
            const name = prompt('Add Record');
            if(name) {
              this.setState(state => ({
                records: [...state.records, {id: uuid(), name }]
              }));
            }
          }}
        >
          Add Record
        </Button>
        <ListGroup>
          <TransitionGroup className="Record-List">
            {records.map(({ id, ClientName, ClientPhoneNumber, ClientNotes}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.setState(state => ({
                        records: state.records.filter(record => record.id !==id)
                      }))
                    }}
                    >
                    &times;
                  </Button>
                  {ClientName}, {ClientPhoneNumber}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

RecordList.PropTypes = {
  getRecords: PropTypes.func.isRequired,
  record: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  record: state.record
})

export default connect(mapStateToProps, { getRecords })(RecordList);// allows us to take state and map it into a list