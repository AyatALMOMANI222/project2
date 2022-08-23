
const commentSchema =require("../database/model/commentSchema")
const createcomment=(req , res)=>{
   const comment = req.body.comment
   const creatComment = new commentSchema({
comment
,
   })
   creatComment.save()
   .then((result)=>{
res.json(result)
   }).catch((err)=>{
    res.json(err)
   })
}


const getAllComment = (req,res)=>{



    
}

module.exports = {createcomment}



