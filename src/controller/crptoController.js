const modell = require('../model/crptoModel')
const axios = require('axios');

const crptoFunction = async function (req, res) {
    try {
        let obj = await axios.get("https://api.coincap.io/v2/assets");
        let OuterData = obj.data;//data:{data:[]}
        let crptoCoinData = await modell.find();
        if (crptoCoinData.length == 0) {
          
            for (let i = 0; i < OuterData.data.length; i++) {
                let newObj = {
                    Symbol: OuterData.data[i].symbol,
                    name: OuterData.data[i].name,
                    marketCapUsd: OuterData.data[i].marketCapUsd,
                    priceUsd: OuterData.data[i].priceUsd
                }
                let createCoinData = await modell.create(newObj);
                
            }
            return res.status(201).send({ status: true, msg: "CoinCap has Created" });
        }
        else {
            let getCoins = await modell.find().select({ _id: 0, __v: 0 });//_doc//[{},{},{}]
            for (let i = 0; i < getCoins.length; i++) {
                getCoins[i]._doc.changePercent24Hr = OuterData.data[i].changePercent24Hr;
            };
            for (let i = 0; i < getCoins.length; i++) {
                getCoins.sort((a, b) => (b.changePercent24Hr - a.changePercent24Hr));
            }
            return res.status(200).send({ "data": getCoins });
        }
    } catch (err) {
        res.send(err.msg)
    }
}




module.exports = { crptoFunction }