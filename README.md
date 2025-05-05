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
git clone https://github.com/hasinarahimy/afghan-proverbs-api.git
cd afghan-proverbs-api
npm install
npm run dev
npm run dev
