import React, { Component } from 'react';
import nextExpressPage from 'next-express/page';
import { boundMethod } from 'autobind-decorator';
// import posed, { PoseGroup } from 'react-pose';
import posed, { PoseGroup } from 'react-pose';

import style from './style.scss';
import ProjectCard from '../../components/project-card';
import ButtonStyled from '../../components/button-styled';
import { mainProjectCategories } from '../../config';


const result = [
  {
    Text: 'descriptiondescription',
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

// enter: { y: 0, opacity: 1 },
// exit: { y: 50, opacity: 0 }
const PosedProjectCard = posed(ProjectCard)({
  enter: { scale: 1, opacity: 1 },
  exit: { scale: 0.5, opacity: 0, diration: 30 },
});
class Projects extends Component {
  allText = 'All';

  state = {
    showCategory: this.allText,
    projects: result,
  };


  // componentDidMount() {
  //   // this.props.allProjectsPreviews && this.setState({ projects: this.props.allProjectsPreviews });
  //   // this.setState({ projects: this.props.allProjectsPreviews });
  //   console.log('componentDidMount', this.props);
  // }

  // create automaticly by next-express
  // @boundMethod
  // static getInitialProps(props) {
  //   console.log('getInitialProps', props);
  // }

  @boundMethod
  filterActiveProjects(project) {
    const active = this.state.showCategory;
    return active === this.allText || project.Category === active;
  }

  @boundMethod
  handleFilterOnClick(category) {
    this.setState({ showCategory: category });
  }

  render() {
    return (
      <>
        <div>
          <h1 className={style.pageTitle}>Projects</h1>
          <p>Sample Text</p>
        </div>
        <div className={style.buttonContainer}>
          <ButtonStyled
            text="All"
            onClick={this.handleFilterOnClick}
            className={
              this.state.showCategory === this.allText ? style.active : null
            }
          />
          {mainProjectCategories.map((category) => (
            <ButtonStyled
              key={category}
              text={category}
              onClick={this.handleFilterOnClick}
              className={
                this.state.showCategory === category ? style.active : null
              }
            />
          ))}
        </div>
        <div className={style.projectContainer}>
          <PoseGroup>

            {this.state.projects
              .filter(this.filterActiveProjects)
              .map((project) => (
                <PosedProjectCard key={project.Title} {...project} />
              ))}

          </PoseGroup>
        </div>
      </>
    );
  }
}

export default Projects;
