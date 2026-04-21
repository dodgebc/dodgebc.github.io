---
layout: page
permalink: /talks/
title: talks
description:
nav: true
nav_order: 5
---

I find it easier to understand the main point of a project when it is explained to me by a real person. With that in mind, here are a few short talks of mine that were recorded.

---

{% for talk in site.data.talks.talks %}
<div class="mb-5">
  <h4>{{ talk.title }}</h4>
  <p class="text-muted mb-2">{{ talk.venue }}{% if talk.location %}, {{ talk.location }}{% endif %}{% if talk.date %} ({{ talk.date }}){% endif %}</p>
  {% if talk.youtube %}
  <div class="embed-responsive embed-responsive-16by9">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/{{ talk.youtube }}" allowfullscreen></iframe>
  </div>
  {% endif %}
</div>
{% endfor %}

---

More coming soon!