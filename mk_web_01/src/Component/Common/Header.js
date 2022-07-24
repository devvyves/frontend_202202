import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import uuid from 'react-uuid';
import './Header.scss';

function Header() {

  const gnbList = [
    {id: uuid(), link: 'about', text: 'about'},
    {id: uuid(), link: 'work', text: 'work'},
    {id: uuid(), link: 'service', text: 'service'},
    {id: uuid(), link: 'technologies', text: 'technologies'},
    {id: uuid(), link: 'modern', text: 'modern'},
    {id: uuid(), link: 'faq', text: 'faq', snippets: 'favorite and question' },
    {id: uuid(), link: 'supports', text: 'supports'},
    {id: uuid(), link: 'blog', text: 'blog'}
  ];




  return (
    <header id="headBox">
      <div className='container'>
        <h1><a href="/">busin</a></h1>
        <nav className='search'>search</nav>
        <nav className='gnb'>
          <h2 className='blind'>global navigation</h2>
          <ul>
            {
              gnbList.map(
                list => <li key={list.id}>
                  <NavLink to={list.link}>
                    {(!list.snippets) ? 
                    list.text : <abbr title={list.snippets}>{list.text}</abbr>}
                  </NavLink></li>)
            }

            {/* <li><NavLink to="about">about us</NavLink></li>
            <li><NavLink to="wokr">work</NavLink></li>
            <li><NavLink to="service">service</NavLink></li>
            <li><NavLink to="technologies">technologies</NavLink></li>
            <li><NavLink to="modern">modern</NavLink></li>
            <li><NavLink to="faq"><abbr title="favorite and question">faq</abbr></NavLink></li>
            <li><NavLink to="supports">supports</NavLink></li>
            <li><NavLink to="blog">blog</NavLink></li> */}
          </ul> 
        </nav>
      </div>
    </header>
  )
}

export default Header


// touch About.js Work.js Service.js Technologies.js Modern.js Faq.js Supports.js Blog.js