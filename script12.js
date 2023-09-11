// Step 1
const library = [
    {
      title: 'Harry potter',
      author: 'jk rowlig',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'ABC',
      author: 'me',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'mybook',
      author: 'meagain',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];
  
  // Step 2
  library[0].status.read = true;
  library[1].status.read = true;
  library[2].status.read = true;
  
  // Step 3
  const { title: firstBook } = library[0];
  
  console.log(firstBook);
  
  // Step 4
  const libraryJSON = JSON.stringify(library);
  
  console.log(libraryJSON);
  