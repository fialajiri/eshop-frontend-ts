const {
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER,
  PHASE_TEST,
} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: ["ecommerce-ts-project.s3.eu-central-1.amazonaws.com"],
      },
      env: {
        BACKEND_URL: "http://localhost:5000",
        IMAGE_DOMAIN: 'https://ecommerce-ts-project.s3.eu-central-1.amazonaws.com'
      },
    };
  }

  if (phase === PHASE_TEST) {
    return {
      images: {
        domains: ["ecommerce-ts-project.s3.eu-central-1.amazonaws.com"],
      },
      env: {
        BACKEND_URL: "http://localhost:5000",
        IMAGE_DOMAIN: 'https://ecommerce-ts-project.s3.eu-central-1.amazonaws.com'
      },
    };
  }

  return {
    images: {
      domains: ["ecommerce-ts-project.s3.eu-central-1.amazonaws.com"],
    },

    env: {
      BACKEND_URL: "https://jf-ecommerce-project.herokuapp.com",
      IMAGE_DOMAIN: 'https://ecommerce-ts-project.s3.eu-central-1.amazonaws.com'
    },
  };
};
