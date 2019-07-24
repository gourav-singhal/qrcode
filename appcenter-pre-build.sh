if [ -f "$destdir" ]
then
    echo "Overwriting google-services.json file..."
    echo "$GOOGLE-SERVICES-JSON" > "android/app/google-services.json"
fi
