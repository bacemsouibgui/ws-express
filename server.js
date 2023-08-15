const express= require('express');
const Datee= require('./middleware/Date')

// instance d'express
const app= express();

app.use(express.static(__dirname + '/public'));
app.use(Datee);

const port= 5000;
app.listen(port, err=> {
    err? console.log(err) : console.log(`server is running on port ${port}`)   
})

/*app.get('/home', (req,res)=> {
    res.send('home page')
})
*/
/*app.get('/about', (req,res)=> {
    res.send('about page')
})*/

// Home File
app.get('/home', (req,res)=> {
    res.sendFile(__dirname + '/public/index.html')
})
console.log(__dirname + '/public/index.html')

// About File
app.get('/about', (req,res)=> {
    res.sendFile(__dirname + '/public/about.html' )
})

// wrong route
app.get('*', (req,res)=> {
    res.send('ressource not found')
})

// CSS
app.get('/CSS/style.css', (req,res)=> {

    res.sendFile(__dirname + '/public/CSS/style.css')
})
