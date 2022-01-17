/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const {
  PHASE_PRODUCTION_SERVER,
  PHASE_DEVELOPMENT_SERVER,
} = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: [          
          "jf-ecommerce-project.s3.eu-central-1.amazonaws.com",
        ],
      },
      env: {
        BACKEND_URL: "http://localhost:5000",
      },
    };
  }

  return {
    images: {
      domains: [        
        "jf-ecommerce-project.s3.eu-central-1.amazonaws.com",
      ],
    },

    env: {
     BACKEND_URL: "https://jf-ecommerce-project.herokuapp.com",
    },
  };
};

module.exports = nextConfig
