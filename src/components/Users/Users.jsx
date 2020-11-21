import React from 'react';
import cu from './Users.module.css'



const Users = (props) => {
    if(props.users.length ==0){
        props.setUser([
            { id: 1, followed: false, fullName: 'Kostya', status: 'pogoda top', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 2, followed: true, fullName: 'Kirill', status: '+1', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 3, followed: false, fullName: 'Alina', status: 'na samom dele pogoda tak sebe', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 4, followed: true, fullName: 'Vanya', status: 'vozmoshno', location: { city: 'Minsk', country: 'Belarus' } }
        ])
    }
  return( 
  <div>
  {
      props.users.map(u => <div key={u.id}>
          <span>
              <div>
                  <img src={u.photoUrl} className={cu.userPhoto}/>
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
                  <div>{u.fullName}</div>
                  <div>{u.status}</div>
              </span>
              <span>
                  <div>{u.location.country}</div>
                  <div>{u.location.city}</div>
              </span>
          </span>
      </div>)
  }
</div>)
}

export default Users;