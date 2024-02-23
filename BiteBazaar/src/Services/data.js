const details = [
    {
      image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57262fe3839f0bff174f3d7e7cc8a2b4",
      name: "Polar Bear",
      rating: 4.3,
      food_types: ['Arabian', 'Mexican', 'Chinese', 'Asian'],
      location: 'Whitefield'
    },
    {
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57262fe3839f0bff174f3d7e7cc8a2b4",
        name: "Polar Bear",
        rating: 4.3,
        food_types: ['Arabian', 'Mexican', 'Chinese', 'Asian'],
        location: 'Whitefield'
      },
      {
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57262fe3839f0bff174f3d7e7cc8a2b4",
        name: "Polar Bear",
        rating: 4.3,
        food_types: ['Arabian', 'Mexican', 'Chinese', 'Asian'],
        location: 'Whitefield'
      },
      {
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57262fe3839f0bff174f3d7e7cc8a2b4",
        name: "Polar Bear",
        rating: 4.3,
        food_types: ['Arabian', 'Mexican', 'Chinese', 'Asian'],
        location: 'Whitefield'
      },
      {
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57262fe3839f0bff174f3d7e7cc8a2b4",
        name: "Polar Bear",
        rating: 4.3,
        food_types: ['Arabian', 'Mexican', 'Chinese', 'Asian'],
        location: 'Whitefield'
      },
      {
        image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57262fe3839f0bff174f3d7e7cc8a2b4",
        name: "Polar Bear",
        rating: 4.3,
        food_types: ['Arabian', 'Mexican', 'Chinese', 'Asian'],
        location: 'Whitefield'
      },
      {
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57262fe3839f0bff174f3d7e7cc8a2b4",
          name: "Polar Bear",
          rating: 4.3,
          food_types: ['Arabian', 'Mexican', 'Chinese', 'Asian'],
          location: 'Whitefield'
        },
        {
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57262fe3839f0bff174f3d7e7cc8a2b4",
          name: "Polar Bear",
          rating: 4.3,
          food_types: ['Arabian', 'Mexican', 'Chinese', 'Asian'],
          location: 'Whitefield'
        },
        {
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57262fe3839f0bff174f3d7e7cc8a2b4",
          name: "Polar Bear",
          rating: 4.3,
          food_types: ['Arabian', 'Mexican', 'Chinese', 'Asian'],
          location: 'Whitefield'
        },
        {
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57262fe3839f0bff174f3d7e7cc8a2b4",
          name: "Polar Bear",
          rating: 4.3,
          food_types: ['Arabian', 'Mexican', 'Chinese', 'Asian'],
          location: 'Whitefield'
        },
        {
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57262fe3839f0bff174f3d7e7cc8a2b4",
          name: "Polar Bear",
          rating: 4.3,
          food_types: ['Arabian', 'Mexican', 'Chinese', 'Asian'],
          location: 'Whitefield'
        },
        {
          image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/57262fe3839f0bff174f3d7e7cc8a2b4",
          name: "Polar Bear",
          rating: 4.3,
          food_types: ['Arabian', 'Mexican', 'Chinese', 'Asian'],
          location: 'Whitefield'
        },
  ];

  export default details;

  /* 
  filterOptions = {
        author: 'authorname', 
        price: {
          min_price: 300,
          max-price: 400,
          order: 'lowToHigh'
        },
        language: [lanuage_1, lanuage_2, ...],
        genre: [genre_1, genre_2, ....],
        min_rating: 3.5
     }
   }
  


  function filterBooks(books, filterOptions) {

    let filteredBooks;


    // To filter the book according the author's name
    if(filterOptions.author) {
        filteredBooks = books.filter(each_book => each_book.author === filterOptions.author)
    }


    // To filter the book according to the price and in specific order - Ascending or Descending
    if(filterOptions.price) {
      filteredBooks = books.filter(each_book => (
          each_book.price >= filterOptions.price.min_price && 
          each_book.price <= filterOptions.price.max_price
      ))
      
      // To sort the book in the increasing order of their price
      if(filterOptions.price.order === 'lowToHigh') {
          filteredBooks = filteredBooks.sort((a, b)=> a.price - b.price)
      }

      // To sort the book in the decreasing order of their price
      else {
          filteredBooks = filteredBooks.sort((a, b)=> b.price - a.price)
      }
    }


    // To filter the book according to the minimum rating
    if(filterOptions.rating) {
        filteredBooks = books.filter(book => book.rating >= filterOptions.min_rating)
    }


    // To filter the book according to the genre
    if(filterOptions.genre) {
      filteredBooks = books.filter(book => filterOptions.genre.some(genre => genre === book.genre))
    }


    // To filter the book according to the langauge
    if(filterOptions.author) {
      filteredBooks = books.filter(book => filterOptions.language.some(language => language === book.language))
    }

    return filteredBooks
    
  }
  */
