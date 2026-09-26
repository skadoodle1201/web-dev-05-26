# Blog Post App

Entities/Collections

1. Post
2. User
3. Comment

## User Entity

    1. username
    2. id

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
