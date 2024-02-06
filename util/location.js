const GOOGLE_MAPS_API = "https://maps.googleapis.com/maps/apigeocode/json"; // Google Maps API URL(falsy)

export function getMapPreview(lat, lng) {
  const imagePreview = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${lat},${lng}&key=${GOOGLE_MAPS_API_KEY}`;
    return imagePreview;
}
