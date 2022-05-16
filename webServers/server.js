'use strict';

const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`Server listening at http://localhost:${port}`);
});

// You originally needed help from Sam, because you're an idiot, but as it turns out, you are INDEED an idiot and forgot how template literals work. So, yeah. Tell her that when she comes back from lunch.