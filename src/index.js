import express from "express";
import opennode from "opennode";
import axios from "axios";

//Server Main SetUp
const app = express();
const PORT = 8080;
const KEY = "22df16ad-cdb1-4f38-a3e8-70424a1d3ddf";
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
	data: {amount: 0}
  };

app.get('/', async(req, res) => {
	try{
		const response = await axios.request(options);
		console.log(response.data);
	}catch(error){
		console.log(error);
	}
});
  
app.listen(PORT, () => {
	console.log(`[⚡server⚡]: Listening on port http://localhost:${PORT}`);
});