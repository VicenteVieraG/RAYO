import express from "express";
import opennode from "opennode";
import axios from "axios";

//Server Main SetUp
const app = express();
const PORT = 8080;
const KEY = "05283ec2-5775-4e67-a93a-dc9fdccdbf9d";
//const ENVTYPE = "dev";
//opennode.setCredentials(KEY, ENVTYPE);

const options = {
	method: 'POST',
	url: 'https://api.opennode.com/v1/charges',
	headers: {
	accept: 'application/json',
	'Content-Type': 'application/json',
	Authorization: KEY
	},
	data: {amount: 4}
};

try{
	const response = await axios.request(options);
	console.log(response.data);
}catch(error){
	console.log(error);
}

app.get('/', async(req, res) => {
});
  
app.listen(PORT, () => {
	console.log(`[⚡server⚡]: Listening on port http://localhost:${PORT}`);
});