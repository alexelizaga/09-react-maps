export const getUserLocation = async (): Promise<[number, number]> => {

    return new Promise( (resolve, reject ) => {

        navigator.geolocation.getCurrentPosition( ({ coords }) => {
            resolve([coords.latitude, coords.longitude]);
        } , (error) => {
            alert('Unable to get your location');
            console.log(error);
            reject(error);
        } , {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        } );

    });
}