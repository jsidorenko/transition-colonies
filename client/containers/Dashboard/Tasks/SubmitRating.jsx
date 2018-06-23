import React, { Component } from 'react'
import { connect } from 'react-redux'
import { submitRating } from '../../../actions/taskActions'
import SubmitRating from '../../../components/Dashboard/Tasks/SubmitRating'

class SubmitRatingContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      rating: 10,
      role: 'EVALUATOR',
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {

    // set state
    let state = this.state

    // set state property
    state[event.target.id] = event.target.value

    // set state
    this.setState({ ...state })

  }

  handleClick() {

    // submit rating
    this.props.submitRating(
      this.props.colonyClient,
      Number(this.props.match.params.id),
      this.state.role,
      Number(this.state.rating),
    )

  }

  render() {
    return (
      <SubmitRating
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        rating={this.state.rating}
        role={this.state.role}
        submitRatingError={this.props.submitRatingError}
        submitRatingLoading={this.props.submitRatingLoading}
        submitRatingSuccess={this.props.submitRatingSuccess}
      />
    )
  }

}

const mapStateToProps = state => ({
  colonyClient: state.colony.colonyClient,
  submitRatingError: state.task.submitRatingError,
  submitRatingLoading: state.task.submitRatingLoading,
  submitRatingSuccess: state.task.submitRatingSuccess,
})

const mapDispatchToProps = dispatch => ({
  submitRating(colonyClient, taskId, role, rating) {
    dispatch(submitRating(colonyClient, taskId, role, rating))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitRatingContainer)
