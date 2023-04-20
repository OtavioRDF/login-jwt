import express from 'express';
import swaggerUI from 'swagger-ui-express';
import swaggerFile from '@config/swagger-output.json';
import { router } from '@api/routes/routes';
const app = express();

app.use(express.json());
app.use('/api/v1/', router);
app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

const PORT = process.env['PORT'] || 7070;

app.listen(PORT, ()=>{
    console.log(`Authorization service running on ${PORT}`);
})