/**
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {useState} from 'preact/hooks';
import Resource from '../../components/Resource/index.js'
import resources from '../../resource-data.js'
import Filter from '../../components/Filter/index.js'

export default function ResourcesPage() {
  const [selectedTag, setFilter] = useState(null);

  const tags = new Set();
  resources.forEach(resource => {
    resource.tags.forEach(tag => {
      tags.add(tag);
    })
  });

  const displayResources = (
    selectedTag === null ?
    resources :
    resources.filter(resource => { return resource.tags.includes(selectedTag) })
  );
  
  return (
    <div>
      <Filter tags={Array.from(tags)} selectedTag={selectedTag} setFilter={setFilter} />
      {displayResources.map(resource => (
        <Resource resource={resource} selectedTag={selectedTag} setFilter={setFilter} />
      ))}
    </div>
  );
}