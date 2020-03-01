export const ADD_USER = "ADD_USER";
export const CHANGE_STATUS = "CHANGE_STATUS";

export const AddUser = data =>({
    type: ADD_USER,
    newUser: data,
})

export const activation = (userId, status) =>({
    type: CHANGE_STATUS,
    status : status,
    userId: userId,
})

export const add_user = data =>({
    type: ADD_USER,
    newUser: data,
})