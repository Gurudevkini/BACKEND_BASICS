const getdate =()=>
{
  const date= new Date()
  console.log(date)
}
const gettime =()=>
{
  const date=new Date()
  const time =date.toLocaleTimeString()
  console.log(time)
}
module.exports = {getdate, gettime}