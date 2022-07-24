import React from 'react'
import { Routes as RoutesWrap, Route } from 'react-router-dom'

import About from '../../Pages/About';
import Work from '../../Pages/Work';
import Service from '../../Pages/Service';
import Technologies from '../../Pages/Technologies';
import Modern from '../../Pages/Modern';
import Faq from '../../Pages/Faq';
import Supports from '../../Pages/Supports';
import Blog from '../../Pages/Blog';
import Main from '../../Pages/Main';
// import Error from '../../Pages/Error';




function Contents() {

  const pageList = [
    {link: '/', page: <Main />},
    {link: 'home', page: <Main />},
    {link: 'about', page: <About />},
    {link: 'work', page: <Work />}, 
    {link: 'service', page: <Service />},
    {link: 'technologies', page: <Technologies />},
    {link: 'modern', page: <Modern />},
    {link: 'faq', page: <Faq />},
    {link: 'supports', page: <Supports />},
    {link: 'blog', page: <Blog />},
    // {link: '*', page: <Error />}
  ]



  return (
    <main className='content_area'>
      <h2>Contents</h2>
      <RoutesWrap>
        {/* <Route path="/" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="service" element={<Service />} />
        <Route path="technologies" element={<Technologies />} />
        <Route path="modern" element={<Modern />} />
        <Route path="faq" element={<Faq />} />
        <Route path="support" element={<Supports />} />
        <Route path="blog" element={<Blog />} /> */}
        {
          pageList.map((com, index) => 
            <Route key={index} path={com.link} element={com.page} />)
        }
        {/* {
          pageList.map((component, index)=> {return
            <Route key={index} path={component.link} element={component.page} />
          })
        } */}
      </RoutesWrap>
    </main>
  )
}

export default Contents