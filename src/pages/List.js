import Header from './components/Header/Header';
import Content from './components/Content';

function List() {
    var shoppingLists = [
        {
            "_id": 1,
            "ownerId": "Martin",
            "name": "Nakup 1",
            "items": [
                {
                    "itemId": 1,
                    "name": "Mleko",
                    "quantity": "1ks",
                    "isResolved": false
                },
                {
                    "itemId": 2,
                    "name": "Mrkev",
                    "quantity": "2kg",
                    "isResolved": true
                },
                {
                    "itemId": 3,
                    "name": "Banany",
                    "quantity": "3kg",
                    "isResolved": false
                }
            ],
            "members": [
                "Petr",
                "Ondra",
            ]
        },
        {
            "_id": 2,
            "ownerId": "Ondra",
            "name": "Nakup 2",
            "items": [
                {
                    "itemId": 1,
                    "name": "Mleko",
                    "quantity": "1ks",
                    "isResolved": true
                },
                {
                    "itemId": 2,
                    "name": "Mrkev",
                    "quantity": "2kg",
                    "isResolved": true
                },
                {
                    "itemId": 3,
                    "name": "Banany",
                    "quantity": "3kg",
                    "isResolved": false
                }
            ],
            "members": [
                "Petr",
                "Martin",
            ]
        },
        {
            "_id": 3,
            "ownerId": "Petr",
            "name": "Nakup 3",
            "items": [
                {
                    "itemId": 1,
                    "name": "Mleko",
                    "quantity": "1ks",
                    "isResolved": false
                },
                {
                    "itemId": 2,
                    "name": "Mrkev",
                    "quantity": "2kg",
                    "isResolved": false
                },
                {
                    "itemId": 3,
                    "name": "Banany",
                    "quantity": "3kg",
                    "isResolved": false
                }
            ],
            "members": [
                "Karel",
                "Tomáš",
            ]
        }
    ];
    return (
        <div className="page">
            <Header />
            <Content shoppingLists={shoppingLists} />
        </div>
    );
}

export default List;
