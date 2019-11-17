#!/usr/bin/env bash

cd android
./gradlew assembleRelease &&
apksigner sign --ks keystores/wahoo.jks --out app/build/outputs/apk/release/wahoo.apk app/build/outputs/apk/release/app-release-unsigned.apk
