import CardStyle from '../Card/style.module.css'
import chrome from 'url:./logos/chrome.svg'
import edge from 'url:./logos/edge.svg'
import firefox from 'url:./logos/firefox.svg'
import opera from 'url:./logos/opera.svg'
import safari from 'url:./logos/safari.svg'
import samsung from 'url:./logos/samsung.svg'

const logos = {
  chrome,
  edge,
  firefox,
  opera,
  safari,
  samsung
}

const BROWSERS = Object.keys(logos)

export default function Compat({ browsers, versions }) {
  return (
    <ul class={CardStyle.compat}>
      {BROWSERS.map(browser => {
        let supported = browsers.includes(browser)
        let version = versions[browser]
        return (
          <Browser
            browser={browser}
            version={version}
            supported={supported}
            polyfillVersion={versions.polyfill}
          />
        )
      })}
    </ul>
  )
}

function Browser({ browser, version, supported, polyfillVersion }) {
  let name = browser[0].toUpperCase() + browser.slice(1)
  let cl = CardStyle.unsupported
  let tip = `Not supported in ${name}`
  if (version === 'WIP') {
    cl = CardStyle.canary
    tip = `Supported in recent canary or preview releases of ${name}`
  }
  else if (supported) {
    cl = CardStyle.supported;
    tip = `Supported in ${name} version ${version}+`
  }
  else if (polyfillVersion) {
    cl = CardStyle.polyfilled
    supported = true
    version = polyfillVersion
    tip = `Supported in ${name} when using css-paint-polyfill`
  }
  else {
    version = '–';
  }
  return (
    <li class={cl} title={tip}>
      <img src={logos[browser]} />
      <h6>{version}</h6>
    </li>
  )
}
