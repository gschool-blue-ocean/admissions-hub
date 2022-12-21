let connectionStrings = {
dev:'postgres://postgres:postgrespw@localhost:55000/',
production:process.env.DATABASE_URL,
rootUrl:'https://blueoceanadmissionshub.onrender.com/'
}


export default connectionStrings