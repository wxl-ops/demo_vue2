import CosCloud from 'cos-js-sdk-v5'
import axios from 'axios'
const utils = require('./md5.js')

// 生成8位字母随机数
function getRandomString (len) {
  len = len || 8
  var $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  var maxPos = $chars.length
  var num = ''
  for (let i = 0; i < len; i++) {
    num += $chars.charAt(Math.floor(Math.random() * maxPos))
  }
  return num
}

// 上传文件(调用相关api putObject来上传文件)
/**
 * @method uploadFile
 * @param {object} cos
 */
function uploadFile (cos, file, signInfo, _callback) {
  // name： 图片的名称，可以自定义，这里为了不覆盖相同名照片，使用了时间戳
  let random = new Date().valueOf() + getRandomString(8)
  let nameStr = utils.hex_md5(random)
  let content = process.env.NODE_ENV === 'development' ? 'content' : 'content'

  let name = `/${content}/${nameStr}`
  let pic = ''
  console.log(file)
  // Bucket： 存储桶  Bucket 的名称，命名规则为 BucketName-APPID，此处填写的存储桶名称必须为此格式
  // Region：Bucket 所在地域，枚举值请参阅 地域和访问域名：https://cloud.tencent.com/document/product/436/6224
  cos.putObject(
    {
      Bucket: 'sdcms-1253457213',
      Region: 'ap-guangzhou',
      Key: `${name}`,
      Dir: content,
      Body: file.raw,
      onHashProgress: function (progressData) {
        console.log('校验中', JSON.stringify(progressData))
      },
      onProgress: function (progressData) {
        console.log('上传中', progressData)
        if (progressData.percent === 1) {
          // 上传完执行操作  这里将图片的 pic 作为图片的src 抛出去，在调用的地方用res.pic获取即可
          pic = `https://sdcms-1253457213.file.myqcloud.com${name}`
          console.log(pic)
        }
      }
    },
    function (err, data) {
      console.log(err)
      if (err) {
        _callback({ success: false, msg: '文件上传失败!' })
        return
      }
      // 上传成功把数据抛出去， pic 是上文的图片的链接
      _callback({ success: true, msg: '上传成功!', data: data, signInfo: signInfo, pic: pic })
    }
  )
}

// 获取文件上传密钥（最好存在后端通过ajax请求获取，安全性较高）
function getFileToken (Vue, fileInfo, cos, file, uploadStatusCallbalck) {
  // 秘钥是请求后台的接口，替换即可
  // 本地
  // 正式环境会自动加域名
  let url = 'https://tmanage-product.imagiclamp.cn/manage_product/cos/get_ticket'
  if (!file) return
  // 异步获取临时密钥
  axios
    .get(url)
    .then(function (res) {
      if (res.data.ret === 0) {
        console.log(res.data.data)
        window.singleInfo = res.data.data
        uploadFile(cos, file, res.data.data, uploadStatusCallbalck)
      } else {
        uploadStatusCallbalck({ success: false, msg: '获取文件秘钥失败!' })
      }
    })
    .catch(() => {
      uploadStatusCallbalck({ success: false, msg: '获取文件秘钥接口出错!' })
    })
}
/**
 * 初始化上传文件对象
 * @param {object} Vue
 * @param {string} fileName 文件名
 * @param {object} file 上传的文件流及文件类型 名称相关信息
 * @param {Array} 允许上传的文件类型
 * @param {function} uploadStatusCallbalck
 * @return {function} 返回回调函数
 */
export const initUploadObj = function (Vue, fileName, file, type, uploadStatusCallbalck) {
  let fileInfo = {
    file_name: fileName,
    media_type: 2,
    media_sub_type: 0,
    size_of_bytes: 122,
    file_expired_type: 'permanent'
  }
  // 上传图片大小做限制
  // if (file.size > 2048) {
  //   Vue.$Message.error('请上传小于2M的图片！')
  //   return
  // }
  // 前端做文件类型限制
  if (type !== 'blob') {
    if (type === 'image') {
      type = ['.jpg', '.gif', '.jpeg', '.bmp', '.png']
    }
    if (type === 'excel') {
      type = ['.xlsx']
    }
    let fileType = file.name ? file.name.substring(file.name.lastIndexOf('.')).toLowerCase() : ''
    if (!!type && type.indexOf(fileType) < 0) {
      uploadStatusCallbalck({ success: false, msg: '请上传正确的' + type + '文件格式!' })
      return
    }
  }

  var cos = new CosCloud({
    getAuthorization: function (options, _callback) {
      _callback({
        TmpSecretId: window.singleInfo.credentials.tmpSecretId,
        TmpSecretKey: window.singleInfo.credentials.tmpSecretKey,
        XCosSecurityToken: window.singleInfo.credentials.sessionToken,
        ExpiredTime: window.singleInfo.expiredTime
      })
    }
  })
  fileInfo.file_name = file.name
  // 获取文件上传密钥
  getFileToken(Vue, fileInfo, cos, file, uploadStatusCallbalck)
}
export default initUploadObj
