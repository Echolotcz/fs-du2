import { useParams } from 'react-router-dom';
import Header from './components/Header/Header';
import List from './components/Detail/List';
import CompletionPieChart from './components/Charts/CompletionPieChart';

function Detail() {
    const { id } = useParams();
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
    const list = shoppingLists.find(list => list._id == id);
    const completedItems = list.items.filter(item => item.isResolved).length;
    const totalItems = list.items.length;
    const chartSize = 300;
    return (
        <div className="page">
            <Header list={list} />
            <div className="detail content">
                <CompletionPieChart chartTitle="Completition" chartSize={chartSize} completedItems={completedItems} totalItems={totalItems} />
                <List list={list} />
            </div>
        </div>
    );
}

export default Detail;
