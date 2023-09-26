import React from 'react'
import { Checkout,Bell,Activity,Settings,Calendar,Phone } from '../../../../assets/react-icons'
import { Ustoz,Profile } from '../../../../assets/images/png'
function index() {
  return (
    <section className='col-xl-9 float-end sidebar-main'>
      <header>
        <div className='user-nick'>Mijoz</div>
        <div className="user-instruction">
          <div className="checkout">
            <Checkout />
          </div>
          <div className="bell">
            <Bell />
          </div>
          <div className="settings">
            <Settings />
          </div>
          <div className="my_account">
            <div className="row align-items-end">
              <div className="col-7 row">
                <div className="col-12 name">
                  John Doe
                </div>
                <div className="col-12 another">
                  +9989360833334
                </div>
              </div>
              <div className="col-4 profile">
                <img src={Profile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="main-title">
          <h3>Mijoz Ma'lumotlari</h3>
        </div>
        <div className="card">
          <div className="row justify-content-between">
            <div className="col-md-4">
              <div className="user-profile">
                <img src={Ustoz} alt="" />
              </div>
            </div>
            <div className="col-md-8">
              <div className="user-info">
                <div className="row justify-content-between">
                  <div className="col-md-7">
                    <h3 className='name'>Komilov Botir</h3>
                  </div>
                  <div className="col-md-4">
                    <div className="column">
                      <div className="date">2022-01-01</div>
                      <div className="personal-id">ID 123456</div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="personal-age">
                    24 yosh
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="gender">
                      Erkak
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="postal">
                      <h3>demo#@gmail.com</h3>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl">
                    <div className="row">
                      <div className="col-md-4 icon">
                        {/* <User /> */}
                      </div>
                      <div className="col-md-8 column">
                        <span className='specialist'>Ustoz</span>
                        <span className='name-techer text-nowrap'>Mirzayev Mirkomil</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl">
                    <div className="row">
                      <div className="col-md-4 icon">
                        <Calendar />
                      </div>
                      <div className="col-md-8 column">
                        <span className='specialist'>kuni</span>
                        <span className='name-techer text-nowrap'>Se Pa Sha</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl">
                    <div className="row">
                      <div className="col-md-4 icon">
                        <Phone />
                      </div>
                      <div className="col-md-8 column">
                        <span className='specialist'>Tel:</span>
                        <span className='name-techer text-nowrap'>+9989360833334</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card">

            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

export default index