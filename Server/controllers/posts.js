import express from 'express';
import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

export const getPosts=async(req,res)=>{
    try {
        const postMessages=await PostMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost=async(req,res)=>{
    const newPost= new PostMessage(req.boy)
    try {
       await newPost.save()
       res.status(200).json(newPost)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}