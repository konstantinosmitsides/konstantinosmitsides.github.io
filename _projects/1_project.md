---
layout: page
title: MCPG-ME
description: "Monte Carlo Policy Gradient MAP-Elites: A synergy between Deep Reinforcement Learning and Quality Diversity Algorithms." 
img: assets/img/rl_emitter_3.png
importance: 1
category: AI Research
related_publications: true
---
This is my final individual project in MSc AI at Imperial. Please see the full [report](/assets/pdf/thesis_report_msc.pdf) for a complete understanding.

# Introduction
This work explores the integration of Monte Carlo Policy Gradient (MCPG) methods with MAP-Elites to enhance Quality-Diversity (QD) optimisation, a family of evolutionary algorithms designed to produce a diverse set of high-performing solutions. Traditional QD optimisation, such as MAP-Elites, is driven by Genetic Algorithms and often struggles to evolve neural networks with numerous parameters and is inefficient in navigating the search space of the optimisation problem. Additionally, actor-critic based QD algorithms, like PGA-MAP-Elites and DCG-MAP- Elites-AI, while capable of handling more complex models efficiently, suffer from slow execution times and are heavily dependent on the effectiveness of the actor-critic training, which compromises scalability. Addressing these challenges, this work introduces the Monte Carlo Policy Gradient MAP-Elites (MCPG-ME) algorithm, which utilises MCPG in an off-policy manner. This novel approach allows MCPG-ME to independently optimise the solutions without relying on any actor-critic training, enhancing **scalability**, **runtime efficiency** while maintaining **competitive sample efficiency**. 

### Results

Evaluations across various continuous control locomotion tasks demonstrate that MCPG-ME:
- Excels in finding a diverse set of solutions, achieving equal or higher diversity score (coverage) than all competitors in all tasks. 
  
- Surpasses the performance of the state-of-the-art algorithm, DCG-MAP-Elites-AI, in some of the tasks and consistently outperform all the other baselines in most of the tasks.
  
- Achieves high execution speeds, operating significantly faster than the actor-critic based QD algorithms, in some cases running up to nine times faster.
  
- Demonstrates promising scalability capabilities when subjected to massive parallelisation.

# Background 

## MAP-Elites
MAP-Elites {% cite paper14 %} is a simple, yet effective QD optimisation algorithm that has shown success to a variety of fields. It has been used to teach robots how to adapt to damage {% cite paper9 paper10 paper11 %}, generate aerodynamic designs {% cite paper46 %} or to create content for games {% cite paper47 %}. Its objective is to find a **diverse** set of **high performing** solutions to a specific task, like any QD algorithm.

First, a user chooses a fitness function $$f(x)$$ that evaluates a solution $$x$$. For instance, if searching for robot locomotions, the fitness function could be how fast the robot could move from one specified location to another. Second, the user chooses $$N$$ dimensions of variation of interest that define a feature space of interest to the user—the Behavioural Descriptor (BD) space. For robot locomotions, one dimension of interests could be the time duration a specific foot is in touch with the ground in one episode. Similarly, other dimensions could represent the time duration corresponding to the other feet of the robot. Each dimension of variation is discretised based on user preference or available computational resources, and given a particular discretisation, MAP-Elites will search for the fittest solution for each cell in the $$N$$-dimensional BD space. This search is conducted in the space of all possible values of $$x$$—the search space—where $$x$$ is the description vector of a candidate solution. In the EAs vocabulary, the descriptor $$x$$ is called a genotype, and the robot locomotion, in our example, is the phenotype, $$p_{x}$$. Moreover, a behaviour function, $$b(x)$$ must exist in order to map the genotype to an $$N$$-dimensional vector, $$\mathbf{b}_{\mathbf{x}}$$, which describes $$x$$'s features.

MAP-Elites begins by randomly generating  $$K \in \mathbb{N}$$  genotypes and assessing each for fitness (performance) and features (behaviour). These genotypes are then assigned to corresponding cells in the BD space. If multiple genotypes map to the same cell, only the fittest one is retained. Once initialised, the algorithm proceeds with the following steps, repeated until a termination criterion is met (see Figure 1):

<i>i.</i> **Selection Mechanism**: A genotype is randomly selected from one of the cells in the map.

<i>ii.</i> **Genetic Algorithms (GA) variation**: The selected genotype produces an offspring through mutation—introducing random changes to the genotype (injecting noise into the parameters)—and/or crossover, which combines the genotypes of two parents.

<i>iii.</i> **Evaluation**: The offspring's behaviour and fitness are evaluated.

<i>iv.</i> **Addition Mechanism**: The offspring is assigned to a cell based on its behavioral characteristics. If the cell is empty, the offspring is placed directly. If the cell is occupied, the offspring replaces the current occupant only if it has higher fitness; otherwise, the original occupant is retained and the offspring is discarded, or '*dies*'.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ME.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1: Main cycle of MAP-ELites. Adapted from {% cite MAP_Eites_vis %}. This figure represents a task with a 2-dimensional BD space.
</div>

