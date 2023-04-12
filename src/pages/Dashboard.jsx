import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTerrains, reset } from '../features/terrains/terrainSlice'
import Home from '../components/Home'
import {  FaFutbol } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faDrum } from '@fortawesome/free-solid-svg-icons';


function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { isError, message } = useSelector(
    (state) => state.terrains
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getTerrains())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])



  return (
    <>
      <div>
        <h1 className="animated-text">Welcome {user && user.name} To Takwira <FaFutbol /></h1>
        <h2 className="animated-text2">My All Stadium <FontAwesomeIcon icon={faDrum} /></h2>
      </div>
      <Home />
  
    </>
  )
}

export default Dashboard
