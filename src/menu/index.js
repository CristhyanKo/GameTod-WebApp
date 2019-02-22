export default {
    items: [
        {
            title: true,
            name: 'Geral'
        },
        {
            name: 'Inicio',
            url: '/dashboard',
            icon: 'pie-chart',
            // badge: {
            //     color: 'green',
            //     text: 'NOVO',
            // },
            key: 1
        },
        {
            name: 'Divulgação ',
            url: '/public',
            icon: 'notification',
            // iconColor: '#c94242',
            children: [
                {
                    name: 'Geral',
                    url: '/public/any',
                },
                {
                    name: 'Jogos',
                    url: '/public/games',
                    badge: {
                        color: 'red',
                        text: '10',
                    },
                },
                {
                    name: 'Links',
                    url: '/public/links',
                },
            ]
        },
        // {
        //     title: true,
        //     name: 'Titulo de Teste',
        //     wrapper: {
        //         element: '',
        //         attributes: {}
        //     },
        //     class: ''
        // },
        {
            name: 'Jogos',
            url: '/games',
            icon: 'rocket',
            badge: {
                color: 'red',
                text: 'NOVOS',
            },
        },
        {
            name: 'Salas',
            url: '/rooms',
            icon: 'global',
            badge: {
                color: 'green',
                text: '0',
            },
        },
        {
            name: 'Times',
            url: '/teams',
            icon: 'team',
        },
        {
            title: true,
            name: 'Para mim'
        },
        {
            name: 'Amigos',
            url: '/friends',
            icon: 'smile',
        },
        {
            name: 'Conversas',
            url: '/chats',
            icon: 'coffee',
        },
        {
            name: 'Convites',
            url: '/invites',
            icon: 'mail',
            badge: {
                color: 'orange',
                text: '5'
            }
        },
        {
            name: 'Meus Times',
            url: '/my-teams',
            icon: 'skin',
        },
        {
            name: 'Configurações',
            url: '/chats',
            icon: 'setting',
        },
        {
            name: 'Ajuda',
            url: '/chats',
            icon: 'question',
        },
        {
            name: 'Ajuda',
            url: '/chats',
            icon: 'question',
        },
        {
            name: 'Ajuda',
            url: '/chats',
            icon: 'question',
        },
        {
            name: 'Ajuda',
            url: '/chats',
            icon: 'question',
        },
        {
            name: 'Ajuda',
            url: '/chats',
            icon: 'question',
        },
        {
            name: 'Ajuda',
            url: '/chats',
            icon: 'question',
        },
        {
            name: 'Ajuda',
            url: '/chats',
            icon: 'question',
        },
        {
            name: 'Ajuda',
            url: '/chats',
            icon: 'question',
        },
    ]
}
