export const errorHandler = (err,req,res,next)=>{
    const statuscode = res.statuscode === 200 ? 500 : res.statuscode;
    res.statuscode(statuscode);
    res.json({
        message : err.message,
        stack : process.env.NODE_ENV === 'production' ?null :err.stack 
        
    })
}