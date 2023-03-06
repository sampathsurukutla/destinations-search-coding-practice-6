import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state
    const searchResults = destinationsList.filter(eachPlace =>
      eachPlace.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="destination-search-container">
        <div className="top-heading-container">
          <h1 className="">Destination Search</h1>
          <div className="search-container">
            <input
              className="inputBox"
              type="search"
              placeholder="Search"
              onChange={this.onChangeInput}
              value={searchInput}
            />
            <img
              className="searchIcon"
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
            />
          </div>
        </div>

        <ul className="main-card-container">
          {searchResults.map(eachItem => (
            <DestinationItem destinationsList={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
