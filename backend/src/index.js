// EXPRESS SERVER


// LIBRARY IMPORTS
const express = require('express');


// SERVER CREATION
const app = express();

// CONFIGURATIONS
const port = 4000;



// MySQL



// Server listening
app.listen(port, () => {
    console.log(`server initiate in http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Something!');


});


// ENDPOINTS



// GET API




// ------------------------------
//  STATICS SERVER FOR REACT
// ------------------------------

app.use(express.static('./public.html'))
