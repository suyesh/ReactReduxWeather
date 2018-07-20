import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from '../Actions'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { value: ''}
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(e){
    let { value } = e.target
    this.setState({ value })
  }

  onFormSubmit(e){
    e.preventDefault()
    this.props.fetchWeather(this.state.value)
    this.setState({ value: '' })
  }

  render(){
    return(
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          value={this.state.value}
          onChange={this.onInputChange}
          className="form-control"
          placeholder="Get a five-day forecast in your favorite cities"
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}


const actions = {
  fetchWeather
}

export default connect(null, actions)(SearchBar)
