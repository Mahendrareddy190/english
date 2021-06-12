const express = require("express");
const router = express.Router();
const {
  CommentId,
  Createcomment,
  Deletecomment,
  getallcomments,
  singleComment,
} = require("../controllers/comments");

router.param("CommentId", CommentId);
router.post("/create", Createcomment);
router.get("/get/:CommentId", singleComment);
router.get("/getall", getallcomments);
router.delete("/delete/:CommentId", Deletecomment);
router.get('/test',(req,res)=>{
  res.send({name:"mahi"})
})

module.exports = router;
