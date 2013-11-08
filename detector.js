/**
 * Chrome AppSniffer
 *
 * Detect apps run on current page and send back to background page.
 * Some part of this script was refered from Wappalyzer Firefox Addon.
 *
 * @author Bao Nguyen <contact@nqbao.com>
 * @license GPLv3
 **/

(function () {
  var _apps = {};
  var doc = document.documentElement;
  var name;
  var r;

  // 2: detect by script tags
  var scripts = doc.getElementsByTagName("script");

  var script_tests = {
'HubSpot': /js.hubspot.com/analytics/
    'Google Analytics': /google-analytics.com\/(ga|urchin).js/i,


  // convert to array
  var jsonString = JSON.stringify(_apps);
  // send back to background page
  var meta = document.getElementById('chromesniffer_meta');
  meta.content = jsonString;

  //Notify Background Page
  var done = document.createEvent('Event');
  done.initEvent('ready', true, true);
  meta.dispatchEvent(done);
})();
