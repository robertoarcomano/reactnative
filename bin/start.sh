#!/bin/bash
## Delete node_modules
rm node_modules/* -rf

## Reinstall pkgs
npm install

## Reset cache
rm -rf /tmp/metro-cache

## Starting Metro
npx react-native start
