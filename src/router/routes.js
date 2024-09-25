export default [
  /* 首页推荐 */
  {
    path: '/',
    component: () => import('@/views/discover/Discover.vue'),
    name: 'discover'
  },
  /* 歌单 */
  {
    path: '/playlist',
    component: () => import('@/views/playlist/Playlist.vue'),
    name: 'playlist'
  },
  {
    path: '/playlist/:id',
    component: () => import('@/views/playlist/PlaylistDetail.vue'),
    name: 'playlist-detail',
    props: true
  },
  /* 排行榜 */
  {
    path: '/toplist',
    component: () => import('@/views/toplist/Toplist.vue'),
    name: 'toplist'
  },
  /* 歌手 */
  {
    path: '/artist',
    component: () => import('@/views/artist/Artist.vue'),
    name: 'artist'
  },
  {
    path: '/artist/:id',
    component: () => import('@/views/artist/ArtistDetail.vue'),
    name: 'artist-detail',
    props: true
  },
  {
    path: '/search',
    component: () => import('@/views/search/Search.vue'),
    name: 'search'
  },
  {
    path: '/player',
    component: () => import('@/views/player/Player.vue'),
    name: 'player'
  }
]
