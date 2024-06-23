const express = require('express');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(express.json());

app.use(cors({ credentials: true, origin: `http://localhost:${port}` }));

const UserRoutes = require('./routes/UserRoutes');
app.use('/user', UserRoutes);



app.listen(port);


