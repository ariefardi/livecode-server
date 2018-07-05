const Model = require('../models/article-model')
const mongoose = require('mongoose')
const query = new mongoose.Query();

class Controller{
    static getArticles(req,res){
        Model.find()
        .then(dataArticles=> {
            res.status(200).json({
                message: 'Data Articles',
                dataArticles
            })
        })
    }
    static getOneArticles(req,res){
        Model.find({_id: req.params.id})
        .then(article=> {
            res.status(200).json({
                message: 'get One articles',
                article
            })
        })
        .catch(err=> {
            res.status(200).json({
                message: err.message
            })
        })
    }
    static getByAuthor(req,res){
        query.Model.find().$where({author: req.params.author})
        .then(dataArticles=> {
            res.status(200).json({
                message: 'get by author',
                dataArticles
            })
        })
    }
    static getByCategory(req,res){
        Model.find({category: req.params.category})
        .then(dataArticles=> {
            res.status(200).json({
                message: 'get by category',
                dataArticles
            })
        })
    }
    static addArticle(req,res){
        let obj = {
            title: req.body.title,
            content: req.body.content,
            category: req.body.category,
            author: req.body.author,
            imgSrc: req.body.imgSrc
        }
        console.log(obj)
        let newPost = new Model(obj)
        newPost.save()
        .then(article=> {
            res.status(200).json({
                message: 'Added Article',
                article
            })
        })
    }
    static removeOne(req,res){
        Model.findByIdAndRemove({_id: req.params.id})
        .then(()=> {
            res.status(200).json({
                message: 'remove'
            })
        })
    }
}

module.exports = Controller