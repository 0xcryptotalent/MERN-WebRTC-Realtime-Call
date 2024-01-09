const { create } = require('../services/room-service')

async function createRoom(req,res) {
    const { topic , roomType} = req.body;
    
    if (!topic || !roomType) {
        return res.status(400).json({
            message : 'All fields are required..'
        })
    }

    const room = await create({
        topic,
        roomType,
        ownerId : req.user._id,
    })

    return res.json(room);
}

module.exports = {
    createRoom
}