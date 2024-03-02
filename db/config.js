const mongoose= require('mongoose');
mongoose.connect("mongodb://localhost:27017/e-commerce", {useNewUrlParser: true});

mongoose.set('strictQuery', false);

