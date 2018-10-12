const mongoose = require('mongoose')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const MongoStore = require('connect-mongo')(session)
const api = require('./api/controller')
const app = express()

const db = mongoose.connect(
    'mongodb://localhost:27017/test'
).then(conn => conn).catch(console.error)

app.use(bodyParser.json())

app.use((request, response, next) => {
    Promise.resolve(db).then(
        (connection, err) => (
            typeof connection !== 'undefined'
                ? next()
                : next(new Error('MongoError'))
        )
    )
})
app.use(session({
    secret: 'MERN Cookbook Secrets',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        collection: 'sessions',
        mongooseConnection: mongoose.connection,
    }),
}))

app.use('/users', api)
app.listen(
    1337,
    () => console.log('Web Server running on port 1337'),
)




//const mongoose = require('mongoose');
//const { connection, Schema } = mongoose;
//mongoose.connect(('mongodb://localhost:27017/test')).catch(console.error);

//const UserSchema = new Schema({
//    username: {
//        type: String,
//        minlength: 6,
//        maxlength: 20,
//        required: [true, 'user is required'],
//        validate: {
//            message: '{VALUE} is not a valid username!',
//            validator: (val) => /^[a-zA-z]+$/.test(val)
//        },
//    },
//});

//const User = mongoose.model('User', UserSchema);

//connection.once('connected', async () => {
//    try {
//        const user = new User();
//        let errors = null;
//        errors = user.validateSync();
//        console.dir(errors.errors['username'].message);

//        user.username = 'Smith';
//        errors = user.validateSync();
//        console.dir(errors.errors['username'].message);


//        user.username = 'SMith_1234';
//        errors = user.validateSync();
//        console.dir(errors.errors['username'].message);
//    } catch (error) {
//        console.dir(error, { colors: true });
//    } finally {
//        await connection.close();
//    }


//});




//const mongoose = require('mongoose');
//const { connection, Schema } = mongoose;
//mongoose.connect(('mongodb://localhost:27017/test')).catch(console.error);

//const UserSchema = new Schema({
//    firstName: {
//        type: String, required: true,
//    },
//    lastName: {
//        type: String, required: true
//    }
//});

//UserSchema.pre('init', async function preInit() {
//    console.log('A document is going to be intialized!');
//});

//UserSchema.post('init', async function postInit() {
//    console.log('A doc was initialized');
//});



//UserSchema.pre('validate', async function preValidate() {
//    console.log('A document is going to be validated!');
//});

//UserSchema.post('validate', async function postValidate() {
//    console.log('A doc was validate');
//});




//UserSchema.pre('save', async function preSave() {
//    console.log('A document is going to be saved!');
//});

//UserSchema.post('save', async function postSave() {
//    console.log(`A doc was saved id=${this.id}`);
//});


//UserSchema.pre('remove', async function preRemove() {
//    console.log('A document is going to be removed!');
//});

//UserSchema.post('remove', async function postRemove() {
//    console.log(`A doc was removed id = ${ this.id }`);
//});






//const User = mongoose.model('User', UserSchema);

//connection.once('connected', async () => {
//    try {
//        const user = new User({
//            firstName: 'John',
//            lastName: 'Smith'
//        });

//        await user.save();
//        await User.findById(user.id);
//        await user.remove();
//        await connection.close();
//    } catch (error) {
//        await connection.close();
//        console.dir(error.message, { colors: true });
//    }
//});













//const mongoose = require('mongoose');
//const { connection, Schema } = mongoose;

//mongoose.connect(('mongodb://localhost:27017/test')).catch(console.error);

//const UserSchema = new Schema({
//    firstName: String,
//    lastName: String,
//    likes: [String]
//});

//UserSchema.method('setFullName', function setFullName(v) {
//    const fullname = String(v).split(' ');
//    this.lastName = fullname[0];
//    this.firstName = fullname[1];
//});

//UserSchema.method('getFullName', function getFullName() {
//    return `${this.lastName} ${this.firstName}`;
//});

//UserSchema.method('loves', function loves(stuff) {
//    this.likes.push(stuff);
//});

//UserSchema.method('dislikes', function dislikes(stuff) {
//    this.likes = this.likes.filter(str => str !== stuff);
//});

