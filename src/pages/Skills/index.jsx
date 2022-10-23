import React, { useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../../components/AnimatedLetters'
import Sphere from './Sphere'
import {
  faAngular,
  faCss3,
  faNode,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const skills = [
    'HTML',
    'CSS3',
    'npm',
    'Angular',
    'ReactJS',
    'JavaScript',
    'TypeScript',
    'C#',
    'C++',
    'Sass',
    '.Net',
    'jQuery',
    'ES6',
    'ES5',
    'AJAX',
    'Canvas',
    'JSON',
    'Git',
    'Bootstrap',
    'XML',
    'SVG',
    'Node.js',
    'Gulp',
  ]

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Skills'.split('')}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious front-end developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>!!!</p>
        </div>

        <div className="stage-cube-cont">
          <Sphere id={'mySkills'} width={550} height={500} items={skills} />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills
