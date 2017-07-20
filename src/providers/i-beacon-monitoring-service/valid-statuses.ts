const validStatuses = [
    'AuthorizationStatusNotDetermined',
    'AuthorizationStatusRestricted',
    'AuthorizationStatusDenied',
    'AuthorizationStatusAuthorized',
    'AuthorizationStatusAuthorizedWhenInUse',
    'AuthorizationStatusAuthorizedAlways'
];

export const isValidBluetoothStatus = (status: string) => {
    return validStatuses.indexOf(status) !== -1;
};