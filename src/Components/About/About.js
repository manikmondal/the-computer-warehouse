import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import './About.css'


const About = () => {
    return (
        <div>
            <PageTitle title="About"></PageTitle>
            <div className='about-text'>
                <div className='about'>
                    <h1>Q:1:-Difference between `javascript` and `javascript`?</h1>
                    <p>Ans:- <h6 className='text-primary'>javascript:-</h6> 	It is an open-source, cross-platform, interpreted, lightweight scripting programming language that is used to develop dynamic and web applications.It is a programming language. It works in any browser that has a proper browser engine.It is generally used on the client-side server.All the JavaScript is not important to the node community.JavaScript can be run on any engine, including Spider Monkey, V8, and JavaScript Core.	It's a newer version of the ECMA script that runs on Chrome's V8 engine, which is written in C++.	Various companies use JavaScript like Google, Shopify, Udacity, Sendgrid, Groupon, Okta, Instacart, etc..
                        <h6 className='text-primary'>Node JS:-</h6> It is a cross-platform, open-source JavaScript runtime environment that allows JavaScript to be run on the server.It's a JavaScript interpreter and environment with some valuable libraries that JavaScript programming can use separately.It is generally used on the server-side.All node projects represent the JavaScript community.It uses C, C++, and JavaScript.Various companies use Node Js like Netflix, Hapi, Walmart, Paypal, Linkedin, Trello, Medium, eBay, etc.  </p>
                </div>
                <div className='about'>
                    <h1>Q:2:- When should you use `nodejs` and when should you use `mongodb`?</h1>
                    <p> Ans:- Using Node.js allows your front-end (i.e. React, Vue.js, even jQuery) developers to use the same programming language, JavaScript, as your backend developers. This allows for more cross-functional and agile development. Node.js usage is widespread and ongoing, and I highly recommend it for new development.When creating a database, you can choose to set it up locally or in the cloud. For example, you can spin up an installation on localhost manually of MongoDB by downloading and installing MongoDB. That said, a manual installation comes with ongoing maintenance and upkeep costs. As an application developer, I prefer to avoid as much manual work as possible, so I tend to shy away from manual installation. For cloud offerings, there is MongoDB Atlas, the database-as-a-service offering from MongoDB. It is platform-agnostic, allowing you to create database clusters on AWS, Azure, and Google Cloud, and scaling is as simple as clicking a button. They also made it easy to get started, with a free M0 tier. The total time from signup to having a created database was less than five minutes for me.
                    </p>
                </div>
                <div className='about'>
                    <h1>Q:3:-Differences between `sql` and `nosql` databases..?</h1>
                    <p>Ans:- <h6 className='text-primary'>SQL DATABASES:-</h6> 	RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable.Follows ACID property...
                        <h6 className='text-primary'>NoSQL DATABASES:-</h6> Non-relational or distributed database system.They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries.Horizontally scalable.Follows CAP(consistency, availability, partition tolerance).  </p>
                </div>
                <div className='about'>
                    <h1>Q:4:- What is the purpose of `jwt` and how does it work..?</h1>
                    <p> Ans:- JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. A common way to use JWTs is as OAuth bearer tokens. In this example, an authorization server creates a JWT at the request of a client and signs it so that it cannot be altered by any other party. The client will then send this JWT with its request to a REST API. The REST API will verify that the JWT’s signature matches its payload and header to determine that the JWT is valid. When the REST API has verified the JWT, it can use the claims to either grant or deny the client’s request.Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT..
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;