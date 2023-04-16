
import postMessage from "../models/postMessages.js";
import mongoose from "mongoose";

export const getPosts = async (req, res) => {
    try {
        const gettingPostMessage= await postMessage.find();
        res.status(200).json(gettingPostMessage);
    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message});
    }
}

export const createPost = async (req, res) => {

    const post = req.body;
    const newPost = new postMessage(post);

   try {
    await newPost.save();
    res.status(201).json(newPost);
   } catch (error) {
    res.status(409).json({message: error.message});
   }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, id };

    await postMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await postMessage.findByIdAndRemove(id);

    console.log(error);

    res.json({ message: "Post deleted successfully." });
}

