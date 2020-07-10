// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
function renderTopic(topic){
    const topicsTab = document.createElement('div');
    topicsTab.classList.add('tab');
    topicsTab.textContent = topic
    return topicsTab;
  }

function addTopics(targetDiv){
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(function(something) {
    const webArray = something.data.topics;
    webArray.forEach(function(topic){
        targetDiv.append(renderTopic(topic));
        })
  })
  .catch(function(error) {
    console.log(error);
  })
  
  
}

const tabsDiv = document.querySelector('.topics');

addTopics(tabsDiv);
