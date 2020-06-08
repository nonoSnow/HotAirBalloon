// 全局过滤器 对应的 函数

export function date(timestamp){
  let d = new Date(parseInt(timestamp));
  return `${d.getFullYear()}-${d.getMonth()+1}-${d.getDay()}`
}