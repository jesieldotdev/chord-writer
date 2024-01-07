function Vibrate() {
  if (navigator.vibrate) {
    navigator.vibrate([100]); // Vibe o celular por 500ms
  } else {
    console.log("Vibration API not supported in this browser.");
  }
}

export default Vibrate
