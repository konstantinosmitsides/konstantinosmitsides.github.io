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
The MCPG-ME method employs two distinct variation operators within the standard MAP-Elites loop: (1) \(\textbf{Isoline Variation}\), which mutates a parent genotype based on that of a randomly selected elite; (2) \(\textbf{MCPG Variation}\), where the behavior of a parent genotype is computed over a trajectory of states previously encountered by another. The behavior is then adjusted with \(\boldsymbol{P}\) based on quality metrics estimated from comparisons with the second genotype's behavior. This adjusted behavior is converted back into genotype space using \(\boldsymbol{J}\) to mutate the parent genotype.
</div>

# Summary
Quality-Diversity (QD) optimization, a family of evolutionary algorithms designed to produce a **diverse** set of **high-performing** solutions for a specific problem. MAP-Elites {% cite paper14 %} is a simple, yet effective QD optimization algorithm that has shown success to a variety of fields. It has been used to teach robots how to adapt to damage {% cite paper9 paper10 paper11 %}, generate aerodynamic designs {% cite paper46 %} or to create content for games {% cite paper47 %}. MAP-Elites, however, is driven by Genetic Algorithms and often struggles to evolve neural networks with numerous parameters and is **inefficient in navigating the search space** of the optimization problem. Additionally, actor-critic based QD algorithms, like PGA-MAP-Elites {% cite PGA %} and DCRL {% cite DCRL %} , while capable of handling more complex models efficiently, suffer from **slow execution times** and are heavily dependent on the effectiveness of the actor-critic training, which **compromises scalability**. Addressing these challenges, this work introduces the Monte Carlo Policy Gradient MAP-Elites (MCPG-ME) algorithm, which utilizes a Monte Carlo Policy Gradient (MCPG) based variation operator to apply quality-guided mutations to the solutions. This novel variation operator allows MCPG-ME to independently optimize the solutions without relying on any actor-critic training, enhancing **scalability**, **runtime efficiency** while maintaining **competitive sample efficiency**. 

### Results

Evaluations across various continuous control locomotion tasks demonstrate that MCPG-ME:
- **Fast:** Achieves high execution speeds, operating significantly faster than the actor-critic based QD algorithms, in some cases running up to nine times faster.
  
- **Sample Efficient:** Surpasses the performance of the state-of-the-art algorithm, DCRL, in some of the tasks and consistently outperform all the other baselines in most of the tasks.
  
- **Scalable:** Demonstrates promising scalability capabilities when subjected to massive parallelization.

- **Novel Solutions:** Excels in finding a diverse set of solutions, achieving equal or higher diversity score (coverage) than all competitors in all tasks. 

In these tasks, solutions refer to the robot's walking behavior. The **quality** of solutions refers to the effectiveness with which the robot completes a given task, and the **diversity** of solutions denotes the range of different walking styles the robot can successfully employ. See below some interesting solutions:
<div style="display: flex; justify-content: space-around; align-items: center; flex-wrap: wrap;">
  <div style="flex: 1 0 33%; text-align: center; padding: 5px;">
    <img src="/assets/img/jumping_walker.gif" alt="A jumping Walker" style="max-width: 200px; height: 155px; object-fit: cover;">
    <p style="text-align: center;">A hopping Walker</p>
  </div>
  <div style="flex: 1 0 33%; text-align: center; padding: 5px;">
    <img src="/assets/img/anttrap_omni_vis.gif" alt="Ant going around the trap" style="max-width: 200px; height: 155px; object-fit: cover;">
    <p style="text-align: center;">Ant going around the trap</p>
  </div>
  <div style="flex: 1 0 33%; text-align: center; padding: 5px;">
    <img src="/assets/img/walker_normal.gif" alt="A fast Walker" style="max-width: 200px; height: 155px; object-fit: cover;">
    <p style="text-align: center;">A fast Walker</p>
  </div>
</div>
For technical details of the method and the official results, please stay tuned. The paper is coming soon!

## Author
- *Konstantinos Mitsides* **(konstantinos.mistides23@imperial.ac.uk)**

