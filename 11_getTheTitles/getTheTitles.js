const book = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ];

const getTheTitles = function(array) {
        return array.map(book => book.title);    
};

// Do not edit below this line
module.exports = getTheTitles;
