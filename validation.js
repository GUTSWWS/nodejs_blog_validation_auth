const {body} = require('express-validator')



const loginValidation = [
    body('email','incorrect email form').isEmail(),
    body('password','password must have min 5 symbols').isLength({ min:5}),
]



 const registerValidation = [
    body('email','incorrect email form').isEmail(),
    body('password','password must have min 5 symbols').isLength({ min:5}),
    body('fullName','enter your name').isLength({ min:3}),
    body('avatarUrl','incorrect url').optional().isURL(),
]

const postCreateValidation = [
    body('title','Введите заголовок статьи').isLength({min:3}).isString(),
    body('text','Введите содержимое статьи').isLength({ min:10}).isString(),
    body('tags','неверный формат тегов').optional().isString(),
    body('imageUrl','incorrect image url').optional().isString(),
]




module.exports = {loginValidation,registerValidation,postCreateValidation}
