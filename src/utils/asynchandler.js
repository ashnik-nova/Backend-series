import express from 'express';

const asyncHandler = (requestHandler) => {
    (req,res, next) => {
        Promise.resolve(requestHandler()).catch((err) =>{
            next(err);
        })
    }
}

export { asyncHandler }; 