This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

commands to run :

### `npm install`

## what i have added here 

### `redux-store`
inside src folder u will found a folder called dataStore there where i put my reducer and action
- in the userAction u will fined two invoked functions one for user activation and the other for adding users
- in the userReducer u will fined a dummy user-data as initialState and two switch cases for action handling

### `what folders did i work on `
 #### `src => views => Dashboard.js`
 in here i called the usersList folder so i can display the users data
 
 ### `src => views => components => TotalUsers.js`
 this file containes the user counter <<how many users we have and how many are active>>
 this folder is called in usersList uselly is called diractly from dashboard component, but because of a data updating issue i had to     calle it from usersList so the  componentWillReceiveProps method would be affective.
 
### `src => UserList => components => UsersTollbar `
  in here u will found the user adding code
  
### `src => UserList => components => UsersTable `
  in here i call users data from db and i show them on i table
  and i calle the TotalUsers component in here so when ever a user is activated or deactivated the componentWillReceiveProps will catch the changes and update 
  
