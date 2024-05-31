const { Resend } = require('resend');
const APP_CONFIGS = require('../../appConfig.js');

const resend = new Resend(APP_CONFIGS.RESEND_API_KEY);

const sendWelcomeMail = async (email) => {
    const renderer = (await import('./renderer.mjs')).default
    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Thanks for Joining',
        html: (await renderer()),
      });
}

module.exports = {
    sendWelcomeMail
}