let defaultCity = '上海'
try { // 抛出异常，浏览器兼容（当用户浏览器关闭了本地存储或者处于隐身模式直接使用localStorage就会出错）
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
