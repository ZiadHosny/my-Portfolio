import React, { useEffect } from 'react'
import './tagcanvas.min'

const Sphere = ({
  id,
  width,
  height,
  items,
  textColour = '#08fdd8',
  shape = 'sphere',
}) => {
  useEffect(() => {
    window.TagCanvas.Start(id, id + 'Tags', {
      textColour: textColour,
      outlineThickness: 0.5,
      outlineColour: '#fe0853',
      maxSpeed: 0.06,
      freezeActive: true,
      shuffleTags: true,
      shape: shape,
      zoom: 1.1,
      noSelect: true,
      textFont: null,
      pinchZoom: true,
      freezeDecel: true,
      fadeIn: 3000,
      initial: [0.3, -0.1],
      depth: 0.8,
    })
  }, [id, shape, textColour])
  return (
    <div className="tags_cloud">
      <div id={id + 'Container'}>
        <canvas width={width} height={height} id={id}>
          <p>
            Anything in here will be replaced on browsers that support the
            canvas element
          </p>
        </canvas>
      </div>
      <div id={id + 'Tags'} className="sphere-tags">
        <ul>
          {items.map((skill, key) => (
            <li key={key}>
              <a href="/">{skill}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sphere
