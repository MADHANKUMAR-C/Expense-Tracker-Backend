const mongoose = require('mongoose');
const mongooseUrl = 'mongodb+srv://madhankumar8825487841:mVdEf3n9XD8I7wCr@cluster0.mfe76lo.mongodb.net/CSD';
mongoose.connect(mongooseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

module.exports = mongoose;