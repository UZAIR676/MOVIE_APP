//genrate token


const generationToken = (id)=>{
    return jwt.sign({id},process.env.jwt_secret,{
       expiration: '60d',

    });
}



export {generationToken};