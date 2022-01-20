import cardData from '../../../public/data/CardData'

export default async (req, res) => {
    const httpMethod = req.method;

    if (httpMethod !== 'GET') {
        res.status(400);
        res.headers({
            'Allow': 'GET'
        });
        res.send('You are not using a http GET method for this endpoint.');
    }   

    res.status(200);
    res.json(cardData);
}