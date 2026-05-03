// export async function getBooks() {
//   const res = await fetch(
//     "https://book-friend-server.onrender.com/books"
//   );
//   const data = await res.json();
//   return data;
// }

export async function getBooks() {
  try {
    const res = await fetch(
      "https://book-friend-server.onrender.com/books",
      { cache: 'no-store' } // Recommended for dynamic data in Next.js 15
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch books: ${res.status}`);
    }

    const data = await res.json();
    return data || []; // Return empty array as fallback so .map() doesn't crash
  } catch (error) {
    console.error("getBooks Error:", error);
    return []; // Return safe empty data
  }
}

// export async function upcomingBooks() {
//   const res = await fetch(
//     "https://book-friend-server.onrender.com/upcoming"
//   );
//   const data = await res.json();
//   return data;
// }

export async function upcomingBooks() {
  try {
    const res = await fetch(
      "https://book-friend-server.onrender.com/upcoming",
      { cache: 'no-store' } // Recommended for dynamic data in Next.js 15
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch books: ${res.status}`);
    }

    const data = await res.json();
    return data || []; // Return empty array as fallback so .map() doesn't crash
  } catch (error) {
    console.error("upcomingBooks Error:", error);
    return []; // Return safe empty data
  }
}

// export async function getNewsByCategoryId(category_id) {
//   const res = await fetch(
//     `https://openapi.programming-hero.com/api/news/category/${category_id}`,
//   );
//   const data = await res.json();
//   return data.data;
// }

// export async function getBookDetailsById(id) {
//   const res = await fetch(
//     `https://book-friend-server.onrender.com/books/${id}`,
//   );
//   const data = await res.json();
//   return data;
// }

export async function getBookDetailsById(id) {
  try {
    const res = await fetch(
      `https://book-friend-server.onrender.com/books/${id}`
    );

    if (!res.ok) {
      return null; // Return null if specific book isn't found
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching book ${id}:`, error);
    return null;
  }
}
