# Blog Post App

Entities/Collections

1. Post
2. User
3. Comment

## User Entity

    1. username
    2. id
    3. Password

## Post Entity

    1. Title String Required
    2. Content String Required
    3. Author Related User (ObjectId)
    4. Category Enum String [tech, sports, entertainment]
    5. Created_At Timestamps
    6. Updated_At Timestamps

## Comment

    1. comment String Required Lenght Min Max
    2. commenter ObjectId User
    3. post ObjectId Post
    4. Created_At Timestamps
    5. Updated_At Timestamps

JWT FLOW

1. npm i jsonwebtoken
2. Create JWT token after valid password and return token to the user
3. On protected route create a middleware to verify JWT
   a) in middleware verify JWT
4. a) IS VALID let him go through
   b) IS Invlid throw error
