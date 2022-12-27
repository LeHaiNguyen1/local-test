import React from 'react'
import './index.scss'

export default function Category() {
  return (
    <section id='category' className='category'>
      <div className="container">
        <div className='row'>
          <div className="col-sm-12">
          <div className="categories">
            <div className="categories__title">
              <h3>Games categories</h3>
            </div>
            <div className="row">
              <div className="col">
                <div className="categories__block adventure">
                  <div className="categories__block img-adventure">
                    <img src={require('../../assets/images/icon-category/adventure.svg').default} />
                  </div>
                  <div className="categories__block text">
                    <p>Adventures</p>
                  </div>
                </div>
                <div className="categories__block fantasiya">
                  <div className="categories__block img-fantasiya">
                    <img src={require('../../assets/images/icon-category/fantasiya.svg').default} />
                  </div>
                  <div className="categories__block text">
                    <p>Fantasiya</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="categories__block arcade">
                  <div className="categories__block img-arcade">
                    <img src={require('../../assets/images/icon-category/arcade.svg').default} />
                  </div>
                  <div className="categories__block text">
                    <p>Arcade-an</p>
                  </div>
                </div>

                <div className="categories__block archi">
                  <div className="categories__block img-archi">
                    <img src={require('../../assets/images/icon-category/architectures.svg').default} />
                  </div>
                  <div className="categories__block text">
                    <p>Architectures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
