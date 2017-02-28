import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather } from '../actions/index'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { term: '' }
  }
  handleChange(event) {
    this.setState({ term: event.target.value })
  }
  handleFormSubmit(event) {
    event.preventDefault()

    // fetch the data
    this.props.fetchWeather(this.state.term)

    // clear search bar
    this.setState({ term: '' })
  }
  render() {
    return (
      <form
        className="input-group"
        onSubmit={ (e) => this.handleFormSubmit(e) }>
        <input
          value={ this.state.term }
          onChange={ (e) => this.handleChange(e) }
          placeholder="Get a five day forecast in your city"
          className="form-control" />
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)