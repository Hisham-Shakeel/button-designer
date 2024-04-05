// Button Designer Demo

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let bgHexColor = document.getElementById("color-in").value;
  let btnText = document.getElementById("text-in").value;

  // Convert Hex Color to RGB
  let red = +parseInt(bgHexColor.substring(1, 3), 16);
  let green = +parseInt(bgHexColor.substring(3, 5), 16);
  let blue = +parseInt(bgHexColor.substring(5, 7), 16);

  // Verify Inputs & Conversions in Console
  console.log(`bgHexColor: ${bgHexColor}`);
  console.log(`btnText: ${btnText}`);
  console.log(`red: ${red}`);
  console.log(`green: ${green}`);
  console.log(`blue: ${blue}`);

  // Process - brightness calculation
  let brightness = Math.sqrt((red * 0.299) ** 2 + (green * 0.587) ** 2 + (blue * 0.114) ** 2);

  // Output
  document.getElementById("demo-btn").innerHTML = btnText;
  document.getElementById("demo-btn").style.backgroundColor = bgHexColor;
  if (brightness <= 49) {
    document.getElementById("demo-btn").style.color = "white";
  } else if (brightness >= 50) {
    document.getElementById("demo-btn").style.color = "black";
  }
}