import React from 'react';
import cu from './Users.module.css'
import userPhoto from '../img/doomer.jpg'

const Users =(props)=>{
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
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={cu.userPhoto} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={() => {
                                        props.unfollow(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        props.follow(u.id)
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