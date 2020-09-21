import Nav from '../../components/Nav/index.js'
import Resource from '../../components/Resource/index.js'
import resources from '../../resource-data.js'

export default function ResourcesPage() {
  return (
    <div>
      <Nav page="Links & Resources"/>
      <h2>Resources</h2>
      {Object.values(resources).map(resource => (
        <Resource resource={resource} />
      ))}
      
    </div>
  );
}