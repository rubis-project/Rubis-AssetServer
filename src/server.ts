import * as Express from 'express';
import * as cors from 'cors';

class Server {
    static server: Express.Express;

    static start() {
        Server.server = Express();
        Server.server.use(cors());
        Server.server.use(Express.static('public'));
        Server.server.listen(80);
    }
}

(() => {
    Server.start();
})();