module.exports = {
  url: {
    production: {
      LANDING: '',
      DOCUMENTATION: '',
      BASIC_EXAMPLE: '',
    },
    staging: {
      LANDING: '',
      DOCUMENTATION: '',
      BASIC_EXAMPLE: '',
    },
    development: {
      LANDING: '',
      DOCUMENTATION: '',
      BASIC_EXAMPLE: '',
    },
  }[process.env.ENV || 'development'],
};
