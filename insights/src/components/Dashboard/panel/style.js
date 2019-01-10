export const style = {
  base: {
    border       : '1px solid #ddd',
    width        : '50%',
    height       : '70%',
    display      : 'inline-block',
    verticalAlign: 'top',

    '@media (minWidth: 720px)' : {width: '50%'},
    '@media (minWidth: 1024px)' : {width: '33.33%'},
    
  },

  header: {
    base: {
      background: '#eee',
      padding   : '10px 5px'
    },
    text: {
      fontSize  : '2em',
      fontWeight: '300'
    }
  },

  content: {
    base: {
      padding: '10px 50px',
      height : '250px'
      
    },
    
  }
};


// content: {
//   base: {
//     padding: '10px 30px',
//     height : '250px',
//     firstChild: {
//       padding: '10px 80px',
//       height : '250px',
    
//   },
  

//   }
  
// }