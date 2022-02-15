const sequelize = require("../DataBase/connection").sequelize;

const ProdutoQuantidade = sequelize.define('produtos_quantidade', {
    id_produto_quantidade: { type: sequelize.Sequelize.INTEGER, primaryKey: true },
    id_produto: { type: sequelize.Sequelize.INTEGER },
    quantidade: { type: sequelize.Sequelize.INTEGER },
    dthr_atualizacao: { type: sequelize.Sequelize.DATE }
}, {
    tableName: 'produtos_quantidade',
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    deletedAt: false,
    freezeTableName: true,
    paranoid: true
});

const include = [];

const primary_key = "id_produto_quantidade";

module.exports = {
    ProdutoQuantidade,
    include,
    primary_key
};
