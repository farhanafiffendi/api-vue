const { newuser, group } = require('../../models');

exports.addGroup = async (req, res) => {
    try {
        const artisData = await group.create(req.body)

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

exports.updateGroup = async (req, res) => {
    try {

        const { id } = req.params
        const data = req.body

        await group.update(data,
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

exports.getGroup = async (req, res) => {
    try {
        let data = await group.findAll({
            include: [
                {
                    model: newuser,
                    as: 'pertama',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                },
                {
                    model: newuser,
                    as: 'kedua',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                },
            ],
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

exports.deleteGroup = async (req, res) => {

    const { id } = req.params

    try {
        await group.destroy({
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
