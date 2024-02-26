console.log("hello world");
const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navgiating the Dom</title>
</head>

<body>
    <div id="main" class="container">
        <ul id="nav">
            <li id="first">home</li>
            <li id="second">about us</li>
            <li>gallery</li>
            <li>contact us</li>
            <li>achivements</li>
        </ul>
    </div>

    <script>
        // let main = document.getElementById('main');
        // console.log(main);
        // let nav = document.getElementById('nav');
        // console.log(nav);
        // let containers = document.getElementsByClassName('container');
        // console.log(containers);
        // let sel = document.querySelector('.container');
        // console.log(sel);

        // let full_time = new Date();
        // console.log(full_time);

        // let date = full_time.getDate();
        // console.log(date);
        // let mon = full_time.getMonth();
        // console.log(mon);
        // let yr = full_time.getFullYear();
        // console.log(yr);


        // document.getElementById("first").innerHTML = date + "-" + mon + "-" + yr;
        // let updatesec = () => {
        //     let current = new Date();
        //     let sec = current.getSeconds();
        //     console.log(sec);
        //     document.getElementById("second").innerHTML = sec;
        // }

        // setInterval(updatesec, 1000);
        // let onion = {
        //     name: 'hhh',
        //     age: 'salary',
        //     kama: 'kai nai'
        // }
        // console.log(onion);
        // let myJsonstr = JSON.stringify(onion);
        // console.log(myJsonstr);

        // myJsonstr = myJsonstr.replace('hhh', 'Utsav')
        // console.log(myJsonstr);
        // let parse = JSON.parse(myJsonstr);
        // console.log(parse);

    </script>
</body>

</html>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});