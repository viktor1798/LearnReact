import React from 'react';
import cu from './Users.module.css'
import userPhoto from '../img/doomer.jpg'
import { NavLink } from 'react-router-dom';
import * as axsios from 'axios'

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalCountUser / props.pageSize)
    let pages = [];
    for (let i = 1; i <= 60; i++) {
        pages.push(i);
    }


    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && cu.selectedPage}
                        onClick={(e) => { props.onPageChenged(p); }}>{p}</span>
                })}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={cu.userPhoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {

                                    axsios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'e7c17a2e-5f6e-4e44-9c96-00ef2b1a2795'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unfollow(u.id)
                                            }
                                        })



                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    axsios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'e7c17a2e-5f6e-4e44-9c96-00ef2b1a2795'
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                        })




                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>)


}

export default Users;