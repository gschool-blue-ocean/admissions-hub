let connectionStrings = {
dev:'postgresql://postgres:docker@localhost:5432/postgres',
production:process.env.DATABASE_URL,
rootUrl:process.env.ROOT_URL ? process.env.ROOT_URL : 'https://admissions-hub-exterminators.onrender.com/'
}


export default connectionStrings