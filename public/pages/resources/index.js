import Nav from '../../components/Nav/index.js'
import Footer from '../../components/Footer/index.js'
import Resource from '../../components/Resource/index.js'
import resources from '../../resource-data.js'

export default function ResourcesPage() {
  return (
    <div>
      <Nav page="Links & Resources"/>
        {Object.values(resources).map(resource => (
          <Resource resource={resource} />
        ))}
      <Footer />
    </div>
  );
}