const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//----------------------------------
app.get('/', (req,res) => {
    res.render('index.ejs');
    console.log('Connected !')
})


app.listen(7000)