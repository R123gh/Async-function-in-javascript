  async function getdata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(404)
        },3000)
    })

    let a = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
}




 async function putdata(){
console.log("data is loading");


    let a =  await getdata();
    console.log(a);
    console.log("API is found");
    console.log("By using API the data is fetch");
 } 

 putdata()

//   let b =new Promise((res,rej)=>{
//     if(5==!5){
//       rej();
//     }
//     else{
//       res();
//     }
//   })

// b.then(()=>{
//   console.log("solve")
// }).catch((error)=>{
//   console.error(error)
// })

