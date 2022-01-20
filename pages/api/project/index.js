import cardData from '../../../public/data/CardData'

export default async (req, res) => {
    const httpMethod = req.method;

    if (httpMethod !== 'POST') {
        res.status(400);
        res.headers({
            'Allow': 'POST'
        });
        res.send('You are not using a http POST method for this endpoint.');
    }   

    let body = {};

    try {
        body = JSON.parse(req.body);
    } catch (e) {
        res.status(400);
        res.send('Malformed JSON in body.');
    }

    const projectData = cardData[body.id - 1];

    res.status(200);
    res.json(projectData);
}