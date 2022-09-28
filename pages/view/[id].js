import { useRouter } from 'next/router'

function Post() {
    const router = useRouter()
    const { id } = router.query
  return (
    <div>
        <h1>{id}</h1>
    </div>
  )
}

export default Post