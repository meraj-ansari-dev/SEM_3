const http=require('http');
const PORT=3000;
let course = {
    id: 101,
    courseName: "Data Structures",
    courseCode: "CSE201",
    department: "Computer Science"
};

const server=http.createServer((req,res)=>{
    console.log(`Request Recevied: ${req.method} ${req.url}`);
    res.setHeader("Content-Type","text/plain");
     // GET route
    if (req.method === 'GET' && req.url === '/course') {
        res.statusCode = 200;
        res.end(data);
    }

    // POST route
    else if (req.method === 'POST' && req.url === '/data') {

        let body = '';

        req.on('course', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            course = body;
            res.statusCode = 201;
            res.end('Course created: ' + course);
        });
    }

    // PUT route
    else if (req.method === 'PUT' && req.url === '/data') {

        let body = '';

        req.on('course', chunk => {
            body += chunk;
        });

        req.on('end', () => {
            course = body;
            res.statusCode = 200;
            res.end('Course updated: ' + course);
        });
    }

    // DELETE route
    else if (req.method === 'DELETE' && req.url === '/course') {

        course = '';
        res.statusCode = 200;
        res.end('Course deleted');
    }

    // Route not found
    else {
        res.statusCode = 404;
        res.end('Route not found');
    }

});

server.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});