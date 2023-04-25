import { Server } from 'socket.io';
import  Connection from './database/db.js';
import { getDocument } from './controller/document-controller.js';


const PORT = 9000;

Connection();

const io = new Server(PORT,{
    cors:{
        origin: 'http://localhost:3000',
        method: ['GET','POST']
    }
});

io.on('connection', socket => {
    socket.on('get-document', documentId =>{
        const document = getDocument(documentId);
        socket.join(documentId);
        socket.emit('load-document',document.data);

        socket.on('send-changes', delta => {
            socket.broadcast.to(documentId).emit('receive-changes',delta);
        })
    }) 
});