/**
 * Created by WebStorm.
 * User: nirongxu
 * Date: 2020/4/20
 * Description: 文件描述
 */
import axios from "../axios"
import articleUrls from "../urls/article"

export default {
  // 发表文章
  fetchAddArticle (data) {
    return axios.post(articleUrls.addArticle, data)
  },
  // 文章列表
  fetchArticleList () {
    return axios.post(articleUrls.articleList)
  },
  // 文章修改回显
  fetchGetArticle (data) {
    return axios.post(articleUrls.getArticle, data)
  },
  // 删除文章
  fetchDelArticle (data) {
    return axios.post(articleUrls.delArticle, data)
  },
  // 图片上传
  fetchUploadImg () {
    return axios.post(articleUrls.uploadImg)
  },
  // 评论列表
  fetchCommentList (data) {
    return axios.post(articleUrls.commentList, data)
  },
  // 删除评论
  fetchDelComment (data) {
    return axios.post(articleUrls.delComment, data)
  }

}
