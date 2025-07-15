import express from 'express';



const app = express();



app.use(  (req, res, next)=>{
   console.log('1st dummy middleware', req.url, req.method)
      next();
});

app.use(     (req, res, next)=>{
   console.log('2nd dummy middleware', req.url, req.method)
      next();
});

// app.use(     (req, res, next)=>{
//    console.log('3rd dummy middleware', req.url, req.method)
//    res.send("<h1>Peshawar</h1>");
      
// });

app.get(   '/',   (req, res, next)=>{
   console.log('Handling / for get', req.url, req.method)
   res.send("<h1>Peshawar</h1>");
      
});

app.get(   '/contact-us',   (req, res, next)=>{
   console.log('Handling /contact-us for get', req.url, req.method)
   res.send(`<h1>Please give your details here</h1>
                <form action="/contact-us" method= "POST">
                    <input type="text" name="name" placeholder="Enter your name"/>
                    <input type="email" name="email" placeholder="Enter your email"/>
                    <input type="submit"/>


                </form>`);
});

app.post(   '/contact-us',   (req, res, next)=>{
   console.log('Handling / for post', req.url, req.method)
   res.send("<h1>Thankyou for submitting your details</h1>");
      
});

app.listen(3000, ()=> {
        console.log("Server running");

});