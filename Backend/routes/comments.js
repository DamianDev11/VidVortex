import express from "express"
import { verifyToken } from "../verifyToken.js"
import { addComment, deleteComment, getComment } from "../controller/comment.js"

const router = express.Router()

router.post("/",verifyToken,addComment)
router.post("/:id",verifyToken,deleteComment)
router.post("/:videoId",getComment)

export default router