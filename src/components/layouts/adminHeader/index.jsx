import React from 'react'
import { Bell, Settings } from '../../../assets/react-icons'
import { Profile } from '../../../assets/images/png'
import { useSelector } from 'react-redux'
function index({ titlename = "Mijozlar" }) {
    const title = useSelector(state => state.title);
    return (
        <header>
            <div className='admin-nick'>{titlename}</div>
            <div className="admin-instruction">
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
                                Ochilov.M
                            </div>
                            <div className="col-12 another">
                                Admin
                            </div>
                        </div>
                        <div className="col-4 profile">
                            <img src={Profile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default index