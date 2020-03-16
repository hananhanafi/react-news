import React from 'react';

import './Card.css';

import HeartIcon from './HeartIcon';

import moment from 'moment';
import 'moment/locale/id';

function Card({
  url,
  image,
  title,
  author,
  description,
  published,
}) {
  return (
    <div className="card-berita shadow">
      <div className="card mt-5">
        <img
          src={image}
          className="card-image-top"
          style={{
            height: '250px',
            objectFit: 'cover',
          }}
        />
        <div className="card-body">
          <a href={url}>
            <h5 className="card-title">{title}</h5>
          </a>
          <h6 className="card-subtitle text-muted">
            {author}
          </h6>
          <p className="card-text">
            {description}
          </p>
          <p>
            <small className="text-muted">
              {moment(published).fromNow()}
            </small>
          </p>
          <HeartIcon />
        </div>
      </div>
    </div>
  )
}

export default Card;
