const loadGoogleMapsScript = (callback: () => void) => {
  const existingScript = document.querySelector(
    'script[src*="maps.googleapis.com"]'
  );
  if (existingScript) {
    callback();
    return;
  }

  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  if (!googleMapsApiKey) {
    console.error("Google Maps API key is missing.");
    return;
  }

  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
  script.async = true;
  script.defer = true;
  script.onload = callback;
  document.head.appendChild(script);
};
