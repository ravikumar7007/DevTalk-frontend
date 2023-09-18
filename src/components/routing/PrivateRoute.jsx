import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateRoute({component:Component}) {
      const {loading,isAuthenticated}=useSelector(state=>state.auth)
      return (!loading&&isAuthenticated) ?Component:<Navigate to="/login" />
 
}

export default PrivateRoute