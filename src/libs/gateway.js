/**
 * 
 * @param {*} request 
 * @param {*} response 
 * @param {*} next 
 */
export function gateway(request, response, next){
    let Headers = request.headers.authorization;
    let status = 401;
    let message = "Unauthorized";
    let checkHeader = true;
    let Token;
    if(!Headers || !Headers.includes('Bearer')){
        checkHeader = false
    }else{
        Token = Headers.split(' ')[1];
    }
    
    let AuthorizedTokens = process.env.AUTH ? process.env.AUTH.split(' '):['5bMHdmHK/wBsbdQvPPMKww']
    if(!checkHeader || Headers.split(' ')[0] !== "Bearer" || !AuthorizedTokens.includes(Token))
    {
        response.status(401).json({
            message,
            status
        })
    }else{
        next();
    }
}