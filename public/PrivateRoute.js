import {Navigate} from 'react-router-dom'
import {useAuthValue} from './AuthContext'
import useEffect from 'react'

export default function PrivateRoute({children}) {
  const {currentUser} = useAuthValue()

  if(!currentUser?.emailVerified){
    return <Navigate to='/login' replace/>
}
  

  return children
}