//const User = mongoose.model('User', UserSchema);

////async function crud()

//connection.once('connected', async () => {
//    try {
//        const user = new User();
//        user.setFullName("asd ccc");
//        user.loves("cats/kittens");
//        user.loves("asd");
//        user.loves("snakes");
//        await user.save();

//        const person = await User.findOne()
//            .where('firstName', 'ccc')
//            .where('likes').in(['snakes', 'cats/kittens']);
//        person.dislikes('snakes');
//        await person.save();

//        console.log(person.getFullName());
//        console.log(JSON.stringify(person, null, 4));

//        await user.remove();
//    } catch (error) {
//        console.dir(error.message, { colors: true });
//    } finally {
//        await connection.close();
//    }
//});













//const mongoose = require('mongoose');
//const { connection, Schema } = mongoose;

//mongoose.connect('mongodb://localhost:27017/test').catch(console.error);

//const UserSchema = new Schema({
//    firstName: String,
//    lastName: String,
//    age: Number
//});


//const User = mongoose.model('User', UserSchema);

//connection.once('connected', async () => {
//    try {
//        console.log("Beginning");
//        const user = await new User({
//            firstName: 'John',
//            lastName: 'Snow',
//            age: 30
//        }).save();
//        console.log("snow created");

//        const findUser = await User.findOne().where('firstName').equals('John').where('age').lte(30).select('lastName age');
//        console.log(JSON.stringify(findUser, null, 4));
//        console.log("snow found");
//        await user.remove();
//        console.log("snow removed");
//    } catch (error) {
//        console.dir(error.message, { colors: true });
//        console.log("snow errored");
//    } finally {
//        console.log("closing");
//        await connection.close();
//        console.log("closed");
//    }
//});



//const mongoose = require('mongoose');
//const { connection, Schema } = mongoose;

//mongoose.connect('mongodb://localhost:27017/test').catch(console.error);

//const UserSchema = new Schema({
//    firstName: String,
//    lastName: String,
//    likes: [String]
//});


//const User = mongoose.model('User', UserSchema);

//const addUser = (firstName, lastName) => new User({
//    firstName, lastName
//}).save();

//const getUser = (id) => User.findById(id);

//const removeUser = (id) => User.remove({ id });

//connection.once('connected', async () => {
//    try {
//        const newUser = await addUser('He', 'Last');
//        const user = await getUser(newUser.id);
//        user.firstName = 'ASD';
//        user.lastName = "zxc";
//        user.likes = ["Cooking", "reading", "movies!"];

//        await user.save();

//        console.log(JSON.stringify(user, null, 4));
//        await (removeUser(user.id));
//    } catch (error) {
//        console.dir(error.message, { colors: true });
//    } finally {
//        await connection.close();
//    }
//});























//const express = require('express');
//const uuid = require('uuid');
//const app = express();

//let data = [
//    { id: uuid(), name: 'Bob' },
//    { id: uuid(), name: 'Alice'}
//];

//const usr = {
//    create(name) {
//        const user = { id: uuid(), name }
//        data.push(user)
//        return user
//    },
//    read(id) {
//        if (id === 'all') return data
//        return data.find(user => user.id === id)
//    },
//    update(id, name) {
//        const user = data.find(usr => usr.id === id)
//        if (!user) return { status: 'User not found' }
//        user.name = name
//        return user
//    },
//    delete(id) {
//        data = data.filter(user => user.id !== id)
//        return { status: 'deleted', id }
//    }
//} 


//app.post('/users/:name', (req, res) => {
//    if (req.params.name === 'alice') {
//        console.log("Already exists!");
//        res.status(400);
//    }
//    else {
//        res.status(201).json(usr.create(req.params.name));
//    }
//});


//app.get('/users/:id', (req, res, next) => {
//    res.status(200).json(usr.read(req.params.id));
//});



//app.put('/users/:id=:name', (req, res, next) => {
//    res.status(200).json(usr.update(
//        req.params.id,
//        req.params.name));
//});

//app.delete('/users/:id', (req, res, next) => {
//    res.status(200).json(usr.delete(req.params.id));
//});


//app.listen(1337);




















