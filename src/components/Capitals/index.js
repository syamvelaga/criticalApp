import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeName: countryAndCapitalsList[0].country}

  onChangeEvent = event => {
    console.log(event.target.value)
  }

  getFilterListObject = () => {
    const {activeName} = this.state

    const filterObj = countryAndCapitalsList.filter(
      each => each.country === activeName,
    )
    console.log(filterObj)
    return filterObj
  }

  render() {
    const {activeName} = this.state
    const filterList = this.getFilterListObject
    console.log(filterList)

    return (
      <div className="main-bg">
        <div className="inner-bg">
          <h1>Countries And Capitals</h1>
          <select onChange={this.onChangeEvent} className="select-bg">
            {countryAndCapitalsList.map(option => (
              <option value={option.id} key={option.id}>
                {option.capitalDisplayText}
              </option>
            ))}
          </select>
          <span>is capital of which country?</span>
          <p>{activeName}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
