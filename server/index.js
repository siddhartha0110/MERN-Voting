const express = require("express");
const handles = require('./handlers');

const app = express();
const port = 9000;

app.get('/', (req, res) => {
    res.json({ name: "Sahil" })
})

app.use(handles.notFound);
app.use(handles.errors);
app.listen(port, console.log(`Server running on port ${port}`));