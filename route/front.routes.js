/* 
Imports
*/
    // Node
    const express = require('express');
    const frontRouter = express.Router();
//
/* 
Définition
*/
    //=> Homepage
    frontRouter.get('/', ( req, res ) => {
        //=> Créeer une collection de todoes

        //=> Envoyer le fichier "index" dans la réponse
        return res.render('part10');

        
    });
//

/* 
Export
*/
    module.exports = frontRouter;
//