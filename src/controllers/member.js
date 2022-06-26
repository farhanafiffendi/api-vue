const { newuser } = require('../../models');

exports.addMember = async (req, res) => {
    try {
        const artisData = await newuser.create(req.body)

        res.send({
            status: 'success',
            data: artisData
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.updateMember = async (req, res) => {
    try {

        const { id } = req.params
        const data = req.body

        await newuser.update(data,
            {
                where: { id },
            },
        );
        res.send({
            status: 'success',
            data: data
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.getMember = async (req, res) => {
    try {
        let data = await newuser.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
        })

        res.send({
            status: "success",
            messsage: "successfully get artist",
            data,
        })
    } catch (error) {
        console.log(error);
        res.status({
            status: 'failed',
            message: 'Server Error'
        })
    }
};

exports.deleteMember = async (req, res) => {

    const { id } = req.params

    try {
        await newuser.destroy({
            where: {
                id,
            },
        });

        res.send({
            status: "success",
            message: `Delete artist id: ${id} finished`,
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "failed",
            message: "Server Error",
        });
    }
};
