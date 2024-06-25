// let jsonData = {
//     "fact": "The first official cat show in the UK was organised at Crystal Palace in 1871.",
//     "length": 78
//   }

// //   console.log(jsonData.fact);
  
//   let jsObj = JSON.parse(jsonData);
  
//   console.log(jsObj.fact);



// FIRST API REQUEST- USING fetch(url)
/*
fetch return a promise

>> response.json() -- this function makes our data readdable--- returns a promise

 */

// let url = "https://catfact.ninja/fact";

// console.log(fetch(url)); // a promise

    // since it is a promise, we can use its method-- then and catch method

    //REQUEST SENT
    //     fetch(url)
    //     .then((response) => {
    //         console.log(response);

    //         return  response.json(); //returns promise + makes data readable
    //     })
    // //RESPONSE RECIEVED
    //     .then((data) => { 
    //         console.log(data);
    //         // console.log(data.fact);
    //     })
        

    //     .catch((err) =>{
    //         console.log("ERORR - ",err);
    //     })


        // this is how you get api data using code instead of hoppscotch website









    // CHAINING
        // fetch(url) //first req send
        // .then((res) => { // if successful -- returned its more understandable form
        //     return  res.json();
        // }) 
        // .then((data) => {  //if again got successful- accessed the data 
        //     console.log("Data1 = ",data); // DATA ACCESED -- 1 REQ FINISHED

        //     //2nd req
        //     return fetch(url)
        // })
        // .then((res2) => {
        //     return res2.json()
        // })
        // .then((data2) => {
        //     console.log("Data2 = ", data2.fact); // 2nd data recieved
        // })
        

        // .catch((err) =>{
        //     console.log("ERORR - ",err);
        // })













//USING ASYNC AND AWAIT FUNCTION

    // let url = "https://catfact.ninja/fact";

    // async function getFacts(){
    //     let res = await fetch(url);
    //     let data = await res.json();
    //     console.log("Printing res =",data.fact);
    // }

    // getFacts();



    //axios
    
// CAT FACTS 


let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
            return res.data.fact;
        }
        catch(e) {
            return "No fact found";
        }
    }
    let btn = document.querySelector('.catBtn');
    
    btn.addEventListener("click", async () => {
        let fact = await getFacts();
        
        let p = document.querySelector('p');
        p.innerText = fact;
    })

// GET DOG IMAGE 


    let dogBtn = document.querySelector('.dogBtn');

    dogBtn.addEventListener("click", async () => {
        let imgSrc = await getImage();

        let img = document.querySelector('.dogImg')
        img.setAttribute("src", imgSrc)

        // img.src = imgSrc;
    })

    
    let url2 = "https://dog.ceo/api/breeds/image/random";

    async function getImage(){
        try{
            let res2 = await axios.get(url2)
            // console.log(res2.data.message);
            return res2.data.message;
        }
        catch(e){
            // return "No Image found"
            return "/"
        }
    }



