async function copyText() {
  const textContent = document.getElementById("email").textContent; // Get the text content

  try {
    await navigator.clipboard.writeText(textContent);

    // Show a success message
    const message = document.getElementById("copyConfirmation");
    message.style.opacity = "1";

    // Hide the message after 1.5 seconds
    setTimeout(() => {
      message.style.opacity = "0";
    }, 1800);

  } catch (err) {
    // Alert the user if the copy action fails
    console.error('Failed to copy text: ', err);
    alert("Failed to copy text.");
  }
}