//const express = require('express')
//const app = express()
//    app.get('*', (request, response, next) => {
//        response.send('Hello there!')
//    })
//    app.listen(
//        1337,
//        () => console.log('Web Server running on port 1337'),
//    ) 














//const express = require('express');
//const fs = require('fs');
//const app = express();

//app.engine('tpl', (filepath, options, callback) => {
//    fs.readFile(filepath, (err, data) => {
//        if (err) {
//            return callback(err)
//        }
//        const content = data
//            .toString()
//            .replace(/%[a-z]+%/gi, (match) => {
//                const variable = match.replace(/%/g, '')
//                if (Reflect.has(options, variable)) {
//                    return options[variable]
//                }
//                return match
//            })
//        return callback(null, content)
//    })
//}) 

//app.set('views', './views');
//app.set('view engine', 'tpl');

//app.get('/', (req, res, next) => {
//    res.render('home', {
//        title: 'Hello',
//        desc: 'World!'
//    });
//});

//app.listen(1337);






//const express = require('express');
//const vhost = require('vhost');
//const app = express();

//const users = express.Router();

//users.get('/', (req, res, next) => {
//    const username = req.vhost[0].split('-').map(name => (
//        name[0].toUpperCase() + name.slice(1))).join(' ')
//    res.send(`Hello, ${username}`);
//});

//app.use(users);
//app.use(vhost('*.localhost:3000', users));

//app.listen(3000);


















//const express = require('express');
//const vhost = require('vhost');
//const app = express();

//const app1 = express.Router();
//const app2 = express.Router();



//app1.get('/', (req, res, next) => {
//    res.send('This is the main application');
//});

//app2.get('/', (req, res, next) => {
//    res.send("this is the secondary app!");
//});



//app.use(vhost('localhost', app1), (req, res, next) => {
//    console.log("in app1");
//});

//app.use(vhost('second.localhost', app2), (req, res, next) => {
//    console.log("in app2");
//});


//app.listen(1337);




//const express = require('express');
//const vhost = require('vhost');
//const app = express();

//const app1 = express.Router();
//const app2 = express.Router();

//app1.get('/', (request, response, next) => {
//    response.send('This is the main application.')
//});

//app2.get('/', (request, response, next) => {
//    response.send('This is a second application.')
//});

//app.use(vhost('localhost', app1));
//app.use(vhost('second.localhost', app2));

//app.listen(1337, () => console.log('Web Server running on port 1337'),
//);









//const express = require('express');
//const morgan = require('morgan');
//const app = express();

//app.use(morgan('dev'));

//app.get('*', (req, res, next) => {
//    res.send('Hello morgan!');
//});

//app.listen(1337);








//const express = require('express');
//const compression = require('compression');
//const app = express();


//app.use(compression({ level: 9, threshold: 0 }));

//app.get('/', (req, res, next) => {
//    res.send(` 
//          <!DOCTYPE html> 
//          <html lang="en"> 
//          <head> 
//              <meta charset="utf-8"> 
//              <title>WebApp powered by ExpressJS</title> 
//          </head> 
//          <body> 
//              <section role="application"> 
//                  <h1>Hello! this page is compressed!</h1> 
//              </section> 
//          </body> 
//         </html> 
//          `);
//    console.log(req.acceptsEncodings());
//});

//app.listen(1337);


















//const express = require('express');
//const bodyParser = require('body-parser');
//const app = express();

//app.use(bodyParser.text());
//app.use(bodyParser.urlencoded({ extended: true }));


//app.get('/', (request, response, next) => {
//    console.log("in //");
//    response.send(` 
//            <!DOCTYPE html> 
//            <html lang="en"> 
//            <head> 
//              <meta charset="utf-8"> 
//              <title>WebApp powered by ExpressJS</title> 
//           </head> 
//         <body> 
//            <div role="application"> 
//                <form method="post" action="/setdata"> 
//                    <input name="urlencoded" type="text" /> 
//                    <button type="submit">Send</button> 
//                </form> 
//               <form method="post" action="/setdata" 
//                 enctype="text/plain"> 
//                  <input name="txtencoded" type="text" /> 
//                  <button type="submit">Send</button> 
//               </form> 
//           </div> 
//        </body> 
//        </html> 
//       `)
//})

