import { useRouter } from "next/router"

const Post = () => {
  const router = useRouter()
  const { name } = router.query
  return <div>aa</div>
}

export default Post
