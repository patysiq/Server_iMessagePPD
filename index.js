const express = require('express');
var app = express();
const router = express.Router();
var server = require('https').Server(app)
const fs = require('fs');
const jsonfile = require('jsonfile');
const bodyParser = require('body-parser');

const PORT = 3000;
const PAGE_ACCESS_TOKEN = 'abc';
const data1 = require('./data1.json')
const data2 = require('./data2.json')
const data3 = require('./data3.json')




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/agenda1', (req, res) => {
  res.setHeader("Content-Type",'application/json');
  res.send(data1.agenda1);
});

app.get('/agenda2', (req, res) => {
  res.setHeader("Content-Type",'application/json');
  res.json(data2.agenda2);
});

app.get('/agenda3', (req, res) => {
  res.setHeader("Content-Type",'application/json');
  res.json(data3.agenda3);
});

app.post('/agenda1', function (req, res) {
  const {id, name, phone} = req.body;
  const user = JSON.stringify(req.body);
  console.log('request = ' + user); 
  readFileData1(req.body.id, req.body.name, req.body.phone);
  res.send({
    "id" : req.body.id,
    "name" : req.body.name,
    "phone" : req.body.phone
  });
  res.end();
})

app.post('/agenda2', function (req, res) {
    const {id, name, phone} = req.body;
    const user = JSON.stringify(req.body);
    console.log('request = ' + user); 
    data1.agenda1.push(req.body);
    data2.agenda2.push(req.body);
    data3.agenda3.push(req.body);
    res.send({
        "id" : req.body.id,
        "name" : req.body.name,
        "phone" : req.body.phone
    });
    res.end();
})

app.post('/agenda3', function (req, res) {
    const {id, name, phone} = req.body;
    const user = JSON.stringify(req.body);
    console.log('request = ' + user); 
    data1.agenda1.push(req.body);
    data2.agenda2.push(req.body);
    data3.agenda3.push(req.body);
    res.send({
      "id" : req.body.id,
      "name" : req.body.name,
      "phone" : req.body.phone
    });
    res.end();
})

app.delete('/agenda1/:id', function (req, res) {
    const {id, name, phone} = req.body;
    const userString = JSON.stringify(req.body);
    console.log('request = ' + userString); 
    const found = data1.agenda1.some(user => user.id === req.body.id);
    console.log(data1.agenda1.id.JSON.stringify);

    if (!found) {
        res.status(400).json({ "message": "Não foi possível apagar o contato." });
      } else {
        console.log(id);
        var data = fs.readFileSync(data1.agenda1.json)
        delete data1.agenda1.splice(req.body.id, 1);
        delete data2.agenda2[id];
        delete data3.agenda3[id];

        res.send({
            "id" : req.body.id,
            "name" : req.body.name,
            "phone" : req.body.phone
          });
      }
    res.end();
})

app.delete('/agenda2/:id', function (req, res) {
    const {id, name, phone} = req.body;
    const userString = JSON.stringify(req.body);
    console.log('request = ' + userString); 
    const user = data1.agenda1.deleteOne({_id: req.body.id}, (err) => {
        if(err) return res.status(400).json({
            "error": true,
            "message": "Error: Contato não foi apagado! Verifique se o contato existe."
        });
    })
    const user2 = data2.agenda2.deleteOne({_id: req.body.id}, (err) => {
        if(err) return res.status(400).json({
            "error": true,
            "message": "Error: Contato não foi apagado! Verifique se o contato existe."
        });
    })
    const user3 = data3.agenda3.deleteOne({_id: req.body.id}, (err) => {
        if(err) return res.status(400).json({
            "error": true,
            "message": "Error: Contato não foi apagado! Verifique se o contato existe."
        });
    })
    res.send({
        "error": false,
        "message": "Artigo apagado com sucesso!"
    });
    res.end();
})

app.delete('/agenda3/:id', function (req, res) {
    const {id, name, phone} = req.body;
    const userString = JSON.stringify(req.body);
    console.log('request = ' + userString); 
    const user = data1.agenda1.deleteOne({_id: req.body.id}, (err) => {
        if(err) return res.status(400).json({
            "error": true,
            "message": "Error: Contato não foi apagado! Verifique se o contato existe."
        });
    })
    const user2 = data2.agenda2.deleteOne({_id: req.body.id}, (err) => {
        if(err) return res.status(400).json({
            "error": true,
            "message": "Error: Contato não foi apagado! Verifique se o contato existe."
        });
    })
    const user3 = data3.agenda3.deleteOne({_id: req.body.id}, (err) => {
        if(err) return res.status(400).json({
            "error": true,
            "message": "Error: Contato não foi apagado! Verifique se o contato existe."
        });
    })
    res.send({
        "error": false,
        "message": "Artigo apagado com sucesso!"
    });
    res.end();
})

