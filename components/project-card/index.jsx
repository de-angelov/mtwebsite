import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import PropTypes from 'prop-types';
import style from './style.scss';

const ProjectCard = (props) => (
  <div className={style.card}>
    <div className={style.picture} />
    <h4 className={style.title}>{props.Title}</h4>
    <h5 className={style.category}>{props.Category}</h5>
    {/* <Link
      href={`/projects/details${props.Title}`}
      as={`/projects/${props.Title}`}
      //  params={props.Title}
    >
      <a>
        test
      </a>
    </Link> */}
    <div className={style.description}>
      <div>{props.Text}</div>
    </div>
    <button
      onClick={() => Router.push({
        pathname: `/projects/details${props.Title}`,
        asPath: `/projects/${props.Title}`,
      })
    }
      type="button"
    >
      Read More
    </button>
  </div>
);
export default ProjectCard;

ProjectCard.propTypes = {
  Title: PropTypes.string.isRequired,
  Text: PropTypes.string.isRequired,
  Category: PropTypes.string.isRequired,
};
