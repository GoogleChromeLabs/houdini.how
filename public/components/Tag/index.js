import {Component} from "preact";
import style from "./style.module.css";

const APIS = [
  { label: "paint", style: "paint", text: "Paint" },
  {
    label: "properties and values",
    style: "props",
    text: "Properties & Values",
  },
  { label: "typed object model", style: "typed", text: "Typed Object Model" },
  { label: "layout", style: "layout", text: "Layout" },
  { label: "animation", style: "animation", text: "Animation" },
];

export default class Tag extends Component {
  render(props) {
    const TAG = APIS.map((api) =>
      api.label === props.label ? api : null
    ).filter((api) => api != undefined)[0];

    return (
      <li
        class={`${style.tag} ${
          props.selected === false
            ? style[TAG.style]
            : style[`${TAG.style}-active`]
        }`}
      >
        <a
          href="javascript:void(0)"
          onClick={(e) => {
            e.preventDefault();
            props.setFilter(TAG.label);
          }}
          title={TAG.text}
        >
          {TAG.text}
        </a>
      </li>
    );
  }
}