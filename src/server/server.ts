import express from 'express';
import config from './config';
import os from 'os';

const server = express();

server.set('view engine', 'ejs');

server.use('/', (req, res) => {
  res.render('index', {
    message: 'Wellcome to Our <em>App</em>',
  });
});

server.listen(config.PORT, () => {
  console.log(
    `express server is listing at ${config.SERVER_URL}`,
    `\nFree Mem: ${os.freemem() / 1024 / 1024} MB`,
  );
});
