

var defaultRequireOnError = requirejs.onError;

requirejs.cardBaseLibBaseUrl = '../';

requirejs.config({
    paths: {
      'angular': '../angular/angular'
    }
});

requirejs.onError = function (error) {
    //it's not easy to see the console on iOS...so pop an alert on error instead.
    alert('require Error:' + error.requireType + ", module: " + (error.requireModules ? error.requireModules.join("\n") : "null") + ", error: " + error.message);
    defaultRequireOnError(error);
};


window.name = "NG_DEFER_BOOTSTRAP!";

requirejs.config({

    baseUrl: './',
    paths: {
        'angular': requirejs.cardBaseLibBaseUrl + 'angular/angular',
        'angular-route': requirejs.cardBaseLibBaseUrl + 'angular-route/angular-route',
        'jquery': requirejs.cardBaseLibBaseUrl + 'jquery/jquery.min',
        'ngDraggable': requirejs.cardBaseLibBaseUrl + 'ngDraggable-master/ngDraggable'
    },
    shim: {

        'angular' : {
            deps: ['jquery'],
            'exports' : 'angular'
        },
        'angular-route': ['angular'],
        'ngDraggable' : {
            deps: ['angular']
        }
    },
    priority: [
        "angular"
    ]
});