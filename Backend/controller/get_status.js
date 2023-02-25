
function status(req,res,next){
    return res.status(200).json({message:"OK!"});
}

exports.status = status;

