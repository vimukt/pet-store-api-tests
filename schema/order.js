var schema = {
	"definitions": {},
	"$schema": "http://json-schema.org/draft-07/schema#", 
	"$id": "https://example.com/object1614948780.json", 
	"title": "Root", 
	"type": "object",
	"required": [
		"id",
		"petId",
		"quantity",
		"shipDate",
		"status",
		"complete"
	],
	"properties": {
		"id": {
			"$id": "#root/id", 
			"title": "Id", 
			"type": "integer",
			"examples": [
				9222968140497278000
			],
			"default": 0
		},
		"petId": {
			"$id": "#root/petId", 
			"title": "Petid", 
			"type": "integer",
			"examples": [
				0
			],
			"default": 0
		},
		"quantity": {
			"$id": "#root/quantity", 
			"title": "Quantity", 
			"type": "integer",
			"examples": [
				0
			],
			"default": 0
		},
		"shipDate": {
			"$id": "#root/shipDate", 
			"title": "Shipdate", 
			"type": "string",
			"default": "",
			"examples": [
				"2021-03-05T12:51:57.380+0000"
			],
			"pattern": "^.*$"
		},
		"status": {
			"$id": "#root/status", 
			"title": "Status", 
			"type": "string",
			"default": "",
			"examples": [
				"placed"
			],
			"pattern": "^.*$"
		},
		"complete": {
			"$id": "#root/complete", 
			"title": "Complete", 
			"type": "boolean",
			"examples": [
				true
			],
			"default": true
		}
	}
}