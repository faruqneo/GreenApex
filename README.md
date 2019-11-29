# GreenApex

#1 - Department

Create a department
POST `/department`

Request
```
{
	"name": "back-end",
	"status": "Active"  (optional)
}
```

Update a department
PUT `/department`

Request
```
{
	"name": "back-end",
	"status": "Active"  (optional)
}
```

Get all the departments
GET `/department`

Delete a department
Delete `/department`

Request
```
{
	"name": "back-end"
}
```

Get a particular department
GET `/department?departName=front-end`

#2 - Skill

Create a skill.
POST `/skill`

Request
```
{
	"name": "Angular",
	"department": "5de0ef269fa0381d10376f74",
	"status":"Active"
}
```

Update a skill
PUT `/skill`

Request
```
{
	"name": "Angular",
	"department": "5de0ef269fa0381d10376f74",
	"status":"Active"
}
```

Get all the skills
GET `/skill`

Delete a skill
Delete `/skill`

Request
```
{
	"name": "Angular"
}
```
Get a particular skill
GET `/skill?skillName=Angular`

Get all the skills of the department
GET `/skill/All`


`Note: instend of timestamp we have createdAt & updatedAt fields`