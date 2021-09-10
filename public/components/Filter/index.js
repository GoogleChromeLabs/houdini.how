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

import {Component} from 'preact';
import {validTags} from '../../components/Tags';

export default class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Selected all tags by default.
      selectedFilters: Object.keys(validTags)
    };
  }

  onFilterTagClick(tag) {
    const {selectedFilters = []} = this.state;
    if (selectedFilters.includes(tag)) {
      this.setState({
        selectedFilters: [...(selectedFilters).filter((filter) => filter !== tag)]
      })
    } else {
      this.setState({
        selectedFilters: [...selectedFilters, tag]
      })
    }
  }

  isFilterTagSelected(tag) {
    const {selectedFilters = []} = this.state;
    return selectedFilters.includes(tag)
  }

  filterList(list) {
    const {selectedFilters} = this.state;
    return list.filter(({tags}) => {
      return selectedFilters.some((filter) => tags.includes(filter));
    });
  }

  render(props) {
    return <div>
      {props.children}
    </div>
  }
}
