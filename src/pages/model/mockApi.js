import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);


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
        ],
        "archived": false
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
        ],
        "archived": false
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
            "Tomas",
        ],
        "archived": false
    },
    {
        "_id": 4,
        "ownerId": "Martin",
        "name": "Nakup 4",
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
            "Tomas",
        ],
        "archived" : true
    }
];

mock.onGet('/api/shoppingLists').reply(200, config => { return shoppingLists; });

mock.onPost('/api/shoppingLists').reply(config => {
    const newList = JSON.parse(config.data);
    shoppingLists.push(newList);
    return [201, newList];
});

mock.onDelete(/\/api\/shoppingLists\/\d+\/items\/\d+/).reply(config => {
    const targetId = parseInt(config.url.split('/')[3]);
    const targetItemId = parseInt(config.url.split('/').pop());
    const targetList = shoppingLists.find(list => list._id === targetId);
    if (targetList) {
        targetList.items = targetList.items.filter(item => item.itemId !== targetItemId);
        return [204];
    }
    return [404];
});

mock.onPost(/\/api\/shoppingLists\/\d+\/items/).reply(config => {
    const targetId = parseInt(config.url.split('/')[3]);
    const newItem = JSON.parse(config.data);
    const targetList = shoppingLists.find(list => list._id === targetId);
    if (targetList) {
        targetList.items.push(newItem);
        return [201, newItem];
    }
    return [404];
});

mock.onDelete(/\/api\/shoppingLists\/\d+/).reply(config => {
    const listId = parseInt(config.url.split('/').pop());
    shoppingLists = shoppingLists.filter(list => list._id !== listId);
    return [204];
});

mock.onPost(/\/api\/shoppingLists\/\d+\/members/).reply(config => {
    const targetId = parseInt(config.url.split('/')[3]);
    const newMember = JSON.parse(config.data);
    const targetList = shoppingLists.find(list => list._id === targetId);
    if (targetList) {
        targetList.members.push(newMember);
        return [201, newMember];
    }
    return [404];
});

mock.onDelete(/\/api\/shoppingLists\/\d+\/members\/\w+/).reply(config => {
    const targetId = parseInt(config.url.split('/')[3]);
    const targetMember = config.url.split('/').pop();
    const targetList = shoppingLists.find(list => list._id === targetId);
    if (targetList) {
        targetList.members = targetList.members.filter(member => member !== targetMember);
        return [204];
    }
    return [404];
});

export default mock;