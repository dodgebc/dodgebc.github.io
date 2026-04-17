---
layout: page
permalink: /repositories/
title: code
description:
nav: true
nav_order: 4
---

{% if site.data.repositories.github_users %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>
{% endfor %}
{% endif %}

{% endif %}

{% if site.data.code.repos %}
<div class="container p-0">
  {% for item in site.data.code.repos %}
    {% unless forloop.first %}<hr>{% endunless %}
    <div class="row align-items-start mb-4">
      <div class="col-md-5">
        {% include repository/repo.liquid repository=item.repository %}
      </div>
      <div class="col-md-7">
        <div class="font-weight-light">{{ item.description | markdownify }}</div>
      </div>
    </div>
  {% endfor %}
</div>
{% endif %}
