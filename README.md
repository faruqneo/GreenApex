# GreenApex

## Department

1. Create a department\
POST `/department`\
```
{
	"name": "back-end",
	"status": "Active"  (optional)
}
```

2. Update a department\
PUT `/department`\
```
{
	"name": "back-end",
	"status": "Active"  (optional)
}
```

3. Get all the departments\
GET `/department`

4. Delete a department\
Delete `/department`
```
{
	"name": "back-end"
}
```

5. Get a particular department\
GET `/department?departName=front-end`



## Skill

1. Create a skill.\
POST `/skill`\
```
{
	"name": "Angular",
	"department": "5de0ef269fa0381d10376f74",
	"status":"Active"
}
```

2. Update a skill\
PUT `/skill`\
```
{
	"name": "Angular",
	"department": "5de0ef269fa0381d10376f74",
	"status":"Active"
}
```

3. Get all the skills\
GET `/skill`

4. Delete a skill\
Delete `/skill`\
```
{
	"name": "Angular"
}
```
5. Get a particular skill\
GET `/skill?skillName=Angular`

6. Get all the skills of the department\
GET `/skill/All`


`Note: instend of timestamp we have createdAt & updatedAt fields`