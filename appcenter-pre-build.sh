if [ "$APPCENTER_BRANCH" == "master" ];
then
    # Update google services json file before the build
    echo $GOOGLE-SERVICES-JSON > android/app/google-services.json
fi
