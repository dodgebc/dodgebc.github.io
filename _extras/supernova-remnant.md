---
layout: distill
title: 3D Supernova Remnant

img: assets/img/extras/snr-signal.png
video: assets/video/animation_256.mp4
importance: 1
bibliography: snr-3d.bib
---

What happens if you take a 2D image of a supernova remnant and deproject it in 3D using a Gaussian process prior?

<div class="row justify-content-center align-items-center mb-4">
  <div class="col-sm-5">
    {% include figure.liquid path="assets/img/extras/snr-signal.png" class="img-fluid rounded" %}
  </div>
  <div class="col-auto text-center" style="font-size: 2.5rem; line-height: 1;">
    &rarr;
  </div>
  <div class="col-sm-5">
    <video width="100%" autoplay loop muted playsinline>
      <source src="/assets/video/animation_256.mp4" type="video/mp4">
    </video>
  </div>
</div>

This experiment uses the diffuse X-ray image of SN1006 from Westerkamp et al. 2024 <d-cite key="westerkamp2024sn1006"></d-cite>.

We actually learn three Gaussian processes: a 1D radial profile for each spectral band, a 3D radial distortion field that shapes the bubble, and a 3D brightness scaling that captures surface variation.
The prior draws look kind of cool:

<div class="row justify-content-center mb-4">
  <div class="col-12">
    {% include figure.liquid path="assets/img/extras/snr-prior-samples.png" class="img-fluid rounded" %}
  </div>
</div>

[Philipp Frank](https://www.ph-frank.de/) and I hacked this together as a demo using [NIFTy](https://ift.pages.mpcdf.de/nifty/index.html), but additional constraints like velocity information can make this scientifically interesting! (See for example Milisavljevic & Fesen 2013 <d-cite key="milisavljevic2013cassiopeia"></d-cite>.)
