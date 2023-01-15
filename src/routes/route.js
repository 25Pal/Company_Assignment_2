const express=require('express');
const router =express.Router();
const controller= require('../controller/crptoController')

router.get("/assets",controller.crptoFunction);

router.all('/*',function (res ,res){
    res.status(400).send({status :false ,msg:"Please send correct url"})
})

module.exports=router;