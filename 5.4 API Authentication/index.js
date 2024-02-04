import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "suraystark";
const yourPassword = "suray";
const yourAPIKey = "1083aece-f05e-4e7a-83c6-8cb931395a94";
const yourBearerToken = "6a1aa85d-57a3-4015-a4f2-1277011c5139";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response" });
});

app.get("/noAuth", async (req, res) => {
try{
const result= await axios.get(API_URL+"random");
res.render("index.ejs",{
  content: JSON.stringify(result.data)
});

}
catch (error){
  res.status(400).send(error.message)
}

  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  try {
    const result = await axios.get(
      API_URL + "all?page=2",
     
      {
        auth: {
          username: yourUsername,
          password: yourPassword,
        },
      }
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  try {
    const result = await axios.get(
      API_URL + "filter",{
        params: {
          score: 2,
          apiKey: yourAPIKey,
        },
      }
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }

});
// const config=`Bearer ${yourBearerToken}`

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(
      API_URL +"secrets/2",{
        headers: { 
          Authorization: `Bearer ${yourBearerToken}` ,
        },
      }
    );
    res.render("index.ejs", { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).send(error.message);
  }


});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
