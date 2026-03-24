
console.log("HEllo this is gurudev kini");
const fs= require('fs');
fs.writeFile("output.txt","writing file", (err)=> 
{
  if(err) console.log("Error Occured");
  else
    console.log("File Written Sucessfully")
})

// NODE JS HAS FILE WRITING CABAPLITITES 
