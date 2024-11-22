export const permissions = [
    {
        role: 'user',
        actions: [
            'get_profile',
            'add_items',
            'get_items', 
            'get_item', 
            'update_item',
            'update_profile',
            'add_fraudreport',
            'get_fraudreport',
            'get_fraudreports',
            'update_fraudreport',
            'delete_fraudreport',
            'post_category',
            'update_category',
        ]
    }, 


    {
        role: 'admin',
        actions: [
            'get_profile',
            'add_items',
            'get_items',
            'get_item',
            'update_item',
            'delete_item',
            'update_profile',
            'post_category',
            'get_category',
            'get_categories',
            'update_category',
            'delete_category',
            'add_fraudreport',
            'get_fraudreport',
            'get_fraudreports',
            'update_fraudreport',
            'delete_fraudreport',

        ]
    }
]