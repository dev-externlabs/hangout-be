const admin = require('firebase-admin');
const serviceAccount = require('./samdemo-8bda2-firebase-adminsdk-zcgrc-9c98649be6.json');
const { param } = require('../routes/v1/auth.route');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const sendMessage = async (params) => {
  const message = {
    data: {
      type: 'warning',
      content: 'A new weather warning has been created!',
      bigText: 'I choose you pikachu',
      subText: 'Ash just started his journey',
    },
    token:
      'dvEyoueNQPCO3rgXCGrrt8:APA91bHM66NIYqcawpS9EZpYvSmWtCBDC5sSiaCblRgu-HiY19WCbDjw_HTYTsZLiWcsatqeLT2dM4jzmP-YDhI3QLYgYKkOIz8LX2_T1ii6Ek9ky7jpzpv7dEtmIoRuljLFckmsdZ2k',
    notification: {
      // title: req.body.title,
      title: 'Pokemon',
      body: 'I choose ...',
      // body: req.body.messageText
    },
  };
  const result = await admin.messaging().send(message);
  return result;
};

const sendMulticastMessage = async (params) => {
  const message = {
    data: {
      type: 'warning',
      content: 'A new weather warning has been created!',
      bigText: 'Madara has defeated all kages, and now naruto and sasuke is our last hope.',
      subText: '',
    },
    tokens: [
      'dvEyoueNQPCO3rgXCGrrt8:APA91bHM66NIYqcawpS9EZpYvSmWtCBDC5sSiaCblRgu-HiY19WCbDjw_HTYTsZLiWcsatqeLT2dM4jzmP-YDhI3QLYgYKkOIz8LX2_T1ii6Ek9ky7jpzpv7dEtmIoRuljLFckmsdZ2k',
    ],
    notification: {
      // title: req.body.title,
      title: 'Calling',
      body: 'Shinobi war is waiting for you',

      // body: req.body.messageText
    },
  };
  const result = await admin.messaging().sendMulticast(message);
  return result;
};

const sendToTopic = async (params, userid) => {
  const { latitude, longitude, title, body } = params;
  const message = {
    data: {
      type: 'warning',
      content: 'A new weather warning has been created!',
      bigText: '',
      subText: '',
      latitude,
      longitude,
      userid,
    },
    notification: {
      // title: req.body.title,
      title,
      body,
      // body: req.body.messageText
    },
  };
  const result = await admin.messaging().sendToTopic('all', message);
  return result;
};
module.exports = {
  sendMessage,
  sendMulticastMessage,
  sendToTopic,
};
