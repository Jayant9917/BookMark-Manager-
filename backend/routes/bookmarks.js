let bookmarks = []; // in memory space

export async function addBookmark(req, res, next) {
  try {
    const { url, category } = req.body;
    if (!url || !category) {
      return res.status(400).json({ error: 'URL and category are required' });
    }

    const newBookmark = {
      id: Date.now().toString(),
      url,
      category,
      createdAt: new Date().toISOString()
    };

    bookmarks.push(newBookmark);
    res.status(201).json(newBookmark);
  } catch (error) {
    next(error);
  }
}

export async function deleteBookmark(req, res, next) {
  try {
    const { id } = req.params;
    const index = bookmarks.findIndex(bookmark => bookmark.id === id);
    
    if (index === -1) {
      return res.status(404).json({ error: 'Bookmark not found' });
    }

    bookmarks.splice(index, 1);
    res.status(200).json({ message: 'Bookmark deleted successfully' });
  } catch (error) {
    next(error);
  }
}

export async function getAllBookmarks(req, res, next) {
  try {
    res.status(200).json(bookmarks);
  } catch (error) {
    next(error);
  }
}

// Search Bookmarks by category or url
export async function searchBookmarks(req, res, next) {
  try {
    const { query } = req.query;
    if (!query) {
      return res.status(400).json({ error: 'Search query is required' });
    }

    const results = bookmarks.filter(b => 
      b.category.toLowerCase().includes(query.toLowerCase()) || 
      b.url.toLowerCase().includes(query.toLowerCase())
    );

    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
}

// Toggle function status of a bookmark
export async function toggleFavorite(req, res, next){
  try{
    const { id } = req.params;
    const bookmark = bookmarks.find(bookmark => bookmark.id === id);

    if(!bookmark){
      return res.status(404).json({error : 'bookmark not found'});
    }
    bookmark.isFavorite = !bookmark.isFavorite;
    res.status(200).json(bookmark);
  }catch(error){
    next(error);
  }
}