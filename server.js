const webPush = require('web-push');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const VAPID_PUBLIC_KEY = 'YOUR_PUBLIC_VAPID_KEY';
const VAPID_PRIVATE_KEY = 'YOUR_PRIVATE_VAPID_KEY';

webPush.setVapidDetails(
    'mailto:your-email@example.com',
    VAPID_PUBLIC_KEY,
    VAPID_PRIVATE_KEY
);

let subscriptions = [];

app.post('/save-subscription', (req, res) => {
    const subscription = req.body;
    subscriptions.push(subscription);
    res.status(201).json({});
});

app.post('/remove-subscription', (req, res) => {
    const subscription = req.body;
    subscriptions = subscriptions.filter(sub => sub.endpoint !== subscription.endpoint);
    res.status(201).json({});
});

app.post('/send-notification', (req, res) => {
    const notificationPayload = {
        title: 'New Update',
        body: 'You have a new update!',
    };

    const promises = subscriptions.map(sub => {
        return webPush.sendNotification(sub, JSON.stringify(notificationPayload));
    });

    Promise.all(promises)
        .then(() => res.status(200).json({ message: 'Notifications sent!' }))
        .catch(err => {
            console.error('Error sending notification:', err);
            res.sendStatus(500);
        });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});