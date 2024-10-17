---
layout: page
title: GNByN
description: "GraphNETbyNET: A novel architecture of Graph Neural Netowrks (GNNs), inspiried by a variety of GNN and NN architectures to generated high-resolution brain connectivity graphs from low-resolution ones." 
img: assets/img/DGL_high_level_archi.png
importance: 2
category: RemoveThisToPublish AI Research
related_publications: true
---
This is the work of my group project in the Deep Graph-based Learning module in MSc AI at Imperial. For full comprehension, please refer to our [report](/assets/pdf/DGL_report.pdf).
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/DGL_high_level_archi.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    High-level architecture and step-level comutational graph. Batchnorm, laynorm and dropout layers are omitted. Learnable parameters (and dimensions) excluding VAEs and standard layers: (WRITE THE MATH NOTATION FROM THE CAPTION IN THE REPORT)
</div>

# Introduction
The popularity of **image super-resolution** (SR) research has grown significantly, especially with the adoption of Deep Learning (DL) techniques. SR methods increase the resolution of data such as **brain connectivity matrices** (BCMs)—compact representations of the strengths and patterns of the structural connections between brain regions. The large-scale acquisition of high-resolution BCMs from raw neuroimaging data is costly in terms of time, money and computational resources. Brain SR could significantly speed up acquisition, via the generation of of BCMs from existing ones, thus reducing the cost of research and increasing the availability of brain data for clinical applications—for instance Alzheimer's detection.

BCMs are naturally represented as graphs, where the **nodes** are represented by the brain regions and the **edges** by the brain connections. This representation makes the use of Graph Neural Netowrks (GNNs) more intuitive and efficient than traditional DL approaches. Recently, many graph-based frameworks have been proposed for brain graph SR. Inspired by GraphUNet, we propose a framework to learn the generation of high-resolution brain graphs inductively: GraphNETbyNET (GNByN).

### Results

To deremine the best model, we conducted a 3-fold cross validation on the training data, with the best model scoring a **MAE** of **0.13** on the testing data, underscoring the precision of our model's high-resolution brain image generations.

# Methods
To achieve this goal, the Monte Carlo Policy Gradient MAP-Elites (MCPG-ME) algorithm is developed. This algorithm removes the global actor-critic training seen in the state-of-the-art algorithms, as depicted in Figure 3, and constructs an objective function. This function allows the Monte Carlo Policy Gradient (MCPG) methods to operate effectively in an off-policy manner, enabling the acquisition of useful gradient estimates with minimal data. Particularly, as shown in Figure 5, each solution processed by the PG emitter in each iteration undergoes the following steps:

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
    Figure 5: Pipeline of the PG emitter in MCPG-ME algorithm.
</div>

For developement and technical details regarding MCPG-ME please refer to the 'Methodology' chapter of the [report](/assets/pdf/thesis_report_msc.pdf). The results of MCPG-ME are outlined in the 'Introduction' at the top of this page. For a more comprehensive understanding of the experiments and the implications of the experimental results, please refer to the ‘Experiments’ chapter of the [report](/assets/pdf/thesis_report_msc.pdf).


## Author
- Konstantinos Mitsides

