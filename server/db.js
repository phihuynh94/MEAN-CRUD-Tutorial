const mongoose = require('mongoose');

// this fixed an error with mongoose
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/MeanStackDB', 
    // fixed errors with mongoose
    {useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
    // inform if connection to mongodb successed.
    if (!err) {console.log('MongoDB connection successed.');}
    else {console.log('Error in MongoDB connection: ' + JSON.stringify(err, undefined, 2));}
})