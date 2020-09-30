import { Component } from 'preact'
import Card from '../Card/index.js'
import CardStyle from '../Card/style.module.css'
import style from './style.module.css'

export default class Resource extends Component {
	render() {
    const { url, type, title, tags, pubDate, author, desc } = this.props.resource

	  return (
      <Card
        name={title}
        type={type}
        date={pubDate}
        authorName={author.name}
        authorLink={author.url}
        authorImg={author.image}
        url={url}
        paint={true} //TODO
        properties={true}
        layout={false}
        desc={desc}
        tags={tags}
        type="resource"
      >
       <a class={style.link} href={url}>
         <div class={CardStyle.resourceContainer}>
            <p>{desc && desc}</p>
            <a href={url} class={style.button}>View {type}</a>
          </div>
        </a>
      </Card>
	  )
  }
}