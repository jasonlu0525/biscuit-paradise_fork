export default {
  addToFavorite (favorite) {
    const favoriteStr = JSON.stringify(favorite)
    localStorage.setItem('favoriteList', favoriteStr)
  },
  getFavorite () {
    return JSON.parse(localStorage.getItem('favoriteList'))
  }
}

/*
因為localstorage只能存放string字串，因此要使用json將array陣列轉為字串才可存入，而取得資料則須將記憶體的資料再度轉譯成array陣列。
-陣列轉字串：JSON.stringify()
-字串轉陣列 & JSON格式：JSON.parse()
*/