require.config({
    baseUrl: "assets/js",    
    paths: {
        'jquery': 'vendor/jquery/jquery',
        'bootstrap': 'vendor/bootstrap/bootstrap.min',
    },
    shim: {
        'jquery': { exports: '$' }, 
        'bootstrap': ['jquery']
    },
    deps: ['core']
});
