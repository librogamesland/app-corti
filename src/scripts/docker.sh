#!/bin/bash
cd "$(dirname "$0")/../../"
export TMP_DIR="/tmp/cache"

mkdir -p "$TMP_DIR/home"
mkdir -p "$TMP_DIR/gradle"
mkdir -p "$TMP_DIR/node_modules"

export HOME="$TMP_DIR/home"
export GRADLE_USER_HOME="$TMP_DIR/gradle"


initApp (){
  echo '{
  "appId": "org.my.app.waki",
  "appName": "My App",
  "webDir": "app-web",
  "bundledWebRuntime": false
}' > "./capacitor.config.json"
}



echo "Magebook app generator
======================"

if [ ! -d "node_modules" ]; then
  echo "Installing npm missing dependencies..."
  if ! npm i --cache "$TMP_DIR/node_modules"; then
    rm -rf node_modules
    echo "ERROR!"
    exit
  fi

  echo "

Done! Everything installed!
  
"
fi


PS3='Choose script: '
scripts=("docker" "debug" "build-web" "build-android" "Quit")
select fav in "${scripts[@]}"; do
    case $fav in
        "docker")
            bash
            exit
            ;;
        "debug")
            npm run dev
            exit
            ;;
        "build-web")
            npm run build
            exit
            ;;
        "build-android")
            npm run build
            [ -f "./capacitor.config.json" ] || initApp
            if [ ! -d "android" ]; then
              yes "n" | npx cap add android
              # Set only vertical mode
              sed -i '16 i android:screenOrientation="portrait"' android/app/src/main/AndroidManifest.xml
            fi

            yes "y" | /opt/android/cmdline-tools/bin/sdkmanager --licenses --sdk_root="/opt/android"
            yes "n" | npx cap sync
            
            npm run icons
            cd ./android/
            ./gradlew build
            exit
          ;;
        "Quit")
            exit
            ;;
        *) echo "invalid option $REPLY";;
    esac
done