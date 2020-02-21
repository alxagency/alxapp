import 'dotenv/config';
import express from 'express';
import BullBoard from 'bull-board';
import Queue from './app/lib/Queue';
import routes from './routes';


const app = express();
app.use(express.urlencoded({ extended: false }));
BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333);