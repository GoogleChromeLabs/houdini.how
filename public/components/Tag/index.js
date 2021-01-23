import {Component} from 'preact'
import style from './style.module.css'

export default class Tag extends Component {
  render(props) {
    if (props.label === 'paint') {
      return (
        <li class={`${style.tag} ${props.selected === false ? style.paint : style['paint-active']}`}>
          <a href="#" onClick={() => {props.setFilter('paint')}}>Paint</a>
        </li>
      )
    } else if (props.label === 'properties and values') {
      return (
        <li class={`${style.tag} ${props.selected === false ? style.props : style['props-active']}`}>
          <a href="#" onClick={() => {props.setFilter('properties and values')}}>Properties & Values</a>
        </li>
      )
    } else if (props.label === 'typed object model') {
      return (
        <li class={`${style.tag} ${props.selected === false ? style.typed : style['typed-active']}`}>
          <a href="#" onClick={() => {props.setFilter('typed object model')}}>Typed Object Model</a>
        </li>
      )
    } else if (props.label === 'layout') {
      return (
        <li class={`${style.tag} ${props.selected === false ? style.layout : style['layout-active']}`}>
          <a href="#" onClick={() => {props.setFilter('layout')}}>Layout</a>
        </li>
      )
    } else if (props.label === 'animation') {
      return (
        <li class={`${style.tag} ${props.selected === false ? style.animation : style['animation-active']}`}>
          <a href="#" onClick={() => {props.setFilter('animation')}}>Animation</a>
        </li>
      )
    }
    else return (<li></li>);
  }
}
