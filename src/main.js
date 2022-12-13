var serviceWorkerRegistration = null;

var app = new App();



function init()
{
    // service worker
    if ( "serviceWorker" in navigator ) 
    {
        // register the service worker
        navigator.serviceWorker.register( "sw.js" ).then( ( reg ) =>
        {
            console.log( "service worker has been registered successfully" );
            serviceWorkerRegistration = reg;
        }
        ).catch( ( error ) =>
        {
            console.log( "failed to register service worker" , error );
        });
    }

    // check whether in online or offline mode
    if ( navigator.onLine )
    {
        console.log( "online mode" );
    }
    else 
    {
        console.log( "offline mode" );
    }

    // event listener when going online
    window.addEventListener( "online" , ( event ) =>
    {
        console.log( "online event" );
    });

    // event listener when going offline
    window.addEventListener( "offline" , ( event ) =>
    {
        console.log( "offline event" );
    });

    // app install banner -- may not work on every platform
    window.addEventListener( "beforeinstallprompt" , ( event ) =>
    {
        event.userChoice.then( ( choiceResult ) =>
        {
            console.log( choiceResult.outcome ); // either "accepted" or "dismissed"
        });
    });

    app.start();
}