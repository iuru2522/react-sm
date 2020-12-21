// let posts = [
//     { id: 1, post: "Hello, there", likesCount: 12 },
//     { id: 2, post: "Its my first post", likesCount: 10 },
//     { id: 3, post: "ts my second post", likesCount: 5 },
//   ];

// let dialogsData = [
//     { id: 1, name: "Julia" },
//     { id: 2, name: "Romko" },
//     { id: 3, name: "Dima" },
//     { id: 4, name: "Olia" },
//   ];
  
//   let messagesData = [
//     { id: 1, message: "Hi" },
//     { id: 2, message: "How are you" },
//     { id: 3, message: "Yooo" },
//     { id: 4, message: "Yaaaaw" },
//   ];
  let state = {
    profilePage: {
        posts : [
            { id: 1, post: "Hello, there", likesCount: 12 },
            { id: 2, post: "Its my first post", likesCount: 10 },
            { id: 3, post: "ts my second post", likesCount: 5 },
          ],
          dialogsData: [
            { id: 1, name: "Julia" },
            { id: 2, name: "Romko" },
            { id: 3, name: "Dima" },
            { id: 4, name: "Olia" },
          ],    
    },
    messagesPage: {
        messagesData: [
            { id: 1, message: "Hi" },
            { id: 2, message: "How are you" },
            { id: 3, message: "Yooo" },
            { id: 4, message: "Yaaaaw" },
          ]
    },    
    sidebar: {

    } 
  }

export let addPost = (postMessage) => {

  let newPost = {
    id: 5,
    post: postMessage,
    likesCount: 120
  };


  state.profilePage.posts.push(newPost);
}



  export default state;