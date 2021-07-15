

function Home (props) {
    return (

        <div>
            <div class="logo">
                <img src="logo.svg" alt="logo" />

            </div>
            <hr />
            <h2 class="indent">Studio Ghibli</h2>
            <p class="indent"> (react routing project 1 and 2) </p>
                              
                <div>
                    <p class="homeP">
                    <br></br>
                        <a href="https://ghiblicollection.com/" target="_blank">Studio Ghibli</a> is a Japanese animation film studio.  Their headquartes is in Koganei, Tokyo. 
                        The studio is best known for its animated feature films.  
                        They produced several short films, television commercials, and one television film.
                    </p>
                </div>

                <div>
                    <p class="homeP">
                        <br></br>
                        Their film <a href="https://ghiblicollection.com/product/spirited-away?product_id=6642" target="_blank"> Spirited Away,</a>  was the first anime film to win and Academy Award 
                        (for Best Animated Feature.)
                    </p>
                </div>

                <div>  
                    <p class="homeP">
                        <br></br>
                        Please explore the different films and lear about the characters, species, locations and vehicle types.
                    </p>
                </div>
                
                <div>
                    <img class="spiritAwayPhoto" src="spirit_away.jpg" alt="Spirite Away phot" />
                </div>

        </div>

    );



}







export default Home;