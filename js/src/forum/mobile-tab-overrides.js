import { components } from '@acpl-mobile-tab';
import { extend } from 'flarum/common/extend';

const { MobileTab, MobileTabItem } = components;

console.log("MOBILE TAB THING RUNNING")


export default () => {
  extend(MobileTab.prototype, 'items', (items) => {
    // Add new item
    items.add(
      'categories',
      <MobileTabItem href={app.route('categories')} icon="fas fa-label" label={app.translator.trans('my-ext.forum.my-item')} />,
      90
    );

    // Remove item
    items.remove('tags');
  });
};