const GTM = `<script>
  dataLayer = [{
    pageType: 'splash-pages',
    pageLanguage: '{PAGE_LANGUAGE}',
    pageRegion: '{PAGE_REGION}',
  }];
</script>
<script src="//www.googletagmanager.com/gtm.js?id={TAG_ID}" async></script>
<script>
  (function(w,l){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});})(window, 'dataLayer');
</script>`;

export default GTM;
