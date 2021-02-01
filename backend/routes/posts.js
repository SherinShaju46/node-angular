const express = require("express");

const PostController = require("../controllers/posts");
const checkAuth = require("../middleware/check-auth");
const extractFile = require("../middleware/file");

const router = express.Router();
        //POSTING
router.post("", checkAuth, extractFile, PostController.createPosts);
        //EDITING
router.put("/:id", checkAuth, extractFile, PostController.updatePost);
        //DISPLAY POSTS
router.get('', PostController.getPosts);
        //DISPLAY SINGLE POST
router.get("/:id", PostController.getPost);
        //DELETING
router.delete("/:id", checkAuth, PostController.deletePost);

module.exports = router;
