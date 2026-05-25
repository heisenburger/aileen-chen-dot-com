---
permalink: /terms/
pdf: "Terms and Conditions of Photographic Engagement v2026.pdf"
---

{% assign pdflink = page.pdf | replace: " ", "%20" %}

<style>
  object {
    height: 100dvh;
  }
</style>

<object data="/{{ pdflink }}" width="100%" height="800px" type="application/pdf">
  <p>Your browser does not support PDFs. <a href="/{{ pdflink }}">Download the PDF instead.</a></p>
</object>