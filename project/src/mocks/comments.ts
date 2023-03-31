import { Comment } from '../types/comments';

export const comments: Comment[] = [
  {
    comment:'Comment1',
    date:'Fri Mar 31 2023 14:33:56 GMT+0700 (Новосибирск, стандартное время)',
    id:1,
    rating:2,
    user:{
      avatarUrl:'img/avatar-angelina.jpg',
      id:1,
      isPro:true,
      name:'Autor1'
    }
  },
  {
    comment:'Comment2',
    date:'Fri Mar 31 2023 14:33:56 GMT+0700 (Новосибирск, стандартное время)',
    id:1,
    rating:2,
    user:{
      avatarUrl:'img/avatar-angelina.jpg',
      id:1,
      isPro:false,
      name:'Autor2'
    }
  },
];
