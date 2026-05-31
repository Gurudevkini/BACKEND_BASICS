// SERVER SIDE RENDERING 

// const http=require('http');
// const fs= requrie('fs');
const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) =>
{
 if(req.url ==='/')
 {
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Taking user input </title></head>');
  res.write('<body><h1>Enter Your Details:</h1>');
  res.write('<form action="/submit_details" method="POST" >');
  res.write('<input type="text" name="username" placeholder="Enter your name"><br>');
  res.write('<label for="male">Male</label>')
  res.write('<input type="radio" id="Male" name="gender" value="male"/>')
  res.write('<label for="Female">Female</label>')
  res.write('<input type="radio" id="Female" name="gender" value="Female"/>')
  res.write('<br><input type="submit" value="Submit">');
  res.write('</form>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
 }
   else if(req.url.toLowerCase()==="/submit-details" && 
  req.method =="POST") {  
    fs.writeFileSync('user.txt','Gurudev Kini');
    res.statusCode=302; // YOU SHOULD CHANGE YOUR LOCATION 
    res.setHeader('Location','/') //
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>About me</title></head>');
  res.write('<body><h1>This is Gurudev kini Here/ you are learning /Backend/nodejs/express.js/mongodb</h1></body>');
  res.write('</html>');
 return res.end();
   }});
const PORT = 3000;
server.listen(PORT ,() =>
{
  console.log(`Server running on address http://localhost:${PORT}`)
});
