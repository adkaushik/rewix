import { HYDRATE } from 'next-redux-wrapper';

import { constants } from '../actions/movie';

const initialState = {
  list: [
    {
      "popularity": 11.076,
      "vote_count": 915,
      "video": false,
      "poster_path": "/pci1ArYW7oJ2eyTo2NMYEKHHiCP.jpg",
      "id": 724089,
      "adult": false,
      "backdrop_path": "/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg",
      "original_language": "en",
      "original_title": "Gabriel's Inferno Part II",
      "genre_ids": [
        10749
      ],
      "title": "Gabriel's Inferno Part II",
      "vote_average": 8.9,
      "overview": "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
      "release_date": "2020-07-31"
    },
    {
      "popularity": 10.653,
      "vote_count": 1522,
      "video": false,
      "poster_path": "/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
      "id": 696374,
      "adult": false,
      "backdrop_path": "/969BfPHGJcjg2aUv60g5uiiXFzf.jpg",
      "original_language": "en",
      "original_title": "Gabriel's Inferno",
      "genre_ids": [
        10749
      ],
      "title": "Gabriel's Inferno",
      "vote_average": 8.9,
      "overview": "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
      "release_date": "2020-05-29"
    },
    {
      "popularity": 20.034,
      "vote_count": 254,
      "video": false,
      "poster_path": "/riAooJrFvVhotyaOgoI0WR7okSe.jpg",
      "id": 644479,
      "adult": false,
      "backdrop_path": "/8g1rUabKleLvovt0Sx6bXgWfC42.jpg",
      "original_language": "es",
      "original_title": "Dedicada a mi ex",
      "genre_ids": [
        35,
        18
      ],
      "title": "Dedicated to my ex",
      "vote_average": 8.7,
      "overview": "The film tells the story of Ariel, a 21-year-old who decides to form a rock band to compete for a prize of ten thousand dollars in a musical band contest, this as a last option when trying to get money to save their relationship and reunite with his ex-girlfriend, which breaks due to the trip she must make to Finland for an internship. Ariel with her friend Ortega, decides to make a casting to find the other members of the band, although they do not know nothing about music, thus forming a band with members that have diverse and opposite personalities.",
      "release_date": "2019-11-01"
    },
    {
      "popularity": 40.516,
      "vote_count": 17442,
      "video": false,
      "poster_path": "/5KCVkau1HEl7ZzfPsKAPM0sMiKc.jpg",
      "id": 278,
      "adult": false,
      "backdrop_path": "/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg",
      "original_language": "en",
      "original_title": "The Shawshank Redemption",
      "genre_ids": [
        18,
        80
      ],
      "title": "The Shawshank Redemption",
      "vote_average": 8.7,
      "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      "release_date": "1994-09-23"
    },
    {
      "popularity": 17.807,
      "vote_count": 2418,
      "video": false,
      "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
      "id": 19404,
      "adult": false,
      "backdrop_path": "/svYzz6A6xleZv5toTLAhigXd1DX.jpg",
      "original_language": "hi",
      "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "title": "Dilwale Dulhania Le Jayenge",
      "vote_average": 8.7,
      "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      "release_date": "1995-10-20"
    },
    {
      "popularity": 40.966,
      "vote_count": 13199,
      "video": false,
      "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      "id": 238,
      "adult": false,
      "backdrop_path": "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
      "original_language": "en",
      "original_title": "The Godfather",
      "genre_ids": [
        18,
        80
      ],
      "title": "The Godfather",
      "vote_average": 8.7,
      "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      "release_date": "1972-03-14"
    },
    {
      "popularity": 33.088,
      "id": 424,
      "video": false,
      "vote_count": 10504,
      "vote_average": 8.6,
      "title": "Schindler's List",
      "release_date": "1993-11-30",
      "original_language": "en",
      "original_title": "Schindler's List",
      "genre_ids": [
        18,
        36,
        10752
      ],
      "backdrop_path": "/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg",
      "adult": false,
      "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      "poster_path": "/c8Ass7acuOe4za6DhSattE359gr.jpg"
    },
    {
      "popularity": 126.659,
      "id": 372058,
      "video": false,
      "vote_count": 6569,
      "vote_average": 8.6,
      "title": "Your Name.",
      "release_date": "2016-08-26",
      "original_language": "ja",
      "original_title": "君の名は。",
      "genre_ids": [
        10749,
        16,
        18
      ],
      "backdrop_path": "/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg",
      "adult": false,
      "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
      "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg"
    },
    {
      "popularity": 29.521,
      "vote_count": 7832,
      "video": false,
      "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
      "id": 240,
      "adult": false,
      "backdrop_path": "/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg",
      "original_language": "en",
      "original_title": "The Godfather: Part II",
      "genre_ids": [
        18,
        80
      ],
      "title": "The Godfather: Part II",
      "vote_average": 8.6,
      "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
      "release_date": "1974-12-20"
    },
    {
      "popularity": 343.172,
      "vote_count": 457,
      "video": false,
      "poster_path": "/zGVbrulkupqpbwgiNedkJPyQum4.jpg",
      "id": 592350,
      "adult": false,
      "backdrop_path": "/9guoVF7zayiiUq5ulKQpt375VIy.jpg",
      "original_language": "ja",
      "original_title": "僕のヒーローアカデミア THE MOVIE ヒーローズ：ライジング",
      "genre_ids": [
        16,
        28
      ],
      "title": "My Hero Academia: Heroes Rising",
      "vote_average": 8.6,
      "overview": "Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it's more like a vacation … until they're attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens' lives on the line, there's no time for questions. Deku and his friends are the next generation of heroes, and they're the island's only hope.",
      "release_date": "2019-12-20"
    },
    {
      "popularity": 55.429,
      "vote_count": 10346,
      "video": false,
      "poster_path": "/2TeJfUZMGolfDdW6DKhfIWqvq8y.jpg",
      "id": 129,
      "adult": false,
      "backdrop_path": "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
      "original_language": "ja",
      "original_title": "千と千尋の神隠し",
      "genre_ids": [
        16,
        10751,
        14
      ],
      "title": "Spirited Away",
      "vote_average": 8.5,
      "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
      "release_date": "2001-07-20"
    },
    {
      "popularity": 98.137,
      "vote_count": 9622,
      "video": false,
      "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      "id": 496243,
      "adult": false,
      "backdrop_path": "/ApiBzeaa95TNYliSbQ8pJv4Fje7.jpg",
      "original_language": "ko",
      "original_title": "기생충",
      "genre_ids": [
        35,
        53,
        18
      ],
      "title": "Parasite",
      "vote_average": 8.5,
      "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      "release_date": "2019-05-30"
    },
    {
      "popularity": 7.376,
      "vote_count": 278,
      "video": false,
      "poster_path": "/zGGWYpiKNwjpKxelPxOMqJnUgDs.jpg",
      "id": 42269,
      "adult": false,
      "backdrop_path": "/bh6yfB6I1N1WuMiX6K5HxGVZnja.jpg",
      "original_language": "it",
      "original_title": "C'eravamo tanto amati",
      "genre_ids": [
        35,
        18
      ],
      "title": "We All Loved Each Other So Much",
      "vote_average": 8.5,
      "overview": "Gianni, Nicola and Antonio become close friends in 1944 while fighting the Nazis. After the end of the war, full of illusions, they settle down. The movie is a the story of the life of these three idealists and how they deal with the inevitable disillusionments of life.",
      "release_date": "1974-12-21"
    },
    {
      "popularity": 35.824,
      "vote_count": 11165,
      "video": false,
      "poster_path": "/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
      "id": 497,
      "adult": false,
      "backdrop_path": "/5Nz25DPXfQaSpDgce42Y3kFg9G4.jpg",
      "original_language": "en",
      "original_title": "The Green Mile",
      "genre_ids": [
        80,
        18,
        14
      ],
      "title": "The Green Mile",
      "vote_average": 8.5,
      "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      "release_date": "1999-12-10"
    },
    {
      "popularity": 35.241,
      "vote_count": 19816,
      "video": false,
      "poster_path": "/plnlrtBUULT0rh3Xsjmpubiso3L.jpg",
      "id": 680,
      "adult": false,
      "backdrop_path": "/w7RDIgQM6bLT7JXtH4iUQd3Iwxm.jpg",
      "original_language": "en",
      "original_title": "Pulp Fiction",
      "genre_ids": [
        53,
        80
      ],
      "title": "Pulp Fiction",
      "vote_average": 8.5,
      "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      "release_date": "1994-09-10"
    },
    {
      "popularity": 50.027,
      "id": 122,
      "video": false,
      "vote_count": 16475,
      "vote_average": 8.5,
      "title": "The Lord of the Rings: The Return of the King",
      "release_date": "2003-12-01",
      "original_language": "en",
      "original_title": "The Lord of the Rings: The Return of the King",
      "genre_ids": [
        12,
        14,
        28
      ],
      "backdrop_path": "/9DeGfFIqjph5CBFVQrD6wv9S7rR.jpg",
      "adult": false,
      "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
      "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg"
    },
    {
      "popularity": 33.142,
      "id": 637,
      "video": false,
      "vote_count": 9420,
      "vote_average": 8.5,
      "title": "Life Is Beautiful",
      "release_date": "1997-12-20",
      "original_language": "it",
      "original_title": "La vita è bella",
      "genre_ids": [
        35,
        18
      ],
      "backdrop_path": "/6aNKD81RHR1DqUUa8kOZ1TBY1Lp.jpg",
      "adult": false,
      "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
      "poster_path": "/74hLDKjD5aGYOotO6esUVaeISa2.jpg"
    },
    {
      "popularity": 41.077,
      "id": 13,
      "video": false,
      "vote_count": 19153,
      "vote_average": 8.5,
      "title": "Forrest Gump",
      "release_date": "1994-07-06",
      "original_language": "en",
      "original_title": "Forrest Gump",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "backdrop_path": "/7c9UVPPiTPltouxRVY6N9uugaVA.jpg",
      "adult": false,
      "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
      "poster_path": "/clolk7rB5lAjs41SD0Vt6IXYLMm.jpg"
    },
    {
      "popularity": 35.976,
      "vote_count": 478,
      "video": false,
      "poster_path": "/h1B7tW0t399VDjAcWJh8m87469b.jpg",
      "id": 556574,
      "adult": false,
      "backdrop_path": "/uWVkEo9PWHu9algZsiLPi6sRU64.jpg",
      "original_language": "en",
      "original_title": "Hamilton",
      "genre_ids": [
        36,
        10402,
        18
      ],
      "title": "Hamilton",
      "vote_average": 8.5,
      "overview": "Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.",
      "release_date": "2020-07-03"
    },
    {
      "popularity": 23.212,
      "vote_count": 5062,
      "video": false,
      "poster_path": "/ppd84D2i9W8jXmsyInGyihiSyqz.jpg",
      "id": 389,
      "adult": false,
      "backdrop_path": "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
      "original_language": "en",
      "original_title": "12 Angry Men",
      "genre_ids": [
        18
      ],
      "title": "12 Angry Men",
      "vote_average": 8.5,
      "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
      "release_date": "1957-04-10"
    }
  ],
  selectedMovie: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
  case HYDRATE: {
    return { ...state, ...action.payload.movie };
  }

  case constants.SET_SELECTED_MOVIE: {
    return {
      ...state,
      selectedMovie: action.payload
    };
  }

  default:
    return state;
  }
}

export default reducer;
