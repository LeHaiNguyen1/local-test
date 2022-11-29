import React from 'react'
import './index.scss'

export default function Category() {
  return (
    <section id='category' className='category'>
      <div className="container">
        <div className='row'>
          <div class="col-sm-12">
          <div class="categories">
            <div class="categories__title">
              <h3>Games categories</h3>
            </div>
            <div class="row">
              <div class="col">
                <div class="categories__block adventure">
                  <div class="categories__block img-adventure">
                    <img src={require('../../assets/images/icon-category/adventure.svg').default} />
                  </div>
                  <div class="categories__block text">
                    <p>Adventures</p>
                  </div>
                </div>
                <div class="categories__block fantasiya">
                  <div class="categories__block img-fantasiya">
                    <img src={require('../../assets/images/icon-category/fantasiya.svg').default} />
                  </div>
                  <div class="categories__block text">
                    <p>Fantasiya</p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="categories__block arcade">
                  <div class="categories__block img-arcade">
                    <img src={require('../../assets/images/icon-category/arcade.svg').default} />
                  </div>
                  <div class="categories__block text">
                    <p>Arcade-an</p>
                  </div>
                </div>

                <div class="categories__block archi">
                  <div class="categories__block img-archi">
                    <img src={require('../../assets/images/icon-category/architectures.svg').default} />
                  </div>
                  <div class="categories__block text">
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
