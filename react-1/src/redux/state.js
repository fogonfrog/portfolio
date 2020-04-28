let state = {  
    profilePage : {
        posts : [
            {id:1, message:'Hi how r u?', likesCounts: 12},
            {id:2, message:'Its my first post', likesCounts:17},
            {id:3, message:'Wanna die', likesCounts:1},
            {id:4, message:'My bad...', likesCounts:100500},
          ],
    },

    messagesPage : {
        dialogs : [
            { id: '1', name: 'Yana', avatar: 'https://sun9-29.userapi.com/c855736/v855736402/1f7663/NLiNFPcDQqk.jpg'},
            { id: '2', name: 'Koshka', avatar: 'https://sun9-30.userapi.com/c846021/v846021584/118d31/QaQRCTxpU2Y.jpg'},
            { id: '3', name: 'Valery', avatar: 'https://sun9-28.userapi.com/c851236/v851236302/40930/1hTcYvLZgEA.jpg'},
            { id: '4', name: 'Polina', avatar: 'https://sun2-3.userapi.com/jHWJl0jOh8y6lv7TQVfN0OGrIv5Ff7TgXpXn9g/9Y6AhZCShjc.jpg'},
          ],
          
        messages : [
            [
              { id: 1, text: "прокрастинация~~~", from: 'me' },
              { id: 2, text: "ONELOVE", from: 'someOne' },
              { id: 3, text: "ВРАТА ШТАЙНЕРА!!!11", from: 'someOne' },
              { id: 4, text: "ВРАТА ШТАЙНЕРА!!!11", from: 'me' },
              { id: 5, text: "ВРАТА ШТАЙНЕРА!!!11", from: 'someOne' },
            ],
            [
              { id: 1, text: "КС", from: 'someOne' },
              { id: 2, text: "СЕКС", from: 'me' },
              { id: 3, text: "Я КЕРГЕЙ КОШКА", from: 'someOne' },
              { id: 4, text: "Я КЕРГЕЙ КОШКА", from: 'someOne' },
              { id: 5, text: "Я КЕРГЕЙ КОШКА", from: 'someOne' },
            ],
            [
              { id: 1, text: "BRAWL STARS", from: 'me' },
              { id: 2, text: "DYNAMIKE", from: 'someOne' },
              { id: 3, text: "DYNAMIKE", from: 'someOne' },
              { id: 4, text: "DYNAMIKE", from: 'someOne' },
              { id: 5, text: "DYNAMIKE", from: 'someOne' },
            ],
            [
              { id: 1, text: "ОНЯМЭЭЭЭ", from: 'someOne' },
              { id: 2, text: "люблю яой", from: 'someOne' },
              { id: 3, text: "ДОЛБАННЫЙ СИНТАКСИС", from: 'someOne' },
              { id: 4, text: "ТУПЫЕ ПРЕПОДЫ", from: 'someOne' },
              { id: 5, text: "ЛЕЛЕЛЕЛЕ", from: 'me' },
            ]
          ]
    },

    sidebarPage : {
      friends : [
        {name: 'Koshka', avatar: 'https://sun9-30.userapi.com/c846021/v846021584/118d31/QaQRCTxpU2Y.jpg'},
        {name: 'Yana', avatar: 'https://sun9-29.userapi.com/c855736/v855736402/1f7663/NLiNFPcDQqk.jpg'},
        {name: 'Polina', avatar: 'https://sun2-3.userapi.com/jHWJl0jOh8y6lv7TQVfN0OGrIv5Ff7TgXpXn9g/9Y6AhZCShjc.jpg'},
        {name: 'Valery', avatar: 'https://sun9-28.userapi.com/c851236/v851236302/40930/1hTcYvLZgEA.jpg'},
      ]
    }
}
  

export default state;