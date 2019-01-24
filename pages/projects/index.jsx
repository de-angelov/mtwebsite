import React, { Component } from 'react';
import nextExpressPage from 'next-express/page';
import { boundMethod } from 'autobind-decorator';
import ProjectCard from '../../components/project-card';
import ButtonStyled from '../../components/button-styled';
import style from './style.scss';
import { mainProjectCategories } from '../../config';

class Projects extends Component {
  allText = 'All';

  state = {
    showCategory: this.allText,
    projects: [],
  }

  componentDidMount() {
    this.setState({ projects: this.props.allProjectsPreviews });
    console.log('componentDidMount', this.props);
  }

  // @boundMethod
  // getInitialProps(props) {
  //   console.log('getInitialProps', props);
  // }

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

export default nextExpressPage(Projects);
