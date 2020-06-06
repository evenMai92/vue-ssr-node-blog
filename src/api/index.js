export const fetchItem = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let obj = {
        1: [{title: '哈1'}, {title: '时间1'}],
        2: [{title: '哈22'}, {title: '时间22'}],
      }
      let res = obj[id] || [{title: '大多数'}]
      resolve(res);
    }, 1000);
  })
}