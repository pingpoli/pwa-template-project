var serviceWorkerRegistration = null;

var app = new App();

window.addEventListener('click', e => {
console.log(window.deferredPrompt, e);
})
  

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
    window.addEventListener( "beforeinstallprompt" , ( event ) => {
    // Prevent the mini-infobar from appearing on mobile.
        event.preventDefault();
        console.log('👍', 'beforeinstallprompt', event);
        // Stash the event so it can be triggered later.
        window.deferredPrompt = event;
        event.userChoice.then( ( choiceResult ) => {
            console.log( choiceResult.outcome ); // either "accepted" or "dismissed"
        });
    });

    app.start();
}
