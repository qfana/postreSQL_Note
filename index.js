const express = require('express');
const userRouter = require('./routes/user.routes');
const PORT = process.env.PORT || 7788;

const app = express();

app.use(express.json());
app.use('/api', userRouter);

app.listen(PORT, () => { console.log(`started port: ${PORT}`); });