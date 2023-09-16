import mobileTabOverrides from "./mobile-tab-overrides"; 
app.initializers.add('webbinaro-tookit', () => {
  console.log('[webbinaro/flarum-tookit] Hello, forum!');
  mobileTabOverrides();
});
