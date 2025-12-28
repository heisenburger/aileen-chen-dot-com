async function copyText() {
  const copyButton = document.getElementById("copyEmail");
  const textContent = document.getElementById("email").textContent; // Get the text content to copy

  try {
    await navigator.clipboard.writeText(textContent);

    // Show a success message
    const message = document.getElementById("copyConfirmation");
    copyButton.classList.toggle("hideText");
    message.style.display = "block";

    // Hide the message after 2 seconds
    setTimeout(() => {
      copyButton.classList.toggle("hideText");
      message.style.display = "none";
    }, 2000);

  } catch (err) {
    // Alert the user if the copy action fails
    console.error('Failed to copy text: ', err);
    alert("Failed to copy text.");
  }
}
