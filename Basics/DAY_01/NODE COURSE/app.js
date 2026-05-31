const http = require('http');

// FOR CREATING THE SERVER YOU MAY HAVE TOUGHT THIS AS A COMPICATED TASK|
// BUT ITS VERY SIMPLE JUST YOU HAVE TO CREATE 

const server = http.createServer((req,res) =>


{
  console.log(req.url, req.method, req.headers);

  if(req.url === '/')
  {
     res.setHeader('Content-Type','text/html');
     res.write('<html>');
  res.write('<head><title>Home </title></head>');
  res.write('<body><h1>this is a home page </h1></body>');
  res.write('</html>');
  return res.end();
  }else if (req.url==='/products')
  {
   res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>product page</title></head>');
  res.write('<body><h1>this is the product page </h1></body>');
  res.write('</html>');
  return res.end();
  }
 else {
       res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>About me</title></head>');
  res.write('<body><h1>This is Gurudev kini Here/ you are learning /Backend/nodejs/express.js/mongodb</h1></body>');
  res.write('</html>');
 return res.end();
  }
 
  // So if you want a html code of
  // this than render the value and you ended up getting raw value in response section
});

const PORT = 3000;
server.listen(PORT ,() =>
{
  console.log(`Server running on address http://localhost:${PORT}`)
});
// function requestListener(req,res)
// // first is request and response 
// {
//   console.log(req);
// }

// http.createServer(requestListener);