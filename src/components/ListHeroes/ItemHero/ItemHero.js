import React from 'react'
import './ItemHero.scss'

const ItemHero = (props) => {

  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item)})
    return images;
  }

  const images = importAll(require.context('../../../assets/image', false, /\.(png|jpe?g|svg)$/));

  const nameImg = `${props.hero.name.split(' ').join('')}.jpg`
  return (
    <div className="ItemHero">
      <img className="ItemHero__img" src={images[nameImg]} alt={props.hero.name}/>
      <div className="ItemHero__content">
        <h4 className="ItemHero__title">
          {props.hero.name}
        </h4>
        <ul className="ItemHero__list">
          <li>Gender {props.hero.gender}</li>
          <li>Brith Year {props.hero.birth_year}</li>
          <li>Eye Color {props.hero.eye_color}</li>
        </ul>
      </div>
    </div>
  )
}

export default ItemHero