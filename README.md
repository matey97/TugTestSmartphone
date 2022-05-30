# TUG Test Smartphone

[![DOI](https://zenodo.org/badge/449251517.svg)](https://zenodo.org/badge/latestdoi/449251517)

This NativeScript application aims to automate the obtaining of results from the execution of the TUG test.

The application obtains accelerometer and gyroscope data collected from a companion WearOS application,
[TUG Test Smartwatch](https://github.com/matey97/TugTestSmartwatch), or from the smartphone itself, and after processing the received data uses it in
a machine learning model to estimate the current activity the user is doing. With these estimations, the application
is able to detect the execution of the test (once manually started from the smartwatch application or from the smartphone) and its ending,
computing then the results of the test. The computed results are:

- Total duration of the test.
- Duration of each sub-phase of the test:
  - Stand up.
  - First walk.
  - First turn.
  - Second walk.
  - Second turn.
  - Sit down.

When using the smartphone as the sensing device, the application has two functioning modes (as in [TUG Test Smartwatch](https://github.com/matey97/TugTestSmartwatch)):
- TUG mode: the collected sensor data is used to estimate the current activity of the user while performing the TUG test.
- Collection mode: sensor data is collected and stored in a file.

This application is part of the system developed and described in the [AIME 2022](https://aime22.aimedicine.info) conference paper
*Instrumented Timed Up and Go test using inertial sensors from consumer wearable devices*.

## Requirements

The usage of this application has some hardware and software requirements:

### Hardware requirements
- Android smartphone with Android 6.0 (Marshmallow) or superior.
- Android smartwatch with Wear OS 2.0 or superior (to use smartwatch data).
  - Devices **must be paired**: install the [Smartwatch Wear OS by Google](https://play.google.com/store/apps/details?id=com.google.android.wearable.app&hl=es&gl=US)
  app in the smartphone and go through the pairing process.

### Software requirements
- NativeScript CLI (see [Install and configure NativeScript](#install-and-configure-nativescript))
- If desired, the paired smartwatch must have installed the [TUG Test Smartwatch](https://github.com/matey97/TugTestSmartwatch).

## Environment setup

### Clone repository
Download this repository as a ZIP and extract it or clone it executing:

```bash
git clone https://github.com/matey97/TugTestSmartphone.git
```

### Install and configure NativeScript
The application has been developed used NativeScript, so you need to download its tools to build and run the application (if not installed already):
- [Instructions for Windows](https://docs.nativescript.org/environment-setup.html#windows-android).
- [Instructions for Mac](https://docs.nativescript.org/environment-setup.html#macos-android).
- [Instructions for Linux](https://docs.nativescript.org/environment-setup.html#linux-android).


## Deploy application
- Connect your Android smartphone (with Developer Options > USB Debugging enabled) through USB to your computer
- Open a command line interface in the project folder and run:

```bash
ns run android
```

Once the command has finished, the application should be installed in your smartphone.

### Collection mode
The application stores accelerometer and gyroscope data into a file. The collected data could then be used for analysis
or to train machine learning models. The data is stored in `json` format, in batches of 50 samples, as following:

```json
[
  {
    "type": "ACCELEROMETER",
    "records": [
      {"x": -0.08614161610603333,"y": 0.16749759018421173,"z": 9.92124080657959, "deviceId":"9e9fd8b8", "timestamp":1653903224072 },
      ...
    ] // 50 samples
  },
  {
    "type": "GYROSCOPE",
    "records": [
      {"x": -0.0004581354442052543, "y": -0.00030542362947016954, "z": -0.0007635590736754239, "deviceId": "9e9fd8b8", "timestamp": 1653903224167}
      ...
    ] // 50 samples
  },
  ...
]
```

The files are stored in the application internal memory, so they are only
accessible through specific tools. It is recommended to use [Android Studio's Device File Explorer](https://developer.android.com/studio/debug/device-file-explorer).


### TUG mode
The collected sensor data is used to estimate current user's activity in the context of the TUG test. After the user finished
the test, the application computes the duration of each activity performed during the test.

#### Activity recognition
The activity estimation is carried out by a machine learning model. The application has 4 embedded machine learning models:
- [CNN Smartphone Actions Classifier](app/models/local-device/cnn): convolutional machine learning model for activity recognition for data coming from the smartphone sensors.
- [MLP Smartphone Actions Classifier](app/models/local-device/mlp): multi layered perceptron machine learning model for activity recognition for data coming from the smartphone sensors.
- [CNN Smartwatch Actions Classifier](app/models/paired-device/cnn): convolutional machine learning model for activity recognition for data coming from the paired smartwatch sensors.
- [MLP Smartwatch Actions Classifier](app/models/paired-device/mlp): multi layered perceptron machine learning model for activity recognition for data coming from the paired smartwatch sensors.

The model to use can be changed from the settings of the application (see [Screenshots>Settings](#settings)).

#### Add your models
You can add new TensorFlow Lite models trained with your own data. The models must be capable of detecting the actions
performed during the test, i.e., sit, standing, walking, turning and sitting.

The only restriction resides in the architecture of the models. For now,
only CNN and MLP architectures are supported. In addition, these architectures have the following requirements:
- CNN:
  - Input layer: 6 x 50. 50 samples for each axis of accelerometer (3) and gyroscope (3).
  - Output layer: 1 x 5. The probability value of each activity of the test.
  - Metadata: data to identify the model (name, author, version) and the **labels for the output layer** as an [associated file](https://www.tensorflow.org/lite/models/convert/metadata#pack_the_associated_files).
- MLP:
  - Input layer: 1 x 47. Features extracted from raw data. The feature extraction code can be found [here](app/core/recognition/recognizer/mlp/features/index.ts).
  Contact us for more details about the features and their extraction.
  - Output layer: 1 x 5. The probability value of each activity of the test.
  - Metadata: data to identify the model (name, author, version) and the **labels for the output layer** as an [associated file](https://www.tensorflow.org/lite/models/convert/metadata#pack_the_associated_files).

> **Note:** it's important that in the associated file, the activity labels must have the following names:
> SIT, STANDING, WALKING, TURNING and SITTING.
>
> The importance of the labels file is to map the i<sub>th</sub> output of the model with the i<sub>th</sub> label.

Once ready, the models new models can be added in `app/models/`, in the folder of the corresponding architecture.

> **Note:** if you have modified the models' folder, and you have previously compiled the application, run `ns clean` before executing `ns run android` again.

### Screenshots

#### Main view
The application shows a list with the TUG executions done:

![TUG list](screenshots/sp_list.png)


#### Detail view
You can tap any execution to see its detailed results:

![TUG detail](screenshots/sp_detail.jpg)


#### Settings
The application settings allow you to change the model to use for activity recognition during TUG mode, to enable
GPU acceleration (useful when using complex models), and to change the countdown value before the local device starts the
data collection when the user taps the start button.

![App settings](screenshots/sp_settings.png)

## License

See [LICENSE](./LICENSE).


