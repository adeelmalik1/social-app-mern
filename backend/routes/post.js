const express = require("express");
const {
  createPost,
  commentOnPost,
  deleteComment,
  likeAndUnlikePost,
  deletePost,
  getPostOfFollowing,
  updateCaption,
} = require("../controllers/post");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();
router.route("/post/upload").post(isAuthenticated, createPost);
router
  .route("/post/:id")
  .get(isAuthenticated, likeAndUnlikePost)
  .delete(isAuthenticated, deletePost)
  .put(isAuthenticated, updateCaption);
router.route("/posts").get(isAuthenticated, getPostOfFollowing);
router
  .route("/post/comment/:id")
  .put(isAuthenticated, commentOnPost)
  .delete(isAuthenticated, deleteComment);

module.exports = router;