//app.post('/setdata', (req, res, next) => {
//    console.log(req.body);
//    res.end();
//});



//app.listen(1337, () => { console.log("LISTENING!") });


















//const express = require('express');
//const path = require('path');
//const app = express();

//const staticRouter = express.Router();


//const assets = {
//    first: path.join(__dirname, './public'),
//    second: path.join(__dirname, './public2'),
//};

//staticRouter.use(express.static(assets.first)).use(express.static(assets.second));

//app.use('/', staticRouter);


//app.listen(1337);



//const express = require('express');
//const path = require('path');
//const app = express();

//const publicDir = path.join(__dirname, './public');
//app.use('/public', express.static(publicDir));

//app.listen(1337);
















//const express = require('express');
//const app = express();

//app.get('/', (req, res, next) => {
//    try {
//        throw new Error('Something fucked!');
//    } catch (err) {
//        next(err);
//    }
//});




//app.use((error, req, res, next) => {
//    res.end(error.message);
//});

//app.listen(1337);















//const express = require('express');
//const app = express();
//const router = express.Router();

//router.use((req, res, next) => {
//    if (!req.query.id) {
//        next('router');
//        console.log("going out of router!");
//    }
//    else 
//    {
//        console.log("IN router!");
//        next();
//    }
//    console.log('URL: ', req.originalUrl);
//    console.log('URL: ', req.query);
//});


//router.get('/', (req, res, next) => {
//    const id = req.query.id;
//    res.send(`You specified ID: ${id}`);
    
//});



//app.get('/', router, (req, res, next) => {
//    console.log("after out of router!");
//    res.status(400).send('A user id is needed!');
//});



//app.use('/router', router);

//app.listen(1337);












//const express = require('express');
//const app = express();
//const router = express.Router();

//router.use((req, res, next) => {
//    console.log('URL: ', req.originalUrl);

//});

//app.use('/router', router);

//app.listen(1337);








//const express = require('express');
//const app = express();
//const loggerMiddleware = require('./middleware');


//app.use(loggerMiddleware({ enable: true }));
//app.listen(1337);


//const express = require('express');
//const app = express();

//app.use(function (req, res, next) {
//    req.allowed = Reflect.has(req.query, 'allowme');
//    next();
//});

//app.get('/', function (req, res, next) {
//    if (req.allowed) {
//        res.send('Hello secret!');
//    }
//    else {
//        res.send('Not so secretive!');
//    }
//});

//app.listen(1337);













//const express = require('express');
//const app = express();

//const miniapp = express.Router();

//miniapp.get('/home', function (req, res, next) {
//    const url = req.originalUrl;
//    res.status(200).send('You are visiting /home from '+url);
//})

//app.use('/first', miniapp);
//app.use('/second', miniapp);



//app.listen(1337);







//const express = require('express');
//const app = express();

//app.route('/:id-:tag').get(function (req, res, next) {
//    res.type('text/html');
//    res.write('<!DOCTYPE html>');
//    next();
//})
//    .
//    get(function (req, res, next) {
//        res.end(`
//                <html lang='en'>
//                    <head>
//                        <meta charset="utf-8">
//                        <title>END OF THWROLD!</title>
//                    </head>
//                    <body role="application">
//                        <form method="post" action="/home">
//                            <input type="text" />
//                            <button type="submit">Send!</button>
//                        </form>
//                    </body>
//                </html>`)
//    })
//    .
//    post((req, res, next) => {
//        res.send(req.params);
//    });


//app.listen(1337, () => console.log("Server listening!"));














//const express = require('express');
//const app = express();

//app.get("/", function (req, res, next) {
//    res.status(200).send("YOLO!");
//});

//app.get("/one", function (req, res, next) {
//    res.type('text/plain');
//    res.write('qwerty');
//    next();
//});


//app.get("/one", function (req, res, next) {
//    res.status(200).end('keyboard!');
//});


//app.get("/two", function (req, res, next) {
//    res.type('text/plain');
//    res.write('zxc');
//    next();
//});


//app.get("/two", function (req, res, next) {
//    res.status(200).end('asddd!');
//});

//app.listen(1337, () => console.log("Werver runinng!"))