## Synergy between MAP-Elites and Deep Reinforcement Learning
To overcome the limitations of GAs in MAP-Elites, specifically their inefficiency and inadequacy for evolving high-dimensional neural networks, significant advancements have been made by integrating Deep Reinforcement Learning (DRL) {% cite paper20 paper21 %} into the MAP-Elites framework. Specifically, traditional GA-based variation operators are enhanced with Policy Gradient (PG) {% cite paper22 paper23 %} methods. These methods, a specialised branch of DRL, are particularly effective for training large neural networks to navigate high-dimensional state spaces and manage continuous action spaces {% cite paper24 paper25 paper26 %}. Their integration into MAP-Elites leverages these capabilities, rendering the combined framework more capable of tackling complex optimisation challenges. 

All the PG-based MAP-Elites algorithms discussed in this work follow the conventional MAP-Elites algortihm, where in addition to the GA-based variation operator they have a PG-based variation operator, as seen in Figure 2. Thus, in each iteration, half of the solutions are being optimised by the PG operator and the rest by the GA operator. 

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/RL-ME.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2: The RL & MAP-Elites pipeline.
</div>


Currently, the state-of-the-art QD-PG algorithms are the actor-critic based MAP-Elites algorithms, namely PGA-MAP-Elites {% cite paper27 %} and DCG-MAP-Elites-AI {% cite paper28 paper29 %}. In PGA-MAP-Elites, a single “greedy” policy (the actor) is trained alongside the critics to predict the action with the highest action-value for the critic update target, similar to the actor in the TD3 {% cite TD3 %} algorithm. However, unlike the actor in TD3, the greedy controller does not directly interact with the environment. Instead experiences from the solution evaluations, which are stored as transitions in the replay buffer, are used for interaction with the environment. Asynchronously with each iteration of selection, variation, and evaluation, the critics are trained for a specified number of gradient descent steps and are shared with all the solutions processed by the PG emitter so that fitness gradient estimates are obtained immediately for any solution, without requiring any environment interaction by the solution for which the fitness gradient is being calculated. To address the limitations of the PGA-MAP-Elites, particularly its shortcomings on tasks where the fitness objecitve directly discourages diversity in solutons, DCG-MAP-Elites-AI conditions the actor-critic training to the descriptors of the solutions. The high-level pipeline of the PG emitter in the two actor-critic based MAP-Elites algorithms is seen in Figure 3.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/actor-critic_training.jpeg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 3: Pipeline of the PG emitter in the actor-critic based MAP-Elites algorithms.
</div>

# Problem
While the state-of-the-art QD-DRL algorithms excel in sample efficiency, they have:
- **High training time:** Substantial time required for actor-critic training.
  
- **Poor scalability:** Actor-critic training requires a sufficient number of sequential learning steps to converge and the trained critic is shared across all solutions.

# Goal
The goal of this project is to synergise PG methods with MAP-Elites to develop an algorithm that combines the fast execution and scalability of MAP-Elites with the efficient optimisation capabilities of PG methods. Specifically, we aim to achieve performance comparable to actor-critic based MAP-Elites algorithms but with significantly reduced runtime. Furthermore, we intend for the algorithm to remain scalable, meaning that additional hardware resources can enhance final performance or reduce training time without compromising final performance.

# Methods
To achieve this goal, the Monte Carlo Policy Gradient MAP-Elites (MCPG-ME) algorithm is developed. This algorithm removes the global actor-critic training seen in the state-of-the-art algorithms (see Figure 3) and constructs an objective function to allow Monte Calro Poliy Gradient (MCPG) methods to operate effectively in an off-policy manner so that useful gradient estimates can be obtained with the least amount of data possible. In particular, as seen in Figure 4, each solution processed by the PG emitter in each iteration undergoes the following steps:

<i>i.</i> **Trajectory Sampling:** Randomly sample $$N$$ trajectories from the offspring evaluations of the previous generation.

<i>ii.</i> **Objective Function Computation:** States, actions and adjusted rewards-to-go are used to compute the objective function.

<i>iii.</i> **Policy Update:** Parameters are updated $$n$$ times in the direction of the gradient.

<i>iv.</i> **Evaluation & Trajectory Buffer Update:** Offspring evaluated for archive inclusion; buffer refreshed with current evaluation trajectories.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/solution.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 4: Pipeline of the PG emitter in MCPG-ME algorithm.
</div>

For developement and technical details regarding MCPG-ME please refer to the 'Methodology' section of the [report](/assets/pdf/thesis_report_msc.pdf).


## Author
- Konstantinos Mitsides

