let itemsMenu = [{
        id: 1,
        title: 'Carpaccio fresco',
        description: 'Entrada Carpaccio de salmón con cítricos',
        descriptionLarge: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        currency: 'U$S',
        amount: 65.50
    },
    {
        id: 12,
        title: 'Risotto de berenjena',
        description: 'Risotto de berenjena y queso de cabra',
        descriptionLarge: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',

        currency: 'U$S',
        amount: 47.00

    },
    {
        id: 3,
        title: 'Mousse de arroz',
        description: 'Mousse de arroz con leche y aroma de azahar',
        descriptionLarge: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        currency: 'U$S',
        amount: 27.50

    },
    {
        id: 4,
        title: 'Espárragos blancos',
        description: 'Espárragos blancos con vinagreta de verduras y jamón ibérico',
        currency: 'U$S',
        amount: 37.50
    }
];

let descriptionRestaurant = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';



const indexController = {
    main: (req, res) => {
        let params = {
            menu: itemsMenu,
            description: descriptionRestaurant
        }
        res.render('index', params);
    },
    detail: (req, res) => {
        let id = req.params.id;

        if (id < itemsMenu.length) {
            if ('descriptionLarge' in itemsMenu[id] === false) {
                itemsMenu[id].descriptionLarge = 'Plato típico';
            }
            res.render('detalleMenu', { itemMenu: itemsMenu[id] });
        } else {
            res.render('error', {
                message: 'Product id not fount',
                error: {
                    status: id,
                    stack: 1
                }

            });
        }
    }
}

module.exports = indexController;