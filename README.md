# RN Music
git clone https://github.com/coolworld2015/rn-music.git
-------------------------------------------------------------------------------------------------
git config --global user.name "coolworld2015"
-------------------------------------------------------------------------------------------------
git config --global user.email "wintermute2015@ukr.net"
-------------------------------------------------------------------------------------------------
npm install -g react-native-cli
-------------------------------------------------------------------------------------------------
react-native init AwesomeProject
-------------------------------------------------------------------------------------------------
react-native run-ios //CMD+D
-------------------------------------------------------------------------------------------------
react-native run-android //CMD+M
-------------------------------------------------------------------------------------------------
react-native run-ios --simulator="iPhone 5"
-------------------------------------------------------------------------------------------------
Сертификаты for Distribution
-------------------------------------------------------------------------------------------------
https://www.diawi.com/ for *.ipa
-------------------------------------------------------------------------------------------------
xCode 8 update
-------------------------------------------------------------------------------------------------
RCTWebSocet -> Apple LLVM 8.0 Custom... -> other warning flags
-------------------------------------------------------------------------------------------------
ANDROID for IOS
-------------------------------------------------------------------------------------------------
echo export "ANDROID_HOME=/Users/ed/Library/Android/sdk" >> ~/.bash_profile
-------------------------------------------------------------------------------------------------
export ANDROID_HOME=/Users/ed/Library/Android/sdk
-------------------------------------------------------------------------------------------------
export PATH=$PATH:$ANDROID_HOME/bin
-------------------------------------------------------------------------------------------------
add VirtualBox
-------------------------------------------------------------------------------------------------
APK -> react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug
-------------------------------------------------------------------------------------------------
APK -> cd android -> ./gradlew assembleDebug
-------------------------------------------------------------------------------------------------
RELEASE -> cd android -> assembleRelease -> \android\app\build\outputs\apk
-------------------------------------------------------------------------------------------------
PIC -> /android/app/src/main/res/mipmap
-------------------------------------------------------------------------------------------------
CONFIG -> android/app ->build.gradle /applicationId + versionName
-------------------------------------------------------------------------------------------------
NAME -> android\app\src\main\res\values\strings
-------------------------------------------------------------------------------------------------
