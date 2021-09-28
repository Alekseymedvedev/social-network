import {
  render
} from './../render'

let state = {
  profilePage: {
    postsArr: [{
        id: 11,
        like: 24,
        time: '25 / 09 / 2021',
        img: 'https://avatars.mds.yandex.net/get-zen_doc/1131118/pub_5c6e717f15acff00b356a67e_5c6e92c437874700af7084e7/scale_1200',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis explicabo quidem natus, debitis esse voluptate eligendi dignissimos impedit, eaque id sapiente recusandae repellat ipsam quia exercitationem labore quisquam corrupti?'
      },
      {
        id: 21,
        like: 12,
        time: '26 / 09 / 2021',
        img: 'https://avatars.mds.yandex.net/get-zen_doc/1131118/pub_5c6e717f15acff00b356a67e_5c6e92c437874700af7084e7/scale_1200',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis explicabo quidem natus, debitis esse voluptate eligendi dignissimos impedit, eaque id sapiente recusandae repellat ipsam quia exercitationem labore quisquam corrupti?'
      },
      {
        id: 31,
        like: 56,
        time: '27 / 09 / 2021',
        img: 'https://avatars.mds.yandex.net/get-zen_doc/1131118/pub_5c6e717f15acff00b356a67e_5c6e92c437874700af7084e7/scale_1200',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis explicabo quidem natus, debitis esse voluptate eligendi dignissimos impedit, eaque id sapiente recusandae repellat ipsam quia exercitationem labore quisquam corrupti? Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
    ],
    newPostText: 'afdfagff'
  },

  dialogsPage: {
    dialogs: [{
        id: 1,
        name: 'Владимир'
      },
      {
        id: 2,
        name: 'Юля'
      },
      {
        id: 3,
        name: 'Руслан'
      },
      {
        id: 4,
        name: 'Линар'
      },
      {
        id: 5,
        name: 'Лиза'
      },
    ],

    messages: [{
        id: 1,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam officiis explicabo quidem natus, debitis esse voluptate eligendi dignissimos impedit, eaque id sapiente recusandae repellat ipsam quia exercitationem labore quisquam corrupti?'
      },
      {
        id: 2,
        message: 'Hello-2'
      },
      {
        id: 3,
        message: 'Hello-3'
      },
      {
        id: 4,
        message: 'Hello-4'
      },
      {
        id: 5,
        message: 'Hello-5'
      }
    ]
  }

}

export let addPost = () => {
  let newPost = {
    id: 15,
    like: 0,
    time: '25 / 09 / 2021',
    img: 'https://avatars.mds.yandex.net/get-zen_doc/1131118/pub_5c6e717f15acff00b356a67e_5c6e92c437874700af7084e7/scale_1200',
    text: state.profilePage.newPostText
  }
  state.profilePage.postsArr.push(newPost);
  state.profilePage.newPostText = ''
  render(state);
}


export let updateNewPost = (newPostText) => {

  state.profilePage.newPostText = newPostText;
  render(state);
}




export default state;