---
layout: page
permalink: /contact-us/
title: Contact Us
description: We're always happy to hear from you.
nav: true
nav_order: 7

---
<h2><i class = "ti ti-mail"/> Email</h2>
<!-- yong-wang [at] ntu.edu.sg -->
<div style="margin-bottom: 1rem;">
  <!-- Email with copy functionality -->
  <a href="mailto:yong-wang@ntu.edu.sg" 
     onclick="copyToClipboard('yong-wang@ntu.edu.sg')" 
     class="email-link">
    yong-wang[at]ntu.edu.sg
  </a>
  <span class="copy-status" style="display: none; font-size: 0.85rem; margin-left: 0.5rem; color: green;">
    Copied to clipboard!
  </span>
</div>
<h2><i class = "ti ti-home"/> Address</h2>
Visualization and Intelligent Data Analytics Lab, <br>College of Computing and Data Science, <br>Nanyang Technological University,<br>Nanyang Avenue, <br>Singapore 639798
<h2><i class = "ti ti-map-pin"/> Map</h2>

<div class="embed-responsive">
<iframe 
    loading="lazy" 
    allowfullscreen 
    src="https://www.google.com/maps/embed/v1/place?q=College%20of%20Computing%20and%20Data%20Science%2C%20Nanyang%20Technological%20University%2C%20Block%20N4%20%2302a-34%20Nanyang%20Avenue%2C%20Singapore%20639798&key=AIzaSyAEOQp8sFSGWDAjcOXhjvnWvFxiofKl-58">
</iframe> 
</div>
<div class="mt-5">
    <p><i class="ti ti-map-route"/> Click <a href="https://maps.ntu.edu.sg/#/ntu/d386ffa80e4e46f286d17f08/poi/details/3e429677e3a0435683fcc67c">here</a> for the NTU Campus Map.</p>
</div>

<style>
.embed-responsive {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
}

/* Email link styling */
.email-link {
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
}

.email-link:hover {
  text-decoration: underline;
}

</style>


<script>
/* Copy email to clipboard */
function copyToClipboard(email) {
  navigator.clipboard.writeText(email).then(() => {
    // Show a "Copied!" message
    const copyStatus = document.querySelector('.copy-status');
    copyStatus.style.display = 'inline';
    
    // Hide the message after 2 seconds
    setTimeout(() => {
      copyStatus.style.display = 'none';
    }, 2000);
  }).catch(err => {
    console.error('Failed to copy email: ', err);
  });
}
</script>