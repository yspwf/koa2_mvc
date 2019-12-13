module.exports = app => {
   
    const { Controller, router } = app;
    router.get('/', Controller.home.home);

    return router;
}