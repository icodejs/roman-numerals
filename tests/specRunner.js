

// Require all the module and set their paths

requirejs.config({
  paths: {
    // script files
    roman: '/js/roman',

    // test files
    romanSpec : '/tests/spec/romanSpec'

  }
});


/*
  Include all of the tests that you want to run

 */
requirejs(['romanSpec'], function (romanSpec) {

  // you dont have to touch any of this for now. it will just work
  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();
  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function(spec) {
    return htmlReporter.specFilter(spec);
  };

  jasmineEnv.execute();
});
