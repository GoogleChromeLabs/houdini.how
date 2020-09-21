import { Component } from 'preact'
import Card from '../Card/index.js'
import CardStyle from '../Card/style.module.css'
import style from './style.module.css'

export default class Resource extends Component {
	render() {
    const { url, type, title, subtitle, pubDate, author, desc } = this.props.resource

	  return (
      <Card
        name={title}
        subtitle={subtitle}
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
      >
        <div class={CardStyle.resourceContainer}>
          <h3>{subtitle}</h3>
          <p>{desc && desc}</p>
          <button class={style.button}>View {type}</button>
        </div>
      </Card>
	  )
  }
}