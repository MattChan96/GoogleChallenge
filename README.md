Project Title
-----------------
    Wiki Experiment

Project Description
-----------------
    This is a student project developed by Matthieu Chan (MattChan96 @ Github) and Kalin Karaliev (karalkal @ Github).
    The concept is to obtain user input and to extract the top 12 results from Wikipedia's API for the search term. 
    Then for each of the articles the app will send a separate request to the API and the relevant article image will be returned if one is available.
    This is actually (some sort of) business case for this app - a normal Wikipedia search will return just links to the articles with no visual representation.
    Then from the retrieved data for each of the items an individual div card will be created, containing the article title, excerpt from the article text, the main image from the article (or default if none is found) and a link to the relevant Wikipedia page. The cards will be displayed as a responsive grid section on the main page.

Overview
-----------------
    1. Once a search term has been entered and the form submitted the app will fetch data for the most relevant results from wikipedia's API (limited to 12 results).
    2. Then the required data is being extracted for each of the objects contained in the returned JSON:
       - articleTitle
       - articleText
       - pageID
       - articleUrl
    3. As the link to the article image is not included in the returned result we perform a separate get request to Wikipedia's API for each of the entries. If the request returns a result (the url of the image) the value is assigned to the imgURL property or, if not, a default image will be linked.
    4. The data is then being rendered in a section containing separate cards for each of the entries.

Wins
-----------------
    Managed to gain deeper undestanding of how the FE and BE interract with one another.
    Found the experience of scraping data, albeit at such a basic level, very valuable and fun. 

- No dependencies required
- Just open index.html in live browser