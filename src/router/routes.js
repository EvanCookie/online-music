export default [
  /* 首页推荐 */
  {
    path: '/',
    component: () => import('@/views/discover/Discover.vue'),
    name: 'discover'
  },
  /* 歌单 */
  {
    path: '/palylist',
    component: () => import('@/views/palylist/Palylist.vue'),
    name: 'palylist'
  },
  {
    path: '/palylist/:id',
    component: () => import('@/views/palylist/PalylistDetail.vue'),
    name: 'palylist-detail',
    props: true
  },
  /* 排行榜 */
  {
    path: '/toplist',
    component: () => import('@/views/toplist/Toplist.vue'),
    name: 'toplist'
  },
  {
    path: '/toplist/:id',
    component: () => import('@/views/toplist/ToplistDetail.vue'),
    name: 'toplist-detail',
    props: true
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
  }
]
