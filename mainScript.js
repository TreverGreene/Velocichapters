
const searchBar=document.querySelector('#search');
const searchBarBtn=document.querySelector('#searchBarBtn');
const baseUrl="https://openlibrary.org/search.json?q=";
const baseCoverUrl="https://covers.openlibrary.org/b/olid/"

/* This gets a json of a book from open library, then takes the first 
olid in the first result and returns a cover image*/ 
async function searchFunction(){
    const searchInput=document.querySelector('#search').value;
    let newURL=searchInput;
    newURL=newURL.replaceAll(" ", "+");
    newURL=baseUrl+newURL+"+language%3Aeng&limit=3&mode=everything";
    console.log(newURL);
    const response= await fetch(newURL);
    const bookList= await response.json();
    
 for (let index = 0; index < 3; index++) {
       bookOlid=bookList.docs[index].cover_edition_key;
       console.log(bookList.docs[index].cover_edition_key);
       if (bookOlid=bookList.docs[index].cover_edition_key) {
        coverURL=baseCoverUrl+bookOlid+"-M.jpg"
        console.log(coverURL);
        const newCoversContainer=document.querySelector('#imageContainer');
        let newCoverContainer=document.createElement('div');
        newCoverContainer.id=`returned cover #:${index}`;
        let newCover=document.createElement('img');
        newCover.id=`newCover${index}`
        let addWorkButton=document.createElement('button');
        addWorkButton.textContent='Add Me!'
        newCover.src=coverURL;
        newCoversContainer.appendChild(newCoverContainer);
        newCoverContainer.appendChild(newCover);
        newCoverContainer.appendChild(addWorkButton);
       }
 }
}
/* This gets a json of a book from open library, then takes the first first 
olid in the first result and returns a cover image */ 

searchBarBtn.addEventListener('click',searchFunction);