# Afghan Proverbs & Sayings API

This is a RESTful API to manage traditional Afghan proverbs in Dari, Pashto, and English.

## Features
- CRUD operations (Create, Read, Update, Delete)
- Filter by category
- Search by keyword (any language)
- Get random proverb

## Data Model

| Field | Type | Description |
|-------|------|-------------|
| id | Integer | Unique identifier |
| textDari | String | Proverb in Dari |
| textPashto | String | Proverb in Pashto |
| translationEn | String | English translation |
| meaning | String | Meaning/interpretation |
| category | String | Proverb category (wisdom, advice, etc.) |

## How to run the project locally

```bash
git clone https://github.com/YOUR_USERNAME/afghan-proverbs-api.git
cd afghan-proverbs-api
npm install
npm run dev
Example Requests (using Postman)
	•	GET all proverbs:
GET http://localhost:3000/proverbs
	•	POST new proverb:
POST http://localhost:3000/proverbs
	•	GET single proverb:
GET http://localhost:3000/proverbs/:id
	•	PUT update proverb:
PUT http://localhost:3000/proverbs/:id
	•	DELETE delete proverb:
DELETE http://localhost:3000/proverbs/:id
### Steps to follow:

1. **Replace YOUR_USERNAME** with your actual GitHub username in the README.md.
2. Save the changes.
3. Commit the changes to GitHub as explained earlier.
