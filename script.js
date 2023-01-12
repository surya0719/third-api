fetch("https://animechan.vercel.app/api/quotes/anime?title=naruto")
          .then((response) => response.json())
          .then((data) => {
            console.log(data[0])

          data.forEach(element => {
            const anime={
                ...element,
                anime:element.anime,
                character:element.character,
                quotes:element.quote

            }
            createanimeQuotes(anime)
          });
        })
          .catch(error=>console.log(error))

          function createanimeQuotes({anime,character,quotes}){
          document.body.innerHTML +=`
          <div class="container">
          <h1 class="name">${anime}</h1>
          <h3 class="chart">${character}</h3>
          <p class="quotes">${quotes}</p>
          </div>
          
          `
          } 


               
        
        