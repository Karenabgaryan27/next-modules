import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About page",
  description: "Description of about page",
};

const About = () => {
  return (
    <main className='about-page'>
        <section className='showcase'>
            <div className="container">
                About page
            </div>
        </section>
    </main>
  )
}

export default About