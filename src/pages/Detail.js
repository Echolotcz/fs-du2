import { useParams } from 'react-router-dom';
import Header from './components/Header';
import List from './components/List';

function Detail() {
    const { id } = useParams();
    var list = {
        "_id": id,
        "ownerId": "someid",
        "name": "Nakup",
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
    };

    return (
        <div className="page">
            <Header list={list} />
            <div className="content">
                <List list={list} />
            </div>
        </div>
    );
}

export default Detail;
