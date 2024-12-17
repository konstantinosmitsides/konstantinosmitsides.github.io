---
layout: page
title: MCPG-ME
description: "Monte Carlo Policy Gradient MAP-Elites: A synergy between Deep Reinforcement Learning and Quality Diversity Algorithms." 
img: assets/img/high-level_illustration.png
importance: 1
category: AI Research
related_publications: true
---
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/high-level_illustration.png" title="MCPG-ME" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
The MCPG-ME method employs two distinct variation operators within the standard MAP-Elites loop: (1) \(\textbf{Isoline Variation}\), which mutates a parent solution based on the genotype of a randomly selected elite; (2) \(\textbf{MCPG Variation}\), in which a parent and a random offspring from previous iterations are transformed to the episodic action space using \(\boldsymbol{F}\) for enriched representation, adjusted with \(\boldsymbol{P}\) based on quality metrics, and then reconverted to the genotype space through \(\boldsymbol{J}\), the Jacobian of \(\boldsymbol{F}\).
</div>

# Summary
Quality-Diversity (QD) optimisation, a family of evolutionary algorithms designed to produce a **diverse** set of **high-performing** solutions for a specific problem. MAP-Elites {% cite paper14 %} is a simple, yet effective QD optimisation algorithm that has shown success to a variety of fields. It has been used to teach robots how to adapt to damage {% cite paper9 paper10 paper11 %}, generate aerodynamic designs {% cite paper46 %} or to create content for games {% cite paper47 %}. MAP-Elites, however, is driven by Genetic Algorithms and often struggles to evolve neural networks with numerous parameters and is **inefficient in navigating the search space** of the optimisation problem. Additionally, actor-critic based QD algorithms, like PGA-MAP-Elites and DCRL, while capable of handling more complex models efficiently, suffer from **slow execution times** and are heavily dependent on the effectiveness of the actor-critic training, which **compromises scalability**. Addressing these challenges, this work introduces the Monte Carlo Policy Gradient MAP-Elites (MCPG-ME) algorithm, which utilises a Monte Carlo Policy Gradient (MCPG) based variation operator to apply quality-guided mutations. This novel variation operator allows MCPG-ME to independently optimise the solutions without relying on any actor-critic training, enhancing **scalability**, **runtime efficiency** while maintaining **competitive sample efficiency**. 

### Results

Evaluations across various continuous control locomotion tasks demonstrate that MCPG-ME:
- **Fast:** Achieves high execution speeds, operating significantly faster than the actor-critic based QD algorithms, in some cases running up to nine times faster.
  
- **Sample Efficient:** Surpasses the performance of the state-of-the-art algorithm, DCRL, in some of the tasks and consistently outperform all the other baselines in most of the tasks.
  
- **Scalable:** Demonstrates promising scalability capabilities when subjected to massive parallelisation.

- **Novel Solutions:** Excels in finding a diverse set of solutions, achieving equal or higher diversity score (coverage) than all competitors in all tasks. 


<div style="display: flex; justify-content: space-around; align-items: center;">
  <div>
    <img src="/assets/img/jumping_walker.gif" alt="A jumping Walker" style="width: 200px;">
    <p style="text-align: center;">A jumping Walker</p>
  </div>
  <div>
    <img src="/assets/img/anttrap_omni_vis.gif" alt="Ant going around the trap" style="width: 200px;">
    <p style="text-align: center;">Ant going around the trap</p>
  </div>
</div>

## Author
- Konstantinos Mitsides

