import { extend } from 'flarum/common/extend';
import { components } from '@acpl-mobile-tab';
const { MobileTab, MobileTabItem } = components;

console.log("componentimported")
export default () => {
  console.log("defualt module run")
  extend(MobileTab.prototype, 'items', (items) => {
    // Remove item
    console.log(items.get('tags'))
    items.remove('tags');
    // Add new item
    items.add(
      'categories',
      <MobileTabItem route={app.route('categories')} icon="fas fa-tags" label="Categories" />,
      90
    );

  });
};