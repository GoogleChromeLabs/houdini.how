import Resource from '../../components/Resource/index.js'
import resources from '../../resource-data.js'

export default function ResourcesPage() {
  return (
    <div>
      {resources.map(resource => (
        <Resource resource={resource} />
      ))}
    </div>
  );
}