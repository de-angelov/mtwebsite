import React, { Component } from 'react';
import { boundMethod } from 'autobind-decorator';
import ProjectCard from '../../components/project-card';
import ButtonStyled from '../../components/button-styled';
import style from './style.scss';
import { mainProjectCategories } from '../../config';

const placeholder = [
  {
    Text: `'descriptiondescription'
    Text: 'descriptiondescription',
    Text: 'descriptiondescription',
    Text: 'descriptiondescription',
    Text: 'descriptiondescription',
    Text: 'descriptiondescription',
    Text: 'descriptiondescription',
    Text: 'descriptiondescription',
    Text: 'descriptiondescription',
    `,
    Category: 'Architecture',
    Title: 'Arch Project',
    Img: 'google bg',
  },
  {
    Text: 'description',
    Category: 'Architecture',
    Title: 'Arch Project2',
    Img: 'google bg',
  },
  {
    Text: 'description',
    Category: 'Landscape',
    Title: 'Landscape Project',
    Img: 'google bg',
  },
];

export default class Projects extends Component {
  allText = 'All';

  state= {
    showCategory: this.allText,
    projects: [],
  }

  componentDidMount() {
    console.log('componentDidMount', placeholder);
    this.setState({ projects: placeholder });
  }

  @boundMethod
  getInitialProps() {
    console.log('getInitialProps', this);
  }

  @boundMethod
  filterActiveProjects(project) {
    const active = this.state.showCategory;
    return (active === this.allText || project.Category === active);
  }

  @boundMethod
  handleFilterOnClick(category) {
    this.setState({ showCategory: category });
  }

  render() {
    return (<>
      <div>
        <h1 className={style.pageTitle}>Projects</h1>
        <p>Sample Text</p>
      </div>
      <div className={style.buttonContainer}>
        <ButtonStyled
          text="All"
          onClick={this.handleFilterOnClick}
          className={this.state.showCategory === this.allText ? style.active : null}
        />
        {mainProjectCategories
          .map((category) => (
            <ButtonStyled
              key={category}
              text={category}
              onClick={this.handleFilterOnClick}
              className={this.state.showCategory === category ? style.active : null}
            />
          ))}
      </div>
      <div className={style.projectContainer}>
        {this.state.projects
          .filter(this.filterActiveProjects)
          .map((project) => <ProjectCard key={project.Title} {...project} />)}
      </div>
    </>);
  }
}
