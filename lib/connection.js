let connectionStrings = {
dev:'postgresql://postgres:docker@localhost:5432/database',
production:process.env.DATABASE_URL,
rootUrl:process.env.ROOT_URL ? process.env.ROOT_URL : 'https://blueoceanadmissionshub.onrender.com/'
}


export default connectionStrings