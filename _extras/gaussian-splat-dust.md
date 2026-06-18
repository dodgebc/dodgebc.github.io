---
layout: distill
title: Gaussian Splat Dust Map

video: assets/video/animation_orbit_128k_truth.mp4
importance: 2
bibliography: gaussian-splat-dust.bib
---

What happens if you try to fit the 3D distribution of dust in the Milky Way with Gaussian splats?

<div class="row justify-content-center mb-4">
  <div class="col-sm-6">
    <div style="overflow: hidden; aspect-ratio: 2550/1350;">
      <video style="width: 100%; height: 100%; object-fit: cover; object-position: center top;" autoplay loop muted playsinline>
        <source src="/assets/video/animation_128k_truth.mp4" type="video/mp4">
      </video>
    </div>
  </div>
  <div class="col-sm-6">
    <div style="overflow: hidden; aspect-ratio: 2550/1350;">
      <video style="width: 100%; height: 100%; object-fit: cover; object-position: center center; transform: scale(1.25);" autoplay loop muted playsinline>
        <source src="/assets/video/animation_orbit_128k_truth.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</div>

Specifically, we take the extinction data behind the Edenhofer et al. 2023 dust map <d-cite key="edenhofer2024parsecscalegalactic3ddust"></d-cite> and use our JAX implementation of 3D Gaussian raytracing <d-cite key="moenneloccoz20243dgaussianraytracing"></d-cite> to fit it with gradient descent. We can compare with the original map based on a Gaussian process prior below. (Video from [here](https://www.mpa-garching.mpg.de/1090068/hl202312).)

<div class="row justify-content-center mb-4">
  <div class="col-sm-6">
    <div style="overflow: hidden; aspect-ratio: 2550/1350;">
      <img src="/assets/img/extras/edenhofer_mollweide.png"
           style="width: 100%; height: 100%; object-fit: cover; object-position: center center;"
           alt="Edenhofer 2023 dust map Mollweide projection">
    </div>
  </div>
  <div class="col-sm-6">
    <div style="overflow: hidden; aspect-ratio: 2550/1350;">
      <video style="width: 100%; height: 100%; object-fit: cover; object-position: center center;" autoplay loop muted playsinline>
        <source src="/assets/video/3d_dust_edenhofer2023_rot_w_box_01.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</div>

Something correct seems to be happening, but the splats look a lot worse. Uncertainty quantification is important for more reasons than one! We should note the splats took only a few minutes to fit and can be rendered live much faster than voxels, so this is an interesting direction to pursue for visualization of 3D maps of the ISM.

For fun, here's an idea of the bounding meshes used to render these Gaussians extremely quickly.

<div class="row justify-content-center mb-4">
  <div class="col-sm-8">
    <video width="100%" autoplay loop muted playsinline>
      <source src="/assets/video/bounding_mesh.mp4" type="video/mp4">
    </video>
  </div>
</div>
