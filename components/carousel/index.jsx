import React, { Component } from 'react';
// import Link from 'next/link';
import PropTypes from 'prop-types';
import { boundMethod } from 'autobind-decorator';
import style from './style.scss';
import Arrow from './components/arrow';
import Slide from './components/slide';
import SlideTitle from './components/slide-title';

export default class Carousel extends Component {
  state = {
    activeSlide: 0,
  }

  @boundMethod
  prevSlide() {
    this.setState((prevState) => ({
      activeSlide: prevState.activeSlide === 0 ?
        this.props.slides.length - 1 :
        prevState.activeSlide - 1,
    }));
  }

  @boundMethod
  nextSlide() {
    this.setState((prevState) => ({
      activeSlide: prevState.activeSlide === this.props.slides.length - 1 ?
        0 :
        prevState.activeSlide + 1,
    }));
  }

  @boundMethod
  addButtons(slides) {
    const results = [];

    slides.forEach((slide, i) => {
      const button =
      this.state.activeSlide === i ?
        (
          <div
            className={style.circleSelected}
            key={slide.title}
          />
        ) : (
          <div
            className={style.circle}
            key={slide.title}
            role="button" 
            onKeyPress={() =>
              (this.setState({ activeSlide: i}))}
            onClick={() => (this.setState({ activeSlide: i}))}
          />
        );
      results.push(button);
    });
    return results;
  }

  render() {
    const divStyle = {
      order: 20,
      flexBasis: 0,
    };

    return (
      <div className={style.container}>
        <h2 className={style.titleContainer}>
          <SlideTitle slide={this.props.slides[this.state.activeSlide]} />
        </h2>
        <div className={style.slideContainer}>
          <div className={style.arrowContainer}>
            <Arrow direction="left" onClick={this.prevSlide} />
            <Arrow direction="right" onClick={this.nextSlide} />
          </div>
          { this.props.slides.map((slide, i) => (
            <Slide
              style={this.state.activeSlide !== i ? divStyle : {}}
              // style={divStyle}
              key={slide.title}
              slide={slide}
            />
          )) }
        </div>
        <div className={style.buttonsContainer}>
          {this.addButtons(this.props.slides)}
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};
