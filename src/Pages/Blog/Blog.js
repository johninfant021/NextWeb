import React from 'react'
import './Blog.css'

const Blog = () => {
    const blogPosts = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaSX-0ETgXyP7dRv3bO4V-odFUNu5wowug6w&s",
    title: 'Top 5 Web Development Trends in 2025',
    description: 'Explore the emerging technologies and frameworks shaping the future of web development.',
    link: 'https://www.webador.com/blog/web-design-trends-for-2025/',
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu9Inqxf6tcu2i0W17L8zHO0PtfaR8PMlnNQ&s",
    title: 'Why UI/UX Matters in Digital Products',
    description: 'A great interface boosts user satisfaction and business success. Learn the key design principles.',
    link: 'https://devkariuki.medium.com/why-clean-ui-ux-design-matters-in-digital-products-85ea8edf6100',
  },
  {
    image: "https://searchengineland.com/wp-content/seloads/2023/05/SEO-Web-Design.jpg",
    title: 'SEO Tips for Modern Websites',
    description: 'Improve your site’s ranking with actionable SEO strategies tailored for today’s web.',
    link: 'https://searchengineland.com/seo-website-design-build-search-engine-friendly-sites-422636',
  },
];
return (
    <>
     <h2 className='client-head'>Blogs</h2>
    <div id='blogs'>
        {
            blogPosts.map((item,index)=>(
                <div className='blog-cont'>
                    <a href={item.link} title={item.title} className='blog-link'><img src={item.image} alt='blog' className='blog-image'/></a>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default Blog