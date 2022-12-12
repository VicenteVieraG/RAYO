import express from "express";
import opennode from "opennode";
import axios from "axios";

//Server Main SetUp
const app = express();
const PORT = 8080;
const KEY = "05283ec2-5775-4e67-a93a-dc9fdccdbf9d";
opennode.setCredentials(KEY);

const charge = {
	"amount":"4.13",
	"description":"Test",
	"currency":"USD",
	"customer_email":"a01639784@tec.mx",
	"notif_email":"a01639784@tec.mx",
	"customer_name":"Chente",
	"order_id":"21",
	"ttl":10
  };

try{
	const res = await opennode.createCharge(charge);
	console.log(res);
}catch(error){
	console.log(error);
}

app.listen(PORT, () => {
	console.log(`[⚡server⚡]: Listening on port http://localhost:${PORT}`);
});