app.put('/agenda1/:id', function (req, res) {
    const {id, name, phone} = req.body;
    const user = JSON.stringify(req.body);
    console.log('request = ' + user);
    id = _.extended(id, req.body);
    data1.agenda1.id.save(function(err) {
        if (err) {
            return res.send('/id', {
                "errors": err.errors,
                "id": id
            });
        } else {
            res.jsonp(id);
        }   
    })
    data2.agenda2.id.save(function(err) {
        if (err) {
            return res.send('/id', {
                "errors": err.errors,
                "id": id
            });
        } else {
            res.jsonp(id);
        }   
    })
    data3.agenda3.id.save(function(err) {
        if (err) {
            return res.send('/id', {
                "errors": err.errors,
                "id": id
            });
        } else {
            res.jsonp(id);
        }   
    })
    res.end();
  })

  app.put('/agenda2/:id', function (req, res) {
    const {id, name, phone} = req.body;
    const user = JSON.stringify(req.body);
    console.log('request = ' + user);
    id = _.extended(id, req.body);
    data1.agenda1.id.save(function(err) {
        if (err) {
            return res.send('/id', {
                "errors": err.errors,
                "id": id
            });
        } else {
            res.jsonp(id);
        }   
    })
    data2.agenda2.id.save(function(err) {
        if (err) {
            return res.send('/id', {
                "errors": err.errors,
                "id": id
            });
        } else {
            res.jsonp(id);
        }   
    })
    data3.agenda3.id.save(function(err) {
        if (err) {
            return res.send('/id', {
                "errors": err.errors,
                "id": id
            });
        } else {
            res.jsonp(id);
        }   
    })
    res.end();
  })

  app.put('/agenda3/:id', function (req, res) {
    const {id, name, phone} = req.body;
    const user = JSON.stringify(req.body);
    console.log('request = ' + user);
    id = _.extended(id, req.body);
    data1.agenda1.id.save(function(err) {
        if (err) {
            return res.send('/id', {
                "errors": err.errors,
                "id": id
            });
        } else {
            res.jsonp(id);
        }   
    })
    data2.agenda2.id.save(function(err) {
        if (err) {
            return res.send('/id', {
                "errors": err.errors,
                "id": id
            });
        } else {
            res.jsonp(id);
        }   
    })
    data3.agenda3.id.save(function(err) {
        if (err) {
            return res.send('/id', {
                "errors": err.errors,
                "id": id
            });
        } else {
            res.jsonp(id);
        }   
    })
    res.end();
  })

  async function readFileData1(id, name, phone) {
    fs.readFile('./data1.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        var agenda = JSON.parse(data); 
        
        agenda.agenda1.push({
            "id": id,
            "name": name,
            "phone": phone
        }); 
        var dataToString = JSON.stringify(agenda, null, 2);
        
        fs.writeFile('./data1.json', dataToString, { flag: 'a' },  function (err, data) {
            if (err) throw err;
        }); 
    }});
  }

  async function readFileData2(id, name, phone) {
    fs.readFile('./data2.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        var agenda = JSON.parse(data); 
        
        agenda.agenda2.push({
            "id": id,
            "name": name,
            "phone": phone
        }); 
        var dataToString = JSON.stringify(agenda, null, ' ');
        fs.unlink('./data2.json', (err) => {
            if (err) throw err;
            console.log('data2 was deleted');
          });
        fs.writeFileSync('./data2.json', dataToString, { flag: 'a' },  function (err, data) {
            if (err) throw err;
        }); 
    }});
  }

  async function readFileData3(id, name, phone) {
    fs.readFile('./data3.json', 'utf8', function readFileCallback(err, data){
        if (err){
            console.log(err);
        } else {
        var agenda = JSON.parse(data); 
        
        agenda.agenda3.push({
            "id": id,
            "name": name,
            "phone": phone
        }); 
        var dataToString = JSON.stringify(agenda, null, ' ');
        fs.unlink('./data3.json', (err) => {
            if (err) throw err;
            console.log('data3 was deleted');
          });
        fs.writeFileSync('./data3.json', dataToString, { flag: 'a' },  function (err, data) {
            if (err) throw err;
        }); 
    }});
  }


app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});