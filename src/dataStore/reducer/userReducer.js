// import actions :
import {ADD_USER, CHANGE_STATUS} from '../action/userAction'
import uuid from 'uuid/v1';

const initialState = {
    users : [
        {
          id: uuid(),
          name: 'Ekaterina Tankova',
          email: 'ekaterina.tankova@devias.io',
          avatarUrl: '/images/avatars/avatar_3.png',
          active : true,
        },
        {
          id: uuid(),
          name: 'Cao Yu',
          email: 'cao.yu@devias.io',
          avatarUrl: '/images/avatars/avatar_4.png',
          active : true,
        },
        {
          id: uuid(),
          name: 'Alexa Richardson',
          email: 'alexa.richardson@devias.io',
          avatarUrl: '/images/avatars/avatar_2.png',
          active : true,
        },
        {
          id: uuid(),
          name: 'Anje Keizer',
          email: 'anje.keizer@devias.io',
          avatarUrl: '/images/avatars/avatar_5.png',
          active : true,
        },
        {
          id: uuid(),
          name: 'Clarke Gillebert',
          email: 'clarke.gillebert@devias.io',
          avatarUrl: '/images/avatars/avatar_6.png',
          active : false,
        },
        {
          id: uuid(),
          name: 'Adam Denisov',
          email: 'adam.denisov@devias.io',
          avatarUrl: '/images/avatars/avatar_1.png',
          active : false,
        },
        {
          id: uuid(),
          name: 'Ava Gregoraci',
          email: 'ava.gregoraci@devias.io',
          avatarUrl: '/images/avatars/avatar_7.png',
          active : true,
        },
        {
          id: uuid(),
          name: 'Emilee Simchenko',
          email: 'emilee.simchenko@devias.io',
          avatarUrl: '/images/avatars/avatar_8.png',
          active : true,
        },
        {
          id: uuid(),
          name: 'Kwak Seong-Min',
          email: 'kwak.seong.min@devias.io',
          avatarUrl: '/images/avatars/avatar_9.png',
        active : true,        },
        {
          id: uuid(),
          name: 'Merrile Burgett',
          email: 'merrile.burgett@devias.io',
          avatarUrl: '/images/avatars/avatar_10.png',
          active : true,
        }
      ],
}
/* 
{'firstname': '', 'lastname' : '', 'email': '', 'picture': []}
*/
const UserReducer = (state = initialState, action)=>{

    switch (action.type) {
        case ADD_USER:
            let dataHolder = {};
            dataHolder.id = uuid();
            
             dataHolder.name = action.newUser.firstname + action.newUser.lastname;
             dataHolder.email = action.newUser.email;
             dataHolder.avatarUrl = URL.createObjectURL(action.newUser.picture); 
             dataHolder.active = true;

            return {
                ...state, 
                users: [...state.users, dataHolder]
            };
        case CHANGE_STATUS:
            state.users.forEach(user => {
                if(user.id === action.userId){
                    user.active = !action.status;
                }
            });
            return {
                ...state, 
            };
        default:
            return state;
    }
}

export default UserReducer;