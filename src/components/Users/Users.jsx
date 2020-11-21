import React from 'react';
import cu from './Users.module.css'
import * as axsios from 'axios'
import userPhoto from '../img/doomer.jpg'



// const Users = (props) => {
//     // if(props.users.length ==0){
//     //     props.setUser([
//     //         { id: 1,photoUrl:'https://lh3.googleusercontent.com/proxy/gbQ5SwOUiLOdt2_Fb93mkKI8qnVG3ELgkTn8c68v4cE2I38aWDd6UtLGE4N3d462LtbRKukYsIi1LOEuGGMzZRTCZaK3TNlscmWgPNE', followed: false, fullName: 'Kostya', status: 'pogoda top', location: { city: 'Minsk', country: 'Belarus' } },
//     //         { id: 2,photoUrl:'https://lh3.googleusercontent.com/proxy/gbQ5SwOUiLOdt2_Fb93mkKI8qnVG3ELgkTn8c68v4cE2I38aWDd6UtLGE4N3d462LtbRKukYsIi1LOEuGGMzZRTCZaK3TNlscmWgPNE', followed: true, fullName: 'Kirill', status: '+1', location: { city: 'Minsk', country: 'Belarus' } },
//     //         { id: 3,photoUrl:'https://lh3.googleusercontent.com/proxy/gbQ5SwOUiLOdt2_Fb93mkKI8qnVG3ELgkTn8c68v4cE2I38aWDd6UtLGE4N3d462LtbRKukYsIi1LOEuGGMzZRTCZaK3TNlscmWgPNE', followed: false, fullName: 'Alina', status: 'na samom dele pogoda tak sebe', location: { city: 'Minsk', country: 'Belarus' } },
//     //         { id: 4,photoUrl:'https://lh3.googleusercontent.com/proxy/gbQ5SwOUiLOdt2_Fb93mkKI8qnVG3ELgkTn8c68v4cE2I38aWDd6UtLGE4N3d462LtbRKukYsIi1LOEuGGMzZRTCZaK3TNlscmWgPNE', followed: true, fullName: 'Vanya', status: 'vozmoshno', location: { city: 'Minsk', country: 'Belarus' } }
//     //     ])
//     // }
//     let getUsers=()=>{
//         if(props.users.length ==0){
//             axsios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{props.setUser(response.data.items)})
//         }
//     }
//   return( 
//   <div>
//       <button onClick={getUsers}>getUsers</button>
//   {
//       props.users.map(u => <div key={u.id}>
//           <span>
//               <div>
//                   <img src={u.photos.small != null ? u.photos.small : userPhoto} className={cu.userPhoto}/>
//               </div>
//               <div>
//                   {u.followed
//                       ? <button onClick={() => {
//                           props.unfollow(u.id)
//                       }}>Unfollow</button>
//                       : <button onClick={() => {
//                           props.follow(u.id)
//                       }}>Follow</button>}

//               </div>
//           </span>
//           <span>
//               <span>
//                   <div>{u.name}</div>
//                   <div>{u.status}</div>
//               </span>
//               <span>
//                   <div>{"u.location.country"}</div>
//                   <div>{"u.location.city"}</div>
//               </span>
//           </span>
//       </div>)
//   }
// </div>)
// }

class Users extends React.Component{
     getUsers=()=>{
                 if(this.props.users.length ==0){
                     axsios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{props.setUser(response.data.items)})
                 }
             }

    render(){
        return( 
               <div>
                   <button onClick={this.getUsers}>getUsers</button>
               {
                   this.props.users.map(u => <div key={u.id}>
                       <span>
                           <div>
                               <img src={u.photos.small != null ? u.photos.small : userPhoto} className={cu.userPhoto}/>
                           </div>
                           <div>
                               {u.followed
                                   ? <button onClick={() => {
                                       this.props.unfollow(u.id)
                                   }}>Unfollow</button>
                                   : <button onClick={() => {
                                       this.props.follow(u.id)
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
}

export default Users;