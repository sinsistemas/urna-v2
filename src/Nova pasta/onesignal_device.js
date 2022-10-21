  document.addEventListener('deviceready', OneSignalInit, false);

  function OneSignalInit() {

      // Uncomment to set OneSignal device logging to VERBOSE

      // window.plugins.OneSignal.setLogLevel(6, 0);



      // NOTE: Update the setAppId value below with your OneSignal AppId.

      window.plugins.OneSignal.setAppId("aa76d9b3-1d0f-442f-8b7c-8d578b970716");





      window.plugins.OneSignal.setNotificationOpenedHandler(function(jsonData) {

          console.log('ok ------ 01 -----: ' + JSON.stringify(jsonData));

      });



      window.plugins.OneSignal.getDeviceState(function(stateChanges) {

          console.log('ok --------02 -----: ' + JSON.stringify(stateChanges));

      });



      // Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal

      // Ionic 5 Capacitor may need to use (window as any).plugins.OneSignal

      window.plugins.OneSignal.addSubscriptionObserver(function(state) {

          if (!state.from.subscribed && state.to.subscribed) {

              console.log("Subscribed for OneSignal push notifications!")

              // get player ID

              state.to.userId

          }

          localStorage.removeItem('user_token');

          localStorage.setItem('user_token', JSON.stringify(state.to.userId));

          console.log("Push Subscription state changed: " + JSON.stringify(state.to.userId));

      });





      // iOS - Prompts the user for notification permissions.

      //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.

      //alert(window.plugins.OneSignal.getPushToken());

      window.plugins.OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {

          console.log("User accepted notifications: " + accepted);

          // console(window.plugins.OneSignal.getPushToken());

      });

  }