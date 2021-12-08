# TodoList (React and Express)
Todo-List made In React and Node.js/Express with CRUD Functionality

## User Stories
- Signup
- Login
- View your tasks
- Add a new task
- Update task
- Delete task
- Complete/Incomplete task

## Admin Stories
- Login
- View all of the tasks for any user
- Delete users
- Add a new task for any user
- Update any task for any user
- Delete any task for any user
- View your tasks
- Add a new task
- Update task
- Delete task
- Complete/Incomplete task


### UML diagrm:


### Routes
Component     |     Path      |  Permissions
------------- | -----------   | ------------
Login         | `/`           | everyone
SignUp        | `/signup`     | everyone
Home          | `/home`       | user + admin 
Users         | `/usres`      | admin only 
OneUser       | `/user/:id`   | admin only 



