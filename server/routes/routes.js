const router = (app) => {
  app.get('/', (req, res) => {
    res.status(200)
      .send('Yo, Welcome to the Habit tracker API');
  });

  /** Auth routes */
  app.post('/api/v1/auth/signup');
  app.post('/api/v1/auth/login');
};


export default router;