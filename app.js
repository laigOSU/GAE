/**
 * Copyright 2017, Google, Inc.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// [START gae_node_request_example]
var http = require('http');
var fs = require('fs');
const express = require('express');

const app = express();
/**/

var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');



app.get('/', (req, res) => {
	//res.status(200).sendFile(__dirname + '/index.html');
	res.render('home');
});

app.post('/greeting', (req, res) => {
	// var qParams = [];
	// for (var p in req.body){
	// 	qParams.push({'firstnamez': p, 'lastnamez':req.body[p]})
	// }
	// console.log("qParams is: ", qParams);
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	console.log("req.body is: ", req.body);
	console.log("firstname is: ", firstname);
	console.log("lastname is: ", lastname);

	var context = {
		firstname: firstname,
		lastname: lastname
	};
	console.log("context is: ", context);

	//context.userinfo = req.body;
	res.render('greeting', context);
});



// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]
