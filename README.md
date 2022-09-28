Project Title
    Wiki Experiment

Project Description
    This is a student project developed by Matthieu Chan (MattChan96 @ Github) and Kalin Karaliev (karalkal @ Github).
    Its idea is to obtain user input for a search term and once data is obtained from Wikipedia's API a section with the top 12 results is being displayed on the home page. Each of the cards will contain the article title, excerpt from the article text, the main image from the article (or default if none is found) and a link to the relevant article on Wikipedia

Overview
    1. Upon submission of the form (i.e. once a search term has been entered) the app will fetch data from wikipedia's API.
    2. Then from the response we obtain the required data for each of the entries in the form of array:
        articleTitle
        articleText
        pageID
        articleUrl
    3. As the link to the article image is not contained in the returned result we perform a separate get request to Wikipedia's API for each of the entries. If the request return a result (will be an url to the image location) we assign the value to imgURL or, if not, we imageURL will link to our default image.
    4. The data is then being rendered in a section containing separate cards for each of the entries

Wins
    Managed to gain deeper undestanding of how the FE and BE interract with one another.
    Found the experience of scraping data, albeit at such a basic level, very valuable and worth exploring further  

