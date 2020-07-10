// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardDiv = document.querySelector('.cards-container')

function flattenResponse(response){
    const flattenedResponse = [];
    const articles = response.data.articles
    const topics = Object.keys(articles);

    for(i = 0; i < topics.length; i++){

        for(j = 0; j < articles[topics[i]].length; j++){
            flattenedResponse.push(articles[topics[i]][j]);
        }
    }
    return flattenedResponse;
}
function renderArticle(article){
    const articlesTab = document.createElement('div');
    articlesTab.classList.add('card');
    const headline = document.createElement('div');
    headline.classList.add('headline')
    const author = document.createElement('div');
    author.classList.add('author');
    const imgCont = document.createElement('div');
    imgCont.classList.add('img-container');
    const img = document.createElement('img');
    const authorName = document.createElement('span');

    headline.textContent = article.headline;
    authorName.textContent = article.authorName;
    img.src = article.authorPhoto;

    articlesTab.appendChild(headline);
    articlesTab.appendChild(author);
    author.appendChild(imgCont);
    author.appendChild(authorName);
    imgCont.appendChild(img);

    articlesTab.addEventListener('click', (_) =>{
        console.log(article.headline);
    })

    return articlesTab;
  }

 axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(function(response) {
   const articles = flattenResponse(response);
   articles.forEach(function(article){
    const answer = renderArticle(article);
    cardDiv.appendChild(answer);
   });
    console.log(flattenResponse(response));
  })
  .catch(function(error) {
    console.log(error);
  })