export default {
    data() {
        return {
            loading: false,
            errors: null,
            fields: {
                orders: [
                    {
                        name: 'full_name',
                        title: 'Название',
                        component: 'input',
                        type: 'text',
                        required: true,
                    },
                    {
                        name: 'phone_number',
                        title: 'Номер телефона',
                        component: 'input',
                        type: 'text',
                        mask: ['+996 (###) ##-##-##', '+996 (###) ##-##-##'],
                        required: true,
                    },
                    {
                        name: 'address',
                        title: 'Адрес доставки',
                        component: 'input',
                        type: 'text',
                        required: true,
                    },
                    // {
                    //     name: 'status',
                    //     title: 'Статус заказа',
                    //     component: 'input',
                    //     type: 'text',
                    //     required: false,
                    // },
                    {
                        name: 'delivery_time',
                        title: 'Время доставки',
                        component: 'date-picker',
                        required: true,
                    },
                    {
                        component: 'dynamic-select-counter',
                        name: 'bouquets',
                        title: ['Букет', 'Цена'],
                        path: 'bouquets',
                        required: true
                    },
                ],
                inventories: [
                    {
                        name: 'name',
                        title: 'Название',
                        component: 'input',
                        type: 'text',
                        required: true,
                    },
                    {
                        name: 'quantity',
                        title: 'Количество',
                        component: 'counter',
                        required: true,
                    },
                    {
                        name: 'image',
                        title: 'Изображение',
                        component: 'input-file',
                        required: false,
                    },
                ],
                bouquets: [
                    {
                        name: 'name',
                        title: 'Название',
                        component: 'input',
                        type: 'text',
                        required: true,
                    },
                    {
                        name: 'price',
                        title: 'Цена',
                        component: 'input',
                        type: 'text',
                        required: true,
                    },
                    {
                        name: 'image',
                        title: 'Изображение',
                        component: 'input-file',
                        required: false,
                    },
                    {
                        component: 'dynamic-select-counter',
                        name: 'inventory_items',
                        title: ['Цветок', 'Количество'],
                        path: 'inventories',
                        required: true
                    },
                ],
            },
        };
    },
};