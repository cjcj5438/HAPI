const hello=({
    method: 'GET',
    path: '/{name}',
    handler: (request, h) => {
        return 'Hello, ' + encodeURIComponent(request.params.name) + '!';
    }
});

const index={
    method:'GET',
    path:'/',
    handler:(request,h)=>{
        return {
            data:"hello word"
        }
    }
}

const test={
    method: 'GET',
    path: '/test',
    handler: (request, h) => {
        request.logger.info('In handler %s', request.path);
        return h.file('./public/hello.html');
    }
}

module.exports=[hello,index,test]