import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date
});
const BlogPostModel = mongoose.model('BlogPost', BlogPost)
export default BlogPostModel