import  React, {Component} from 'react'

import './ListHeroes.scss'
import axios from '../../axios/axios-herous'
import Loader from '../UI/Loader/Loader'

export default class ListHeroes extends Component {
  state = {
    hesous: [],
    loading: true
  }

  renderHesous() {
    return this.state.hesous.map(hero => {
      return (
        <li
          key={hero.name}
          onClick={() => { this.props.changeHero(hero)}}
        >
          {hero.name}
        </li>
      )
    })
  }

  async componentDidMount() {
    try {
      const response = await axios.get()

      const hesous = response.data.results

      this.setState({
        hesous,
        loading: false
      })

    } catch (e) {
      console.error(e)
    }
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.loading
          ? <Loader />
          : <ul className="ListHeroes">
            {this.renderHesous()}
          </ul>
        }
      </React.Fragment>
    )
  }
}