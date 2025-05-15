# Bookmark Manager

A simple web application for storing and managing bookmarks with categories.

## Features

- Add bookmarks with URLs and categories
- View all your saved bookmarks
- Delete bookmarks you no longer need
- Search bookmarks by URL or category (API available)
- Mark bookmarks as favorites (API available)

## Project Structure

The project is divided into two main parts:

### Frontend
- HTML, CSS, and vanilla JavaScript
- Modern, responsive UI with smooth animations
- Located in the `frontend` directory

### Backend
- Node.js with Express
- RESTful API for bookmark management
- In-memory data storage
- Located in the `backend` directory

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/bookmarks` | GET | Get all bookmarks |
| `/bookmarks` | POST | Create a new bookmark |
| `/bookmarks/:id` | DELETE | Delete a bookmark by ID |
| `/bookmarks/:id/favorite` | PATCH | Toggle favorite status |
| `/bookmarks/search?query=term` | GET | Search bookmarks by URL or category |

## Setup and Installation

### Prerequisites
- Node.js (v12 or higher)
- npm (v6 or higher)

### Installation Steps

1. Clone the repository:
```
git clone <repository-url>
cd BookMark-Manager
```

2. Install backend dependencies:
```
cd backend
npm install
```

3. Start the backend server:
```
npm start
```
The server will start on http://localhost:3001

4. Open the frontend:
- Simply open the `frontend/index.html` file in a web browser
- Or serve it using a static file server

## Testing the API

You can test the API using tools like Postman:

1. **GET All Bookmarks**
   - GET http://localhost:3001/bookmarks

2. **Add New Bookmark**
   - POST http://localhost:3001/bookmarks
   - Body (JSON): `{ "url": "https://example.com", "category": "Example" }`

3. **Delete Bookmark**
   - DELETE http://localhost:3001/bookmarks/:id

4. **Toggle Favorite Status**
   - PATCH http://localhost:3001/bookmarks/:id/favorite

5. **Search Bookmarks**
   - GET http://localhost:3001/bookmarks/search?query=example

## Technologies Used

- Frontend: HTML5, CSS3, JavaScript
- Backend: Node.js, Express
- Other: CORS for cross-origin requests

## Future Enhancements

- Persistent storage with a database
- User authentication
- Bookmark sharing capabilities
- Browser extension integration

### Setup Instructions

#### 1. Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

#### 2. Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install the required dependencies (if applicable):
   ```bash
   npm install
   ```


### Reference UI

Here's UI design:

![Bookmark UI Reference](https://utfs.io/f/A8JZzw0Laf9jTVXapRWjzxHK35FpwJ6I9GCN4fRo2bsXZeid)


