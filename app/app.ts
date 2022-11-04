/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { Application } from '@nativescript/core'
import { awarns } from '@awarns/core';
import { appTasks } from "~/core/tasks";
import { taskGraph } from "~/core/tasks/graph";
import { registerPhoneSensorsPlugin } from "@awarns/phone-sensors";
import { registerWearOSPlugin, WatchSensor } from "@awarns/wear-os";

awarns.init(
  appTasks,
  taskGraph,
  [
    registerPhoneSensorsPlugin({
      enableVibrationOnStart: false,
    }),
    registerWearOSPlugin({
      sensors: [WatchSensor.ACCELEROMETER, WatchSensor.GYROSCOPE],
      enablePlainMessaging: true,
      enableWearCommands: true,
    })
  ]
).then(() => console.log("ALL GOOD!"))
  .catch((e) => console.log(e));

Application.run({ moduleName: 'app-root' })

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
