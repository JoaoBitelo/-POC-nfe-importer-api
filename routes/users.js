var express = require("express");
var parser = require("xml2json");
const mongoose = require("mongoose");
const router = require("express-promise-router")();
const NFEmodel = mongoose.model("NFE");

/* GET users listing. */
router.post("/", async (req, res, next) => {
    try {
        var result2;
        var parseString = require("xml2js").parseString;
        await parseString(req.body.data, function (err, result) {
            result2 = result.nfeProc.NFe[0].infNFe;
        });
        var path = result2[0];
        console.log("aaaaaaaa", path.dest[0].CNPJ[0]);

        const NFE = new NFEmodel({
            emissorNome: path.emit[0].xNome[0],
            emissorCNPJ: path.emit[0].CNPJ[0],
            destinatarioNome: path.dest[0].xNome[0],
            destinatarioCNPJ: path.dest[0].CNPJ[0],
        });
        let save = await NFE.save();
        res.send(save);
    } catch (err) {
        console.log("erro", err);
        next(err);
    }
});

module.exports = router;
