let form = document.getElementById('searchForm')
let foundDiv = document.getElementById('found')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let formData = new FormData(form)
    let searchTerm = formData.get('searchTerm')

    form.reset()

    fetchData(searchTerm)
})
function fetchData(searchTerm) {
    let url = "https://en.wikipedia.org/w/api.php";

    let params = {
        action: "query",
        list: "search",
        srsearch: searchTerm,
        format: "json",
        srlimit: 10
    }; // how many search results

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });
    // adds key/value pairs to query like this k=v&k=v&k=v

    fetch(url)
        .then(response => response.json())
        .then(decodeData)

        .catch(function (error) { console.log(`${error.name}:\n${error.message}`); });
}

function decodeData(foundData) {
    for (let foundArticle of foundData.query.search) {
        // console.log(foundArticle.snippet)

        let articleTitle = foundArticle.title
        let articleText = foundArticle.snippet
        .replace(/(<([^>]+)>)/gi, "")               // strip html tags from 
        .slice(0, 130) + "...";                      // truncate text
        
        let articleUrl = 'https://en.wikipedia.org/?curid=' + Number(foundArticle.pageid)        //

        generateCard(articleTitle, articleText, articleUrl)
    }
}


function generateCard(title, text, url) {
    // console.log(title, text, url)

    if (!title || !text || !url) {
        foundDiv.textContent = 'No results found'
    } else {
        foundDiv.innerHTML += `
        <div class="col-md-6 col-lg-4">
            <div class="card my-3">
                <div class="card-thumbnail">
                    <img src="./img/default.jpg" class="img-fluid" alt="thumbnail">
                </div>
                <div class="card-body">
                    <h3 class="card-title"><a href="#" class="text-secondary">${title}</a></h3>
                    <p class="card-text">${text}</p>
                    <a href="${url}" target="blank" class="btn btn-danger">Read More</a>
                </div>
            </div>
        </div>
        
        `
    }
}
