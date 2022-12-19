let connectionStrings = {
dev:'postgresql://postgres:docker@localhost:5432/blueocean',
production:process.env.DATABASE_URL,
rootUrl:'https://blueoceanadmissionshub.onrender.com/'
}


export default connectionStrings