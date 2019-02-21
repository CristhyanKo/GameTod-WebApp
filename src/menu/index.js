export default {
    items: [
        {
            name: 'Inicio',
            url: '/dashboard',
            icon: 'pie-chart',
            badge: {
                color: 'green',
                text: 'NOVO',
              },
            key: 1
        },
        {
            title: true,
            name: 'Titulo de Teste',
            wrapper: {
                element: '',
                attributes: {}
            },
            class: ''
        },
        {
            name: 'Menu Pai',
            url: '/intranet/atuarial',
            icon: 'fa fa-hourglass-half',
            children: [
                {
                    name: 'Menu Filho 1',
                    url: '/intranet/cliente',
                },
                {
                    name: 'Menu Filho 2',
                    url: '/intranet/tipo-cliente',
                },
                {
                    name: 'Menu Filho 3',
                    url: '/intranet/situacao-cliente',
                },
            ]
        }
    ]
}
