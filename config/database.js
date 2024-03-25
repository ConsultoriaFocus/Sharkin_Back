const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('dotenv').config();


mongoose.connect('mongodb://localhost/focus_database', {useNewUrlParser: true,
      //useUnifiedTopology: true,
     // useCreateIndex: true
}).then(()=>console.log('Connection Succeful')).catch((err)=>console.log(err));