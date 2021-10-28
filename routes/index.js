import RenderRouter from './RenderRouter'


export default app => {
    app.use('/common', RenderRouter);
}