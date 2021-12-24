module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b55fbebe801d824a78e9b9ee5f0f8269'),
  },
});
