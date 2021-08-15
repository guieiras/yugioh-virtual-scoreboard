import React from 'react'
import { navigate } from '@reach/router'

const Home = () => {
  React.useEffect(() => {
    navigate('show', { state: { warning: true } })
  }, []);

  return null;
}

export default Home;
