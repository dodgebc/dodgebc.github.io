---
layout: page
permalink: /papers/
title: papers
description:
nav: true
nav_order: 2
---

<div class="social mb-4">
  <div class="contact-icons">
    <a href="{{ site.data.socials.custom_social.url }}" title="{{ site.data.socials.custom_social.title }}" target="_blank" rel="noopener noreferrer"><i class="{{ site.data.socials.custom_social.logo }}"></i></a>
    <a href="{{ site.data.socials.nasa_ads.url }}" title="{{ site.data.socials.nasa_ads.title }}" target="_blank" rel="noopener noreferrer"><i class="{{ site.data.socials.nasa_ads.logo }}"></i></a>
    <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}" title="Google Scholar" target="_blank" rel="noopener noreferrer"><i class="ai ai-google-scholar"></i></a>
    <a href="https://orcid.org/{{ site.data.socials.orcid_id }}" title="ORCID" target="_blank" rel="noopener noreferrer"><i class="ai ai-orcid"></i></a>
  </div>
</div>

<div class="publications">

{% bibliography %}

</div>
