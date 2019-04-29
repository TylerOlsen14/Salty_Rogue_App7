import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getRecords, deleteRecord } from '../actions/recordActions';
import PropTypes from 'prop-types';

class RecordList extends Component{
  componentDidMount() {
    this.props.getRecords();
  }

  onDeleteClick = (id) => {
    this.props.deleteRecord(id)
  }

  render() {
    const { records } = this.props.record;
    return(
      <Container>
        <ListGroup>
          <TransitionGroup className="Record-List">
            {records.map(({ id, ClientName, ClientPhoneNumber, ClientNotes}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, id)}
                    >
                    &times;
                  </Button>
                  <div>
                    {ClientName}, {ClientPhoneNumber}
                  </div>
                  <div>
                    {ClientNotes}
                  </div>
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

// RecordList.PropTypes = {
//   getRecords: PropTypes.func.isRequired,
//   record: PropTypes.object.isRequired
// }

const mapStateToProps = (state) => ({
  record: state.record
})

export default connect(
  mapStateToProps,
  { getRecords, deleteRecord }
  )(RecordList);// allows us to take state and map it into a list