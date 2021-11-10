const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = {
  sendEmail: async ({ to, subject, text }) => {
    const msg = {
      to,
      from: "hatchways.pearl@gmail.com",
      subject,
      text,
    };

    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  },

  sendEmailWithTemplate: async ({ to, subject, templateId, data }) => {
    const msg = {
      to,
      from: "hatchways.pearl@gmail.com",
      subject,
      templateId,
      dynamic_template_data: data,
    };

    try {
      await sgMail.send(msg);
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  },
};
