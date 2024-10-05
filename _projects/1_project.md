---
layout: page
title: Monte Carlo Policy Gradient based MAP-Elites
description: Final individual project in MSc AI at Imperial.
img: assets/img/rl_emitter_3.png
importance: 1
category: work
related_publications: true
---
# Introduction
This work explores the integration of Monte Carlo Policy Gradient (MCPG) methods with MAP- Elites to enhance Quality-Diversity (QD) optimisation, a family of evolutionary algorithms designed to produce a diverse set of high-performing solutions. Traditional QD optimisation, such as MAP-Elites, is driven by Genetic Algorithms and often struggles to evolve neural networks with numerous parameters and is inefficient in navigating the search space of the optimisation problem. Additionally, actor-critic based QD algorithms, like PGA-MAP-Elites and DCG-MAP- Elites-AI, while capable of handling more complex models efficiently, suffer from slow execution times and are heavily dependent on the effectiveness of the actor-critic training, which compromises scalability. Addressing these challenges, this work introduces the Monte Carlo Policy Gradient MAP-Elites (MCPG-ME) algorithm, which utilises MCPG in an off-policy manner. This novel approach allows MCPG-ME to independently optimise the solutions without relying on any actor-critic training, enhancing scalability, runtime efficiency while maintaining competitive sample efficiency. Evaluations across various continuous control locomotion tasks demonstrate that MCPG-ME excels in finding a diverse set of solutions, achieving equal or higher diversity score (coverage) than all competitors in all tasks. Additionally, it surpass the performance of the state-of-the-art algorithm, DCG-MAP-Elites-AI, in some of the tasks and consistently outperform all the other baselines in most of the tasks. Furthermore, MCPG-ME achieves high execution speeds, operating significantly faster than the actor-critic based QD algorithms, in some cases running up to nine times faster. Lastly, it demonstrates promising scalability capabilities when subjected to massive parallelisation.
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
