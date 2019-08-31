# API Reference

## Authentication
Describe how the authentication works here.


## Services
- Users
- Punches
- Statuses
- Reports

## Users

### Endpoints
- POST /users
- GET /users/:id
- GET /users 

### The User Object
Show a JSON sample of a user object here
```
{
    "userId": 1,
    "object": "user",
    "name": "Joanie Appleseed",
    ...
    "punches": [
        {
            "punchId": 1,
            "status": {
                "statusId": 1
                ...
            }
    ]
}
```


### Create a new user - POST /user


### Retrieve a user - GET /user/:id

Arguments:
- customer