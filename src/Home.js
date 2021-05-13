import React from 'react'
import { redirectTo } from '@reach/router'

const Home = () => {
  React.useEffect(() => {
    redirectTo('/show')
  }, []);

  return null;
}

export default Home;
