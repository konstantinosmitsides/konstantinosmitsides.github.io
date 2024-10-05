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

# Background 
Diversity is the essence of resilience and innovation. In nature, the survival and thriving of
species often rely not on their dominance in a single trait but on their ability to adapt in various
ways to their surroundings {% cite paper1 paper2 %}. Inspired by this, Quality-Diversity (QD) optimisation is a
family of evolutionary algorithms that aim to generate a set of both diverse and high-performing
solutions to a problem {% cite paper3 paper4 paper5 %}. QD optimisation localises competition among solutions by
focusing on those that are similar based on some predefined or not predefined {% cite paper6 %} characteristics. Therefore, unlike traditional optimisation methods that yield a single optimal solution, the
goal of QD algorithms is to illuminate a search space of interest called the behavioural descriptor
space, by finding the highest-performing solution per descriptor—the predefined characteristic(s) used to categorise and compare solutions. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/QD.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The objective of a QD-algorithm is to generate a collection of both diverse and high-performing solutions. This collection represents a (model free) projection of the highdimensional search space into a lower dimensional space defined by the solution descriptors. The quality of a collection is defined by its coverage of the BD space and by the global quality of the solutions that are kept in the collection. Adapted from {% cite paper4 %}.
</div>

In general, when optimising a model for a non-convex objective function, an algorithm that greedily follows the gradient of the objective might get stuck in local optima, thereby missing potentially better solutions. One can think of an agent navigating a maze filled with false exits. An algorithm that directs the agent to always move towards the closest apparent exit might lead the agent to a dead-end, missing the true exit that requires a more circuitous path through the maze. In contrast, QD optimisation avoids these pitfalls by simultaneously searching for multiple high-performing, diverse solutions. This approach can help identify ‘stepping stones’ that overcome local optima and lead to globally more optimal solutions {% cite paper7 paper8 %}.



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
