import { Request, Response, NextFunction } from "express";



export function EnsureAuthenticated(request:Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).json({
            errorCode: "token.invalid",
        });
    }

    const [,token] = authToken.split(" ");
    

}