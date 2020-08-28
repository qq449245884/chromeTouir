const url = 'https://image-static.segmentfault.com/556/858/55685815-f0b875cc23b15e5b_articlex111'
const url2 = 'https://image-static.segmentfault.com/352/087/3520875617-5f13bee47ed5d_articlex'

function loadImg (src) {
  return new Promise((resolve, reject) => {
    let img = new Image()
    img.src = src
    img.onload = () => {
      resolve(img)
    }
    img.onerror = () => {
      reject(new Error('图片加载失败'))
    }
  })
}
loadImg(url).then(img => {
  console.log(img.width)
  return img
}).then(img => {
  console.log(img.height)
}).catch(e => {
  console.log(e)
})
loadImg(url).then(img1 => {
  console.log(img1.width)
  return img1
}).then(img1 => {
  console.log(img1.height)
  return loadImg(url2)
}).then(img2 => {
  console.log(img2.width)
  return img2
}).then(img2 => {
  console.log(img2.height)
}).catch(e => {
  console.log(e)
})