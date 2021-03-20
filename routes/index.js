import express from "express";
import membersRouter from "./membersRouter.js"
import booksRouter from './booksRouter.js'
import borrowingRouter from './borrowRouter.js'


const router = express.Router();

router.use("/books", booksRouter);
router.use("/members", membersRouter);
router.use("/borrow", borrowingRouter);

export default router;

// DB_HOST = "us-cdbr-east-03.cleardb.com"
// DB_USER = "b4cfc69afac7cf"
// DB_PASS = "264ecff6"
// DB_NAME = "heroku_891f58169575735"
// DB_HOST = "localhost"
// DB_USER = "root"
// DB_PASS = ""
// DB_NAME = "bookclub"
