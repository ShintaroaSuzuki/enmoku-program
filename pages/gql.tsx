import { useAllUserNameQuery } from '@/src/graphql/user/getAllUserName.generated'

const Gql = () => {
  const { loading, error, data } = useAllUserNameQuery()

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return (
    <div className="flex min-h-screen">
      {
        data!.findAllUser.map((user, i) => (
          <p key={i}>{user!.name}</p>
        ))
      }
    </div>
  )    
}

export default Gql
