Package.describe({
  name: 'elmarti:highcharts',
  version: '0.1.2',
  // Brief, one-line summary of the package.
  summary: 'Highcharts with rerender on window resize option',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/elmarti/meteor-highcharts',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.use(['templating'], 'client');
  api.addFiles(['lib/highcharts.js', 'client.html', 'client.js'], 'client');
  api.export(['Highcharts', 'highcharts'], 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('elmarti:peerjs');
  api.addFiles('justGage-tests.js');
  api.export(["JustGage"], "client");
});
