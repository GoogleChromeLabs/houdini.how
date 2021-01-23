import {Component} from 'preact'
import Tag from '../Tag/index.js'
import style from './style.module.css'

export default class Filter extends Component {
  render(props) {
    return (
      <div class={style.tags}>
        <ul>
          {
            props.selectedTag !== null && <li class={style.reset} onClick={() => {props.setFilter(null)}}>X</li>
          }
          {props.tags.map(tag => 
            <Tag label={tag} setFilter={props.setFilter} selected={tag === props.selectedTag}/>
          )}
        </ul>
      </div>
    )
  }
}