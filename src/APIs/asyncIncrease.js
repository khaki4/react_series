export const increaseCount1 = (value) => {
  return new Promise((resolve, reject) => {
    if (!value) reject('invalid param')
    setTimeout(() => resolve(value), 1000)
  })
}
export const increaseCount2 = (value) => {
  return new Promise((resolve, reject) => {
    if (!value) reject('invalid param')
    setTimeout(() => resolve(value), 1000)
  })
}
export const increaseCount3 = (value) => {
  return new Promise((resolve, reject) => {
    if (!value) reject('invalid param')
    setTimeout(() => resolve(value), 1000)
  })
}