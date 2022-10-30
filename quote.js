
    AOS.init();

const newQuoteBtn = document.getElementById("newQ");
const quoteselem = document.getElementById("quotes");
const authorelem = document.querySelector(".author")
const tweetelem = document.querySelector("#tweet")


     let quotesData = "";
     let randomQuotes = " "

     const twitterFunc = () => {
        let tweetPost = `https://twitter.com/intent/tweet?text=${randomQuotes.text}
       
        ${randomQuotes.author}`
        window.open(tweetPost)
    
     }

     let getNewQuotes = ()=>{
      let randomNo = Math.floor(Math.random()*1643)
        // console.log(randomNo)
      randomQuotes = quotesData[randomNo]

        let textData = randomQuotes.text
        let authorData = randomQuotes.author

        quoteselem.innerHTML = `${textData}`

    // if(authorData===null){
    //     authorelem.innerHTML === "Unknow"
    // }else{
    //     authorelem.innerHTML = `${authorData}`
    // }
    // By ternari oprator
    authorData ===null ? (authorelem.innerHTML= "Unknow") 
                        : (authorelem.innerHTML= `By ${authorData}`)

        }

   const getQuotes = async () => {
            const api = "https://type.fit/api/quotes";
     try{
      let data = await fetch(api);
      quotesData = await data.json()

//    console.log(quotesData.length)
//    console.log(quotesData[0].author)
      getNewQuotes();

       }catch(error){}
  }
  
  newQuoteBtn.addEventListener("click", getNewQuotes)
 tweetelem.addEventListener("click", twitterFunc)

  getQuotes();
    