# TUG Test Smartphone

This NativeScript application aims to automate the obtaining of results from the execution of the TUG test.

The application receives accelerometer and gyroscope data collected from a companion WearOS application,
[TUG Test Smartwatch](https://github.com/matey97/TugTestSmartwatch), and after processing the received data uses it in
a machine learning model to estimate the current activity the user is doing. With these estimations, the application
is able to detect the execution of the test (once manually started from the smartwatch application) and its ending,
computing then the results of the test. The computed results are:

- Total duration of the test.
- Duration of each sub-phase of the test:
    - Stand up.
    - First walk.
    - First turn.
    - Second walk.
    - Second turn.
    - Sit down.

## Usage requirements

- Android smartphone.
- WearOs smartwatch paired through Bluetooth and running the [TUG Test Smartwatch](https://github.com/matey97/TugTestSmartwatch) application.
- A machine learning model trained to detect the activities executed during the test: sitting, stand up, walk, turn and sit down.
The application requires a TensorFlow Lite model with its labels embedded in an external file, which is downloaded from [Firebase Custom ML](https://firebase.google.com/docs/ml/use-custom-models).


## License

See [LICENSE](./LICENSE).


