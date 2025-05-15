
import express from 'express';
import cors from 'cors';
import { 
  addBookmark,
  deleteBookmark, 
  getAllBookmarks,
  searchBookmarks,
  toogleFavorite
} from './routes/bookmarks.js'; // importing callback functions for routes

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());


// Get all bookmarks
app.get('/bookmarks', getAllBookmarks);

// Add a new bookmark
app.post('/bookmarks', addBookmark);

// Delete a bookmark
app.delete('/bookmarks/:id', deleteBookmark);

// Toggle Favorite Status
app.patch('/bookmarks/:id/favorite', toogleFavorite);

// Search Bookmarks
app.get('/bookmarks/search', searchBookmarks);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




// The backend now supports:
// => Creating bookmarks
// => Deleting bookmarks
// => Listing all bookmarks
// => Searching bookmarks by URL or category
// => Marking/unmarking bookmarks as favorites