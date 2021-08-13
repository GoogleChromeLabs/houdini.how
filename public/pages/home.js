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

import Demo from '../components/Demo/index.js'
import Filter from '../components/Filter/index.js'
import FilterRenderer from '../components/FilterRenderer/index.js'
import NoItems from '../components/NoItems/index.js'
import workletData from '../worklet-data.js'

const worklets = Object.values(workletData);

export default class Home extends Filter {
  render() {
    const filteredItems = this.filterList(worklets);
    return (
      <div>
        <FilterRenderer
          onFilterTagClick={this.onFilterTagClick.bind(this)}
          isFilterTagSelected={this.isFilterTagSelected.bind(this)}
        />
        {
          filteredItems.length ? filteredItems.map(worklet => (
            <Demo worklet={worklet}/>
          )) : <NoItems type={'Worklets'}/>
        }
      </div>
    );
  }
